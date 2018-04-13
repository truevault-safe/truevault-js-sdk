import {version} from './package.json'
import nodeFetch from 'node-fetch';
import URI from 'urijs';
import base64 from 'base-64';
import nodeFormData from 'form-data';

const tvFetch = typeof fetch !== "undefined" ? fetch : nodeFetch;
const tvFormData = typeof FormData !== "undefined" ? FormData : nodeFormData;


/**
 * A client for the [TrueVault HTTP API](https://docs.truevault.com/).
 *
 * **Overview**
 *
 * The TrueVault JS SDK makes it easy to communicate with the TrueVault API from JavaScript web apps, nodejs servers,
 * and lambda methods.
 *
 * ***JS Web example***
 * ```js
 * async function onLoginClicked() {
 *   var trueVaultClient = await TrueVault.login(TRUEVAULT_ACCOUNT_ID, username, password)
 *   localStorage.trueVaultAccessToken = trueVaultClient.accessToken;
 *   var userInfo = trueVaultClient.readCurrentUser();
 *   ...
 * }
 * ```
 *
 * **Error Handling**
 *
 * If any request fails, the method will throw an error. The thrown `Error` instance will have the following properties:
 *
 * - `message`: the message returned by the TrueVault API
 * - `transaction_id`: a unique ID that can be used in support requests to help@truevault.com to help us resolve the error
 * - `error`: the machine-readable error object returned by TrueVault.
 *
 * For more information on TrueVault API responses, see https://docs.truevault.com/overview#api-responses.
 *
 * **Authentication**
 *
 * If you already have an API key or access token, use the constructor. If you have a username and password, see
 * `login()`. See https://docs.truevault.com/overview#authentication for more on authentication concepts in TrueVault.
 *
 * To authenticate, provide one of the following styles of objects based on how you wish to authenticate:
 *
 * - `{ apiKey: 'your API key' }`
 * - `{ accessToken: 'your access token' }`
 * - `{ httpBasic: 'http basic base64 string' }`
 * - `null`, to indicate no authentication is to be provided to the server
 *
 * @param {object} authn Authentication info, or null if no authentication info is to be used.
 * @param {string} host optional parameter specifying TV API host; defaults to https://api.truevault.com
 */
class TrueVaultClient {
    constructor(authn, host) {
        this._authHeader = null;
        if (!authn) {
            // no auth
            this._authHeader = null;
        } else if (typeof authn === 'object') {
            if (authn.hasOwnProperty('apiKey')) {
                this._authHeader = TrueVaultClient._makeHeaderForUsername(authn['apiKey'])
            } else if (authn.hasOwnProperty('accessToken')) {
                this._accessToken = authn['accessToken'];
                this._authHeader = TrueVaultClient._makeHeaderForUsername(this.accessToken)
            } else if (authn.hasOwnProperty('httpBasic')) {
                this._authHeader = `Basic ${authn['httpBasic']}`;
            }
        } else {
            throw new Error('Invalid authentication method provided');
        }

        this.host = host || 'https://api.truevault.com';
    }

    /**
     * Returns the TrueVault access token that was supplied in the constructor/returned from the login call. Throws
     * if the client was created without an access token (e. g. created with an API key).
     * @returns {string}
     */
    get accessToken() {
        if (!this._accessToken) {
            throw new Error('No access token set. This client may have been configured with an API key or a custom auth header');
        }
        return this._accessToken;
    }

    /**
     * Returns the Authentication: header used for making requests (e. g. "Basic ABC123"). Useful if you need to make
     * raw requests for some reason.
     * @returns {*}
     */
    get authHeader() {
        return this._authHeader;
    }

    async performLegacyRequest(path, options) {
        if (!!this.authHeader) {
            if (!options) {
                options = {};
            }
            if (!options.headers) {
                options.headers = {};
            }
            options.headers.Authorization = this.authHeader;
        }

        const uri = URI(`${this.host}/${path}`)
            .addQuery("_tv_sdk", version)
            .toString();

        const response = await tvFetch(uri, options);
        const responseBody = await response.text();

        let json;
        try {
            json = JSON.parse(responseBody);
        } catch (e) {
            throw new Error(`non-JSON response: ${responseBody}`);
        }

        if (json.result === 'error') {
            const error = new Error(json.error.message);
            error.error = json.error;
            error.transaction_id = json.transaction_id;
            throw error;
        } else {
            return json;
        }
    }

    async performJSONRequest(path, options) {
        if (!options) {
            options = {};
        }

        if (!options.headers) {
            options.headers = {};
        }
        options.headers['Content-Type'] = 'application/json';
        return this.performLegacyRequest(path, options);
    }

    /**
     * Performs a legacy (non-v2-JSON) request. By using XHR rather than fetch, it's able to supply progress
     * information.
     * @param method
     * @param url
     * @param formData
     * @param progressCallback
     * @param responseType
     * @returns {Promise<XMLHTTPRequest>|Promise<Object>} A promise resolving to an XHR object for blobs, and the parsed JSON object for JSON
     */
    performLegacyRequestWithProgress(method, url, formData, progressCallback, responseType) {
        // We are using XMLHttpRequest here since fetch does not have a progress API
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if (method.toLowerCase() === 'get') {
                xhr.addEventListener('progress', progressCallback);
                xhr.addEventListener('load', progressCallback);
            } else {
                xhr.upload.addEventListener('progress', progressCallback);
                xhr.upload.addEventListener('load', progressCallback);
            }

            xhr.open(method, url);
            xhr.setRequestHeader('Authorization', this.authHeader);
            xhr.responseType = responseType;
            xhr.onload = () => {
                switch (responseType) {
                    case "json":
                        const responseJson = xhr.response;
                        if (responseJson.result === 'error') {
                            const error = new Error(responseJson.error.message);
                            error.error = responseJson.error;
                            reject(error);
                        } else {
                            resolve(responseJson);
                        }
                        break;
                    case "blob":
                        resolve(xhr);
                        break;
                    default:
                        throw new Error(`Unsupported responseType: ${responseType}`);
                }
            };
            xhr.onerror = () => reject(Error('Network error'));
            xhr.send(formData);
        });
    }

    /**
     * Useful when you want to create a client starting from a user's username and password as opposed to an API key
     * or access token. The resulting TrueVaultClient has an accessToken property you can use to retrieve the raw
     * TrueVault access token if needed (e. g. to save in localStorage).
     * See https://docs.truevault.com/authentication#login-a-user.
     * @param {string} accountId account id that the user belongs to.
     * @param {string} username user's username.
     * @param {string} password user's password.
     * @param {string} [mfaCode] current MFA code, if user has MFA configured.
     * @param {string} [host] host optional parameter specifying TV API host; defaults to https://api.truevault.com
     * @returns {Promise.<TrueVaultClient>}
     */
    static async login(accountId, username, password, mfaCode, host) {
        const accessToken = await TrueVaultClient.generateAccessToken(accountId, username, password, mfaCode, host);

        return new TrueVaultClient({'accessToken': accessToken}, host);
    }

    /**
     * Log in with a username and password and return the resulting access token.
     * See https://docs.truevault.com/authentication#login-a-user.
     * @param {string} accountId account id that the user belongs to.
     * @param {string} username user's username.
     * @param {string} password user's password.
     * @param {string} [mfaCode] current MFA code, if user has MFA configured.
     * @param {string} [host] host optional parameter specifying TV API host; defaults to https://api.truevault.com
     * @returns {Promise.<string>}
     */
    static async generateAccessToken(accountId, username, password, mfaCode, host) {
        const formData = new tvFormData();
        formData.append("account_id", accountId);
        formData.append("username", username);
        formData.append("password", password);
        if (!!mfaCode) {
            formData.append("mfa_code", mfaCode);
        }

        const tvClient = new TrueVaultClient(null, host);
        const response = await tvClient.performLegacyRequest(`v1/auth/login`, {
            method: 'POST',
            body: formData
        });

        return response.user.access_token;
    }

    /**
     * Log the authenticated user out, which deactivates its access token. See
     * https://docs.truevault.com/authentication#logout-a-user.
     * @returns {Promise.<Object>}
     */
    async logout() {
        const response = await this.performLegacyRequest(`v1/auth/logout`, {method: 'POST'});
        this._authHeader = null;
        return response.logout;
    }

    /**
     * Get data about the authenticated user. See https://docs.truevault.com/authentication#verify-a-user.
     * @param [full=true] Whether to include user attributes and groups
     * @returns {Promise.<Object>}
     */
    async readCurrentUser(full) {
        if (full !== false) {
            full = true;
        }

        const response = await this.performLegacyRequest(`v1/auth/me?full=${full}`);
        const user = response.user;
        if (user.attributes) {
            user.attributes = JSON.parse(base64.decode(user.attributes));
        }
        return user;
    }

    /**
     * Updates the currently authenticated user's attributes. See https://docs.truevault.com/authentication#verify-a-user.
     * @param attributes
     * @returns {Promise<Object>}
     */
    async updateCurrentUser(attributes) {
        const formData = new tvFormData();
        formData.append("attributes", base64.encode(JSON.stringify(attributes)));

        const response = await this.performLegacyRequest('v1/auth/me?full=true', {
            method: 'PUT',
            body: formData
        });

        const user = response.user;
        if (user.attributes) {
            user.attributes = JSON.parse(base64.decode(user.attributes));
        }
        return user;
    }

    /**
     * List all users in the account. See https://docs.truevault.com/users#list-all-users.
     * @param [full=false] Whether to return user attributes and group IDs
     * @returns {Promise.<Array>}
     */
    async listUsers(full) {
        return this.listUsersWithStatus(null, full);
    }

    async listUsersWithStatus(status, full) {
        /**
         * List all users in the account. See https://docs.truevault.com/users#list-all-users.
         * @param [status=null] If ACTIVE, DEACTIVATED, PENDING, or LOCKED only returns users with that status
         * @param [full=false] Whether to return user attributes and group IDs
         * @returns {Promise.<Array>}
         */
        if (full !== true) {
            full = false;
        }
        var path = `v1/users?full=${full}`;

        if (status) {
            path = `${path}&status=${status}`;
        }

        const response = await this.performLegacyRequest(path);
        return response.users.map(user => {
            if (user.attributes) {
                user.attributes = JSON.parse(base64.decode(user.attributes));
            }
            return user;
        });
    }

    /**
     * Read a single user. See https://docs.truevault.com/users#read-a-user.
     * @returns {Promise.<Object>}
     */
    async readUser(userId) {
        const users = await this.readUsers([userId]);
        return users[0];
    }

    /**
     * Reads multiple users. See https://docs.truevault.com/users#read-a-user.
     * @returns {Promise.<Array>}
     */
    async readUsers(userIds) {
        const response = await this.performLegacyRequest(`v2/users/${userIds.join(',')}?full=true`);
        return response.users;
    }

    /**
     * Create a new user. See https://docs.truevault.com/users#create-a-user.
     * @param {string} username new user's username.
     * @param {string} password new user's password.
     * @param {Object} [attributes] new user's attributes, if desired.
     * @param {Array} [groupIds] add user to the given groups, if provided.
     * @param {string} [status] the newly created user's status
     * @returns {Promise.<Object>}
     */
    async createUser(username, password, attributes, groupIds, status) {
        const formData = new tvFormData();
        formData.append("username", username);
        formData.append("password", password);
        if (attributes) {
            formData.append("attributes", base64.encode(JSON.stringify(attributes)));
        }
        if (groupIds) {
            formData.append("group_ids", groupIds.join(","));
        }
        if (status) {
            formData.append("status", status);
        }
        const response = await this.performLegacyRequest('v1/users', {
            method: 'POST',
            body: formData
        });
        return response.user;
    }

    /**
     * Update a user's attributes. See https://docs.truevault.com/users#update-a-user.
     * @param {string} userId the user's userId
     * @param {Object} attributes
     * @returns {Promise.<Object>}
     */
    async updateUserAttributes(userId, attributes) {
        const formData = new tvFormData();
        formData.append("attributes", base64.encode(JSON.stringify(attributes)));

        const response = await this.performLegacyRequest(`v1/users/${userId}`, {
            method: 'PUT',
            body: formData
        });
        return response.user;
    }

    /**
     * Update a user's status. See https://docs.truevault.com/users#update-a-user.
     * @param {string} userId the user's userId
     * @param {string} status
     * @returns {Promise.<Object>}
     */
    async updateUserStatus(userId, status) {
        const formData = new tvFormData();
        formData.append("status", status);

        const response = await this.performLegacyRequest(`v1/users/${userId}`, {
            method: 'PUT',
            body: formData
        });
        return response.user;
    }

    /**
     * Update a user's username. See https://docs.truevault.com/users#update-a-user.
     * @param {string} userId the user id to change.
     * @param {string} newUsername user's new username.
     * @returns {Promise.<Object>}
     */
    async updateUserUsername(userId, newUsername) {
        const formData = new tvFormData();
        formData.append("username", newUsername);

        const response = await this.performLegacyRequest(`v1/users/${userId}`, {
            method: 'PUT',
            body: formData
        });
        return response.user;
    }

    /**
     * Update a user's password. See https://docs.truevault.com/users#update-a-user.
     * @param {string} userId the user id to change.
     * @param {string} newPassword user's new password.
     * @returns {Promise.<Object>}
     */
    async updateUserPassword(userId, newPassword) {
        const formData = new tvFormData();
        formData.append("password", newPassword);

        const response = await this.performLegacyRequest(`v1/users/${userId}`, {
            method: 'PUT',
            body: formData
        });
        return response.user;
    }

    /**
     * Delete a user. See https://docs.truevault.com/users#delete-a-user
     * @param {string} userId the user id to delete.
     * @returns {Promise.<Object>}
     */
    async deleteUser(userId) {
        const response = await this.performLegacyRequest(`v1/users/${userId}`, {
            method: 'DELETE',
        });
        return response.user;
    }

    /**
     * Create an API key for a user. See https://docs.truevault.com/users#create-api-key-for-a-user.
     * @param {string} userId user id.
     * @returns {Promise.<string>}
     */
    async createUserApiKey(userId) {
        const response = await this.performLegacyRequest(`v1/users/${userId}/api_key`, {method: 'POST'});
        return response.api_key;
    }

    /**
     * Create an access token for a user. See https://docs.truevault.com/users#create-access-token-for-a-user.
     * @param {string} userId user id.
     * @returns {Promise.<string>}
     */
    async createUserAccessToken(userId) {
        const response = await this.performLegacyRequest(`v1/users/${userId}/access_token`, {method: 'POST'});
        return response.user.access_token;
    }

    /**
     * Start MFA enrollment for a user. See https://docs.truevault.com/users#start-mfa-enrollment-for-a-user.
     * @param {string} userId user id.
     * @param {string} issuer MFA issuer.
     * @returns {Promise.<Object>}
     */
    async startUserMfaEnrollment(userId, issuer) {
        const result = await this.performJSONRequest(`v1/users/${userId}/mfa/start_enrollment`, {
            method: 'POST',
            body: JSON.stringify({issuer})
        });
        return result.mfa;
    }

    /**
     * Finalize MFA enrollment for a user. See https://docs.truevault.com/users#finalize-mfa-enrollment-for-a-user.
     * @param {string} userId user id.
     * @param {string} mfaCode1 first MFA code.
     * @param {string} mfaCode2 second MFA code.
     * @returns {Promise.<undefined>}
     */
    async finalizeMfaEnrollment(userId, mfaCode1, mfaCode2) {
        await this.performJSONRequest(`v1/users/${userId}/mfa/finalize_enrollment`, {
            method: 'POST',
            body: JSON.stringify({mfa_code_1: mfaCode1, mfa_code_2: mfaCode2})
        });
    }

    /**
     * Unenroll a user from MFA. See #https://docs.truevault.com/users#unenroll-mfa-for-a-user.
     * @param {string} userId user id.
     * @param {string} mfaCode MFA code for user.
     * @param {string} password user's password.
     * @returns {Promise.<undefined>}
     */
    async unenrollMfa(userId, mfaCode, password) {
        await this.performJSONRequest(`v1/users/${userId}/mfa/unenroll`, {
            method: 'POST',
            body: JSON.stringify({mfa_code: mfaCode, password: password})
        });
    }

    /**
     * Create a new group. See https://docs.truevault.com/groups#create-a-group.
     * @param {string} name group name.
     * @param {Array} policy group policy. See https://docs.truevault.com/groups.
     * @param {Array} [userIds] user ids to add to the group.
     * @returns {Promise.<Object>}
     */
    async createGroup(name, policy, userIds) {
        const formData = new tvFormData();
        formData.append("name", name);
        formData.append("policy", base64.encode(JSON.stringify(policy)));
        if (!!userIds) {
            formData.append("user_ids", userIds.join(','));
        }
        const response = await this.performLegacyRequest('v1/groups', {
            method: 'POST',
            body: formData
        });
        return response.group;
    }

    /**
     * Update an existing group's name and policy. See https://docs.truevault.com/groups#update-a-group.
     * @param {string} groupId group id to update.
     * @param {string} name group name.
     * @param {Array} policy group policy. See https://docs.truevault.com/groups.
     * @returns {Promise.<Object>}
     */
    async updateGroup(groupId, name, policy) {
        const formData = new tvFormData();
        if (!!name) {
            formData.append("name", name);
        }

        if (!!policy) {
            formData.append("policy", base64.encode(JSON.stringify(policy)));
        }

        const response = await this.performLegacyRequest(`v1/groups/${groupId}`, {
            method: 'PUT',
            body: formData
        });
        return response.group;
    }

    /**
     * Delete a group. See https://docs.truevault.com/groups#delete-a-group.
     * @param {string} groupId group id to delete.
     * @returns {Promise.<Object>}
     */
    async deleteGroup(groupId) {
        const response = await this.performLegacyRequest(`v1/groups/${groupId}`, {
            method: 'DELETE'
        });
        return response.group;
    }

    /**
     * List all groups. See https://docs.truevault.com/groups#list-all-groups.
     * @returns {Promise.<Array>}
     */
    async listGroups() {
        const response = await this.performLegacyRequest(`v1/groups`);
        return response.groups;
    }

    /**
     * Gets a group, including user ids. See https://docs.truevault.com/groups#read-a-group.
     * @param {string} groupId group id to get.
     * @returns {Promise.<Object>}
     */
    async readFullGroup(groupId) {
        const response = await this.performLegacyRequest(`v1/groups/${groupId}?full=true`);
        return response.group;
    }

    /**
     * Add users to a group. See https://docs.truevault.com/groups#add-users-to-a-group.
     * @param {string} groupId group to add to.
     * @param {Array} userIds user ids to add to the group.
     * @returns {Promise.<undefined>}
     */
    async addUsersToGroup(groupId, userIds) {
        await this.performJSONRequest(`v1/groups/${groupId}/membership`, {
            method: 'POST',
            body: JSON.stringify({user_ids: userIds})
        });
    }

    /**
     * Remove users from a group. See https://docs.truevault.com/groups#remove-users-from-a-group
     * @param {string} groupId group to add to.
     * @param {Array} userIds user ids to add to the group.
     * @returns {Promise.<undefined>}
     */
    async removeUsersFromGroup(groupId, userIds) {
        await this.performJSONRequest(`v1/groups/${groupId}/membership/${userIds.join(',')}`, {
            method: 'DELETE'
        });
    }

    /**
     * Add users to a group returning user ids. See https://docs.truevault.com/groups#update-a-group.
     * @param {string} groupId group to add to.
     * @param {Array} userIds user ids to add to the group.
     * @returns {Promise.<Object>}
     */
    async addUsersToGroupReturnUserIds(groupId, userIds) {
        const formData = new tvFormData();
        formData.append('operation', 'APPEND');
        formData.append('user_ids', userIds.join(','));

        const response = await this.performLegacyRequest(`v1/groups/${groupId}`, {
            method: 'PUT',
            body: formData
        });
        return response.group;
    }

    /**
     * Remove users from a group. See https://docs.truevault.com/groups#update-a-group
     * @param {string} groupId group to remove from.
     * @param {Array} userIds user ids to remove from the group.
     * @returns {Promise.<Object>}
     */
    async removeUsersFromGroupReturnUserIds(groupId, userIds) {
        const formData = new tvFormData();
        formData.append('operation', 'REMOVE');
        formData.append('user_ids', userIds.join(','));

        const response = await this.performLegacyRequest(`v1/groups/${groupId}`, {
            method: 'PUT',
            body: formData
        });
        return response.group;
    }

    /**
     * Perform a user search. See https://docs.truevault.com/documentsearch#search-users.
     * @param {Object} searchOption search query. See https://docs.truevault.com/documentsearch#defining-search-options.
     * @returns {Promise.<Object>}
     */
    async searchUsers(searchOption) {
        const formData = new tvFormData();
        formData.append("search_option", base64.encode(JSON.stringify(searchOption)));

        const response = await this.performLegacyRequest(`v1/users/search`, {
            method: 'POST',
            body: formData
        });

        const documents = response.data.documents.map(doc => {
            if (doc.attributes) {
                doc.attributes = JSON.parse(base64.decode(doc.attributes));
            }
            return doc;
        });

        return {
            info: response.data.info,
            documents
        };
    }

    /**
     * Lists all vaults. See https://docs.truevault.com/vaults#list-all-vaults.
     * @param [page=1]
     * @param [per_page=100]
     * @returns {Promise<*>}
     */
    async listVaults(page, per_page) {
        if (typeof page !== "number") {
            page = 1;
        }
        if (typeof per_page !== "number") {
            per_page = 100
        }
        const response = await this.performLegacyRequest(`v1/vaults?page=${page}&per_page=${per_page}`);
        return response.vaults;
    }

    /**
     * Create a new vault. See https://docs.truevault.com/vaults#create-a-vault.
     * @param {string} name the name of the new vault.
     * @returns {Promise.<Object>}
     */
    async createVault(name) {
        const formData = new tvFormData();
        formData.append("name", name);

        const response = await this.performLegacyRequest('v1/vaults', {
            method: 'POST',
            body: formData
        });
        return response.vault;
    }

    /**
     * Read a vault. See https://docs.truevault.com/vaults#read-a-vault
     * @param vaultId
     * @returns {Promise<Object>}
     */
    async readVault(vaultId) {
        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}`);

        return response.vault;
    }

    /**
     * Update a vault. See https://docs.truevault.com/vaults#update-a-vault
     * @param vaultId
     * @param name
     * @returns {Promise<Object>}
     */
    async updateVault(vaultId, name) {
        const formData = new tvFormData();
        formData.append('name', name);

        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}`, {
            method: 'PUT',
            body: formData
        });

        return response.vault;
    }

    /**
     * Delete a vault. See https://docs.truevault.com/vaults#delete-a-vault
     * @param vaultId
     * @returns {Promise<Object>}
     */
    async deleteVault(vaultId) {
        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}`, {
            method: 'DELETE'
        });

        return response.vault;
    }

    /**
     * Create a new schema. See https://docs.truevault.com/schemas#create-a-schema.
     * @param {string} vaultId the vault that should contain the schema.
     * @param {string} name the name of the schema.
     * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
     * @returns {Promise.<Object>}
     */
    async createSchema(vaultId, name, fields) {
        const schemaDefinition = {name, fields};
        const formData = new tvFormData();
        formData.append("schema", base64.encode(JSON.stringify(schemaDefinition)));

        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/schemas`, {
            method: 'POST',
            body: formData
        });
        return response.schema;
    }

    /**
     * Create a new schema. See https://docs.truevault.com/schemas#update-a-schema
     * @param {string} vaultId the vault that should contain the schema.
     * @param {string} schemaId the schemathat should contain the schema.
     * @param {string} name the name of the schema.
     * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
     * @returns {Promise.<Object>}
     */
    async updateSchema(vaultId, schemaId, name, fields) {
        const schemaDefinition = {name, fields};
        const formData = new tvFormData();
        formData.append("schema", base64.encode(JSON.stringify(schemaDefinition)));

        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/schemas/${schemaId}`, {
            method: 'PUT',
            body: formData
        });
        return response.schema;
    }

    /**
     * Read a schema. See https://docs.truevault.com/schemas#read-a-schema
     * @param vaultId
     * @param schemaId
     * @returns {Promise<Object>}
     */
    async readSchema(vaultId, schemaId) {
        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/schemas/${schemaId}`);
        return response.schema;
    }

    /**
     * List all schemas in a vault. See https://docs.truevault.com/schemas#list-all-schemas
     * @param vaultId
     * @returns {Promise<Object>}
     */
    async listSchemas(vaultId) {
        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/schemas`);
        return response.schemas;
    }

    /**
     * Delete a schema. See https://docs.truevault.com/schemas#delete-a-schema
     * @param vaultId
     * @param schemaId
     * @returns {Promise<undefined>}
     */
    async deleteSchema(vaultId, schemaId) {
        await this.performLegacyRequest(`v1/vaults/${vaultId}/schemas/${schemaId}`, {
            method: 'DELETE'
        });
    }

    /**
     * Create the user schema. See https://docs.truevault.com/schemas#create-the-user-schema
     * @param {string} accountId account id that the user schema belongs to.
     * @param {string} name the name of the schema.
     * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
     * @returns {Promise.<Object>}
     */
    async createUserSchema(accountId, name, fields) {
        const schemaDefinition = {name, fields};
        const formData = new tvFormData();
        formData.append("schema", base64.encode(JSON.stringify(schemaDefinition)));

        const response = await this.performLegacyRequest(`v1/accounts/${accountId}/user_schema`, {
            method: 'POST',
            body: formData
        });
        return response.user_schema;
    }

    /**
     * Read the user schema. See https://docs.truevault.com/schemas#read-the-user-schema
     * @param {string} accountId account id that the user schema belongs to.
     * @returns {Promise.<Object>}
     */
    async readUserSchema(accountId) {
        const response = await this.performLegacyRequest(`v1/accounts/${accountId}/user_schema`, {
            method: 'GET',
        });
        return response.user_schema;
    }

    /**
     * Update the user schema. See https://docs.truevault.com/schemas#update-the-user-schema
     * @param {string} accountId account id that the user schema belongs to.
     * @param {string} name the name of the schema.
     * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
     * @returns {Promise.<Object>}
     */
    async updateUserSchema(accountId, name, fields) {
        const schemaDefinition = {name, fields};
        const formData = new tvFormData();
        formData.append("schema", base64.encode(JSON.stringify(schemaDefinition)));

        const response = await this.performLegacyRequest(`v1/accounts/${accountId}/user_schema`, {
            method: 'PUT',
            body: formData
        });
        return response.user_schema;
    }

    /**
     * Delete the user schema. See https://docs.truevault.com/schemas#delete-the-user-schema
     * @param {string} accountId account id that the user schema belongs to.
     * @returns {Promise.<Object>}
     */
    async deleteUserSchema(accountId) {
        const response = await this.performLegacyRequest(`v1/accounts/${accountId}/user_schema`, {
            method: 'DELETE',
            body: new tvFormData()
        });
        return response.user_schema;
    }

    /**
     * Create a new document. See https://docs.truevault.com/documents#create-a-document.
     * @param {string} vaultId vault to place the document in.
     * @param {string|null} schemaId schema to associate with the document.
     * @param {Object} document document contents.
     * @param {string|null} [ownerId] the document's owner.
     * @returns {Promise.<Object>}
     */
    async createDocument(vaultId, schemaId, document, ownerId) {
        const body = {document};

        if (typeof schemaId === 'string') {
            body.schemaId = schemaId;
        }

        if (typeof ownerId === 'string') {
            body.ownerId = ownerId;
        }
        const response = await this.performJSONRequest(`v2/vaults/${vaultId}/documents`, {
            method: 'POST',
            body: JSON.stringify(body)
        });
        return response.document;
    }

    /**
     * List documents in a vault. See https://docs.truevault.com/documents#list-all-documents.
     * @param {string} vaultId vault to look in.
     * @param {boolean} full include document contents in listing.
     * @param {number} [page] which page to get, if pagination is needed.
     * @param {number} [perPage] number of documents per page.
     * @returns {Promise.<Object>}
     */
    async listDocuments(vaultId, full, page, perPage) {
        let url = `v1/vaults/${vaultId}/documents?`;
        if (!!full) {
            url += `&full=${full}`;
        }
        if (!!page) {
            url += `&page=${page}`;
        }
        if (!!perPage) {
            url += `&per_page=${perPage}`;
        }
        const response = await this.performLegacyRequest(url);
        if (!!full) {
            response.data.items = response.data.items.map(item => {
                if (item.document) {
                    item.document = JSON.parse(base64.decode(item.document));
                }
                return item;
            });
        }
        return response.data;
    }

    /**
     * List documents in a schema. See https://docs.truevault.com/documents#list-all-documents-with-schema
     * @param {string} vaultId vault to look in.
     * @param {string} schemaId
     * @param {boolean} [full] include document contents in listing.
     * @param {number} [page] which page to get, if pagination is needed.
     * @param {number} [perPage] number of documents per page.
     * @returns {Promise.<Object>}
     */
    async listDocumentsInSchema(vaultId, schemaId, full, page, perPage) {
        let url = `v1/vaults/${vaultId}/schemas/${schemaId}/documents?`;
        if (!!full) {
            url += `&full=${full}`;
        }
        if (!!page) {
            url += `&page=${page}`;
        }
        if (!!perPage) {
            url += `&per_page=${perPage}`;
        }
        const response = await this.performLegacyRequest(url);
        if (!!full) {
            response.data.items = response.data.items.map(item => {
                if (item.document) {
                    item.document = JSON.parse(base64.decode(item.document));
                }
                return item;
            });
        }
        return response.data;
    }

    /**
     * Get the contents of one or more documents. See https://docs.truevault.com/documents#read-a-document.
     * @param {string} vaultId vault to look in.
     * @param {Array} documentIds document ids to retrieve.
     * @returns {Promise.<Array>}
     */
    async getDocuments(vaultId, documentIds) {
        let requestDocumentIds;
        if (documentIds.length === 0) {
            return [];
        } else if (documentIds.length === 1) {
            // Sending a single ID to the API will only return the document's contents. In order to
            // retrieve a proper multiget response with `id` and `owner_id`, we need to send a
            // request with two instances of the same document ID. We will then only return the
            // first result from the response.
            requestDocumentIds = [documentIds[0], documentIds[0]];
        } else {
            requestDocumentIds = documentIds;
        }

        const response = await this.performJSONRequest(`v2/vaults/${vaultId}/documents/${requestDocumentIds.join(',')}`);
        return response.documents;
    }

    /**
     * Perform a search. See https://docs.truevault.com/documentsearch#search-documents.
     * @param {string} vaultId vault to search in.
     * @param {Object} searchOption search query. See https://docs.truevault.com/documentsearch#defining-search-options.
     * @returns {Promise.<Object>}
     */
    async searchDocuments(vaultId, searchOption) {
        const formData = new tvFormData();
        formData.append("search_option", base64.encode(JSON.stringify(searchOption)));

        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/search`, {
            method: 'POST',
            body: formData
        });

        const documents = response.data.documents.map(doc => {
            if (doc.document) {
                doc.document = JSON.parse(base64.decode(doc.document));
            }
            return doc;
        });

        return {
            info: response.data.info,
            documents
        };
    }

    /**
     * Update an existing document. See https://docs.truevault.com/documents#update-a-document.
     * @param {string} vaultId vault that contains the document.
     * @param {string} documentId document id to update.
     * @param {Object} document new document contents.
     * @param {string|null} [ownerId] the new document owner.
     * @param {string|null} [schemaId] the new document schema.
     * @returns {Promise.<Object>}
     */
    async updateDocument(vaultId, documentId, document, ownerId, schemaId) {
        const body = {document};

        if (typeof ownerId === 'string') {
            body.owner_id = ownerId;
        }

        if (typeof schemaId === 'string') {
            body.schema_id = schemaId;
        }

        const response = await this.performJSONRequest(`v2/vaults/${vaultId}/documents/${documentId}`, {
            method: 'PUT',
            body: JSON.stringify(body)
        });
        return response.document;
    }

    /**
     * Update a document's owner. See https://docs.truevault.com/documents#update-a-document-s-owner.
     * @param {string} vaultId the vault containing the document.
     * @param {string} documentId id of the document.
     * @param {string} ownerId the new document owner, or '' to remove owner.
     * @returns {Promise.<Object>}
     */
    async updateDocumentOwner(vaultId, documentId, ownerId) {
        const formData = new tvFormData();
        formData.append('owner_id', ownerId);

        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/documents/${documentId}/owner`, {
            method: 'PUT',
            body: formData
        });
        return response.document;
    }

    /**
     * Delete a document. See https://docs.truevault.com/documents#delete-a-document.
     * @param {string} vaultId vault that contains the document.
     * @param {string} documentId document id to delete.
     * @returns {Promise.<Object>}
     */
    async deleteDocument(vaultId, documentId) {
        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/documents/${documentId}`, {
            method: 'DELETE'
        });
        return {
            id: response.document_id,
            owner_id: response.owner_id
        };
    }

    /**
     * Create a BLOB. See https://docs.truevault.com/blobs#create-a-blob.
     * @param {string} vaultId vault that will contain the blob.
     * @param {File|Blob} file the BLOB's contents.
     * @param {string|null} [ownerId] the BLOB's owner.
     * @returns {Promise.<Object>}
     */
    async createBlob(vaultId, file, ownerId) {
        const formData = new tvFormData();
        formData.append('file', file);

        if (typeof ownerId === 'string') {
            formData.append('owner_id', ownerId);
        }

        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/blobs`, {
            method: 'POST',
            body: formData
        });
        return response.blob;
    }

    /**
     * Create a BLOB with a callback for progress updates. See https://docs.truevault.com/blobs#create-a-blob.
     * @param {string} vaultId vault that will contain the blob.
     * @param {File|Blob} file the BLOB's contents.
     * @param {function} progressCallback callback for XHR's `progress` and `load` events.
     * @param {string|null} [ownerId] the BLOB's owner.
     * @returns {Promise.<Object>}
     */
    async createBlobWithProgress(vaultId, file, progressCallback, ownerId) {
        const formData = new tvFormData();
        formData.append('file', file);

        if (typeof ownerId === 'string') {
            formData.append('owner_id', ownerId);
        }

        const createResponse = await this.performLegacyRequestWithProgress('post', `${this.host}/v1/vaults/${vaultId}/blobs`, formData, progressCallback, 'json');
        return createResponse.blob;
    }

    async updateBlobWithProgress(vaultId, blobId, file, progressCallback, ownerId) {
        const formData = new tvFormData();
        formData.append('file', file);

        if (typeof ownerId === 'string') {
            formData.append('owner_id', ownerId);
        }

        const updateResponse = await this.performLegacyRequestWithProgress('put', `${this.host}/v1/vaults/${vaultId}/blobs/${blobId}`, formData, progressCallback, 'json');
        return updateResponse.blob;
    }

    async getBlobWithProgress(vaultId, blobId, progressCallback) {
        const xhr = await this.performLegacyRequestWithProgress('get', `${this.host}/v1/vaults/${vaultId}/blobs/${blobId}`, null, progressCallback, 'blob');
        return {blob: xhr.response};
    }

    /**
     * Get a BLOB's contents. See https://docs.truevault.com/blobs#read-a-blob.
     * @param {string} vaultId the vault containing the BLOB.
     * @param {string} blobId id of the BLOB.
     * @returns {Promise.<*>}
     */
    async getBlob(vaultId, blobId) {
        const headers = {
            Authorization: this.authHeader
        };
        const response = await tvFetch(`${this.host}/v1/vaults/${vaultId}/blobs/${blobId}`, {
            headers: headers
        });

        const blob = response.blob ? await response.blob() : response.body;

        return {blob};
    }

    /**
     * List the BLOBs in a vault. See https://docs.truevault.com/blobs#list-all-blobs.
     * @param {string} vaultId the vault to list.
     * @param {number} [page] if paginating, the page.
     * @param {number} [perPage] if paginating, the number of items per page.
     * @returns {Promise.<Object>}
     */
    async listBlobs(vaultId, page, perPage) {
        let url = `v1/vaults/${vaultId}/blobs?`;
        if (!!page) {
            url += `&page=${page}`;
        }
        if (!!perPage) {
            url += `&per_page=${perPage}`;
        }
        const response = await this.performLegacyRequest(url);
        return response.data
    }

    /**
     * Update a BLOB's contents. See https://docs.truevault.com/blobs#update-a-blob.
     * @param {string} vaultId the vault containing the BLOB.
     * @param {string} blobId id of the BLOB.
     * @param {File|Blob} file the BLOB's contents.
     * @param {string|null} [ownerId] the new BLOB owner.
     * @returns {Promise.<Object>}
     */
    async updateBlob(vaultId, blobId, file, ownerId) {
        const formData = new tvFormData();
        formData.append('file', file);

        if (typeof ownerId === 'string') {
            formData.append('owner_id', ownerId);
        }

        const resopnse = await this.performLegacyRequest(`v1/vaults/${vaultId}/blobs/${blobId}`, {
            method: 'PUT',
            body: formData
        });
        return resopnse.blob;
    }

    /**
     * Update a BLOB's owner. See https://docs.truevault.com/blobs#update-a-blob-s-owner.
     * @param {string} vaultId the vault containing the BLOB.
     * @param {string} blobId id of the BLOB.
     * @param {string} ownerId the new BLOB owner, or '' to remove owner.
     * @returns {Promise.<Object>}
     */
    async updateBlobOwner(vaultId, blobId, ownerId) {
        const formData = new tvFormData();
        formData.append('owner_id', ownerId);

        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/blobs/${blobId}/owner`, {
            method: 'PUT',
            body: formData
        });
        return response.blob;
    }

    /**
     * Delete a BLOB. See https://docs.truevault.com/blobs#delete-a-blob.
     * @param {string} vaultId the vault containing the BLOB.
     * @param {string} blobId the BLOB to delete.
     * @returns {Promise.<Object>}
     */
    async deleteBlob(vaultId, blobId) {
        const response = await this.performLegacyRequest(`v1/vaults/${vaultId}/blobs/${blobId}`, {
            method: 'DELETE'
        });
        return response.blob;
    }

    /**
     * Send an email to a user via Sendgrid. See https://docs.truevault.com/email#email-a-user.
     * @param {string} sendgridApiKey Sendgrid API key.
     * @param {string} userId the user to send to.
     * @param {string} sendgridTemplateId the Sendgrid template to use.
     * @param {string} fromEmailSpecifier the specifier for the "From" address. See https://docs.truevault.com/email#value-specifiers.
     * @param {string} toEmailSpecifier the specifier for the "To" address. See https://docs.truevault.com/email#value-specifiers.
     * @param {Object} substitutions substitutions to use in the template. See https://docs.truevault.com/email#template-substitution.
     * @returns {Promise.<String>}
     */
    async sendEmailSendgrid(sendgridApiKey, userId, sendgridTemplateId, fromEmailSpecifier,
                            toEmailSpecifier, substitutions) {
        const response = await this.performJSONRequest(`v1/users/${userId}/message/email`, {
            method: 'POST',
            body: JSON.stringify({
                provider: 'SENDGRID',
                auth: {sendgrid_api_key: sendgridApiKey},
                template_id: sendgridTemplateId,
                from_email_address: fromEmailSpecifier,
                to_email_address: toEmailSpecifier,
                substitutions
            })
        });
        return response.provider_message_id;
    }

    /**
     * Send an SMS message to a user via Twilio.
     * @param {string} twilioAccountSid Twilio Account Sid. See https://www.twilio.com/console
     * @param {string} twilioKeySid Twilio Key Sid. See https://www.twilio.com/docs/api/rest/keys
     * @param {string} twilioKeySecret Twilio Key Secret. See https://www.twilio.com/docs/api/rest/keys
     * @param {string} userId the user to send to.
     * @param {string} fromNumberSpecifier the specifier for the "From" phone number. See https://docs.truevault.com/email#value-specifiers.
     * @param {string} toNumberSpecifier the specifier for the "To" phone number. See https://docs.truevault.com/email#value-specifiers.
     * @param {Object} messageBody The text to send in the body of the message
     * @param {Array} mediaURLs Optional array of value specifiers producing URLs of images to include in the message. See https://docs.truevault.com/email#value-specifiers.
     * @returns {Promise.<String>}
     */
    async sendSMSTwilio(twilioAccountSid, twilioKeySid, twilioKeySecret, userId, fromNumberSpecifier, toNumberSpecifier, messageBody, mediaURLs) {
        const response = await this.performJSONRequest(`v1/users/${userId}/message/sms`, {
            method: 'POST',
            body: JSON.stringify({
                provider: 'TWILIO',
                auth: {
                    account_sid: twilioAccountSid,
                    username: twilioKeySid,
                    password: twilioKeySecret
                },
                from_number: fromNumberSpecifier,
                to_number: toNumberSpecifier,
                message_body: messageBody,
                media_urls: mediaURLs || []
            })
        });

        return response.provider_message_id;
    }

    /**
     * Create a password reset flow. See https://docs.truevault.com/PasswordResetFlow.html.
     * @param {string} name name of this flow
     * @param {string} sendGridTemplateId SendGrid template id to use when sending password reset emails
     * @param {string} sendGridApiKey SendGrid API key
     * @param {Object} userEmailValueSpec Value specifier for the "To" address. See https://docs.truevault.com/email#value-specifiers.
     * @param {Object} fromEmailValueSpec Value specifier for the "From" address. See https://docs.truevault.com/email#value-specifiers.
     * @param {Object} substitutions substitutions to use in the template. See https://docs.truevault.com/email#template-substitution.
     * @returns {Promise.<Object>}
     */
    async createPasswordResetFlow(name, sendGridTemplateId, sendGridApiKey, userEmailValueSpec, fromEmailValueSpec, substitutions) {
        const response = await this.performJSONRequest(`v1/password_reset_flows`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                sg_api_key: sendGridApiKey,
                sg_template_id: sendGridTemplateId,
                user_email_value_spec: userEmailValueSpec,
                from_email_value_spec: fromEmailValueSpec,
                substitutions
            })
        });
        return response.password_reset_flow;
    }

    /**
     * List password reset flows. See https://docs.truevault.com/PasswordResetFlow.html.
     * @returns {Promise.<Object>}
     */
    async listPasswordResetFlows() {
        const response = await this.performJSONRequest(`v1/password_reset_flows`);
        return response.password_reset_flows;
    }

    /**
     * Send a password reset email to a user. See https://docs.truevault.com/PasswordResetFlow.html.
     * @param {string} flowId the flow to use to send a password reset email
     * @param {string} username
     * @returns {Promise.<undefined>}
     */
    async sendPasswordResetEmail(flowId, username) {
        await this.performJSONRequest(`v1/password_reset_flows/${flowId}/email`, {
            method: 'POST',
            body: JSON.stringify({
                username
            })
        });
    }

    static _makeHeaderForUsername(username) {
        return `Basic ${base64.encode(username + ':')}`;
    };
}

module.exports = TrueVaultClient;

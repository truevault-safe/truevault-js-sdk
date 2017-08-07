/**
 * A client for the [TrueVault HTTP API](https://docs.truevault.com/).
 *
 * If you already have an API key or access token, use the constructor. If you have a username and password, see
 * `login()`.
 */
class TrueVaultClient {

    /**
     * See https://docs.truevault.com/overview#authentication for more on authentication concepts in TrueVault.
     * @param {string} apiKeyOrAccessToken either an API key or an access token.
     * @param {string} host optional parameter specifying TV API host; defaults to https://api.truevault.com
     */
    constructor(apiKeyOrAccessToken, host) {
        this.apiKeyOrAccessToken = apiKeyOrAccessToken;
        this.host = host || 'https://api.truevault.com';
    }

    async performRequest(path, options) {
        if (!!this.apiKeyOrAccessToken) {
            if (!options) {
                options = {};
            }
            if (!options.headers) {
                options.headers = {};
            }
            options.headers.Authorization = `Basic ${btoa(this.apiKeyOrAccessToken + ':')}`;
        }
        const response = await fetch(`${this.host}/${path}`, options);
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
            throw error;
        } else {
            return json;
        }
    }

    /**
     * Useful when you want to create a client starting from a user's username and password as opposed to an API key
     * or access token.
     * See https://docs.truevault.com/authentication#login-a-user.
     * @param {string} accountId account id that the user belongs to.
     * @param {string} username user's username.
     * @param {string} password user's password.
     * @param {string} [mfaCode] current MFA code, if user has MFA configured.
     * @returns {Promise.<TrueVaultClient>}
     */
    static async login(accountId, username, password, mfaCode) {
        const formData = new FormData();
        formData.append("account_id", accountId);
        formData.append("username", username);
        formData.append("password", password);
        if (!!mfaCode) {
            formData.append("mfa_code", mfaCode);
        }

        const tvClient = new TrueVaultClient();
        const response = await tvClient.performRequest(`v1/auth/login`, {
            method: 'POST',
            body: formData
        });
        tvClient.apiKeyOrAccessToken = response.user.access_token;
        return tvClient;
    }

    /**
     * Log the authenticated user out, which deactivates its access token. See
     * https://docs.truevault.com/authentication#logout-a-user.
     * @returns {Promise.<Object>}
     */
    async logout() {
        const response = await this.performRequest(`v1/auth/logout`, {method: 'POST'});
        this.apiKeyOrAccessToken = null;
        return response;
    }

    /**
     * Get data about the authenticated user. See https://docs.truevault.com/authentication#verify-a-user.
     * @returns {Promise.<Object>}
     */
    async readCurrentUser() {
        const response = await this.performRequest('v1/auth/me?full=true');
        const user = response.user;
        if (user.attributes === null) {
            user.attributes = {};
        } else {
            user.attributes = JSON.parse(atob(user.attributes));
        }
        return user;
    }

    /**
     * List all users in the account. See https://docs.truevault.com/users#list-all-users.
     * @returns {Promise.<Array>}
     */
    async listUsers() {
        const response = await this.performRequest('v1/users?full=true');
        return response.users.map(user => {
            if (user.attributes) {
                user.attributes = JSON.parse(atob(user.attributes));
            }
            return user;
        });
    }

    /**
     * Create a new user. See https://docs.truevault.com/users#create-a-user.
     * @param {string} username new user's username.
     * @param {string} password new user's password.
     * @param {Object} [attributes] new user's attributes, if desired.
     * @param {Array} [groupIds] add user to the given groups, if provided.
     * @returns {Promise.<Object>}
     */
    async createUser(username, password, attributes, groupIds) {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        if (attributes) {
            formData.append("attributes", btoa(JSON.stringify(attributes)));
        }
        if (groupIds) {
            formData.append("group_ids", groupIds.join(","));
        }
        const response = await this.performRequest('v1/users', {
            method: 'POST',
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
        const formData = new FormData();
        formData.append("password", newPassword);

        const response = await this.performRequest(`v1/users/${userId}`, {
            method: 'PUT',
            body: formData
        });
        return response.user;
    }

    /**
     * Create an API key for a user. See https://docs.truevault.com/users#create-api-key-for-a-user.
     * @param {string} userId user id.
     * @returns {Promise.<string>}
     */
    async createUserApiKey(userId) {
        const response = await this.performRequest(`v1/users/${userId}/api_key`, {method: 'POST'});
        return response.api_key;
    }

    /**
     * Create an access token for a user. See https://docs.truevault.com/users#create-access-token-for-a-user.
     * @param {string} userId user id.
     * @returns {Promise.<string>}
     */
    async createUserAccessToken(userId) {
        const response = await this.performRequest(`v1/users/${userId}/access_token`, {method: 'POST'});
        return response.user.access_token;
    }

    /**
     * Start MFA enrollment for a user. See https://docs.truevault.com/users#start-mfa-enrollment-for-a-user.
     * @param {string} userId user id.
     * @param {string} issuer MFA issuer.
     * @returns {Promise.<string>}
     */
    startUserMfaEnrollment(userId, issuer) {
        return this.performRequest(`v1/users/${userId}/mfa/start_enrollment`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({issuer})
        });
    }

    /**
     * Finalize MFA enrollment for a user. See https://docs.truevault.com/users#finalize-mfa-enrollment-for-a-user.
     * @param {string} userId user id.
     * @param {string} mfaCode1 first MFA code.
     * @param {string} mfaCode2 second MFA code.
     * @returns {Promise.<string>}
     */
    finalizeMfaEnrollment(userId, mfaCode1, mfaCode2) {
        return this.performRequest(`v1/users/${userId}/mfa/finalize_enrollment`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({mfa_code_1: mfaCode1, mfa_code_2: mfaCode2})
        });
    }

    /**
     * Unenroll a user from MFA. See #https://docs.truevault.com/users#unenroll-mfa-for-a-user.
     * @param {string} userId user id.
     * @param {string} mfaCode MFA code for user.
     * @param {string} password user's password.
     * @returns {Promise.<string>}
     */
    unenrollMfa(userId, mfaCode, password) {
        return this.performRequest(`v1/users/${userId}/mfa/unenroll`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({mfa_code: mfaCode, password: password})
        });
    }

    /**
     * Create a new group. See https://docs.truevault.com/groups#create-a-group.
     * @param {string} name group name.
     * @param {Object} policy group policy. See https://docs.truevault.com/groups.
     * @param {Array} [userIds] user ids to add to the group.
     * @returns {Promise.<Object>}
     */
    async createGroup(name, policy, userIds) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("policy", btoa(JSON.stringify(policy)));
        if (!!userIds) {
            formData.append("user_ids", userIds.join(','));
        }
        const response = await this.performRequest('v1/groups', {
            method: 'POST',
            body: formData
        });
        return response.group;
    }

    /**
     * Update an existing group's name and policy. See https://docs.truevault.com/groups#update-a-group.
     * @param {string} name group name.
     * @param {Object} policy group policy. See https://docs.truevault.com/groups.
     * @returns {Promise.<Object>}
     */
    async updateGroup(groupId, name, policy) {
        const formData = new FormData();
        if (!!name) {
            formData.append("name", name);
        }

        if (!!policy) {
            formData.append("policy", btoa(JSON.stringify(policy)));
        }

        const response = await this.performRequest(`v1/groups/${groupId}`, {
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
        return this.performRequest(`v1/groups/${groupId}`, {
            method: 'DELETE'
        });
    }

    /**
     * List all groups. See https://docs.truevault.com/groups#list-all-groups.
     * @returns {Promise.<Array>}
     */
    async listGroups() {
        const response = await this.performRequest(`v1/groups`);
        return response.groups;
    }

    /**
     * Gets a group, including user ids. See https://docs.truevault.com/groups#read-a-group.
     * @param {string} groupId group id to get.
     * @returns {Promise.<Object>}
     */
    async getFullGroup(groupId) {
        const response = await this.performRequest(`v1/groups/${groupId}?full=true`);
        return response.group;
    }

    /**
     * Add users to a group. See https://docs.truevault.com/groups#add-users-to-a-group.
     * @param {string} groupId group to add to.
     * @param {Array} userIds user ids to add to the group.
     * @returns {Promise.<Object>}
     */
    addUsersToGroup(groupId, userIds) {
        const headers = {
            'Content-Type': 'application/json'
        };

        return this.performRequest(`v1/groups/${groupId}/membership`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({user_ids: userIds})
        });
    }

    /**
     * Add users to a group returning user ids. See https://docs.truevault.com/groups#update-a-group.
     * @param {string} groupId group to add to.
     * @param {Array} userIds user ids to add to the group.
     * @returns {Promise.<Object>}
     */
    async addUsersToGroupReturnUserIds(groupId, userIds) {
        const formData = new FormData();
        formData.append('operation', 'APPEND');
        formData.append('user_ids', userIds.join(','));

        const response = await this.performRequest(`v1/groups/${groupId}`, {
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
    async removeUsersFromGroup(groupId, userIds) {
        const formData = new FormData();
        formData.append('operation', 'REMOVE');
        formData.append('user_ids', userIds.join(','));

        const response = await this.performRequest(`v1/groups/${groupId}`, {
            method: 'PUT',
            body: formData
        });
        return response.group;
    }

    /**
     * Create a new vault. See https://docs.truevault.com/vaults#create-a-vault.
     * @param {string} name the name of the new vault.
     * @returns {Promise.<Object>}
     */
    createVault(name) {
        const formData = new FormData();
        formData.append("name", name);

        return this.performRequest('v1/vaults', {
            method: 'POST',
            body: formData
        });
    }

    /**
     * Create a new schema. See https://docs.truevault.com/schemas#create-a-schema.
     * @param {string} vaultId the vault that should contain the schema.
     * @param {string} name the name of the schema.
     * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
     * @returns {Promise.<Object>}
     */
    createSchema(vaultId, name, fields) {
        const schemaDefinition = {name, fields};
        const formData = new FormData();
        formData.append("schema", btoa(JSON.stringify(schemaDefinition)));

        return this.performRequest(`v1/vaults/${vaultId}/schemas`, {
            method: 'POST',
            body: formData
        });
    }

    /**
     * Create a new document. See https://docs.truevault.com/documents#create-a-document.
     * @param {string} vaultId vault to place the document in.
     * @param {string|null} schemaId schema to associate with the document.
     * @param {Object} document document contents.
     * @param {string|null} [ownerId] the document's owner.
     * @returns {Promise.<Object>}
     */
    createDocument(vaultId, schemaId, document, ownerId) {
        const formData = new FormData();
        formData.append('document', btoa(JSON.stringify(document)));

        if (!!schemaId) {
            formData.append('schema_id', schemaId);
        }
        if (!!ownerId) {
            formData.append('owner_id', ownerId);
        }
        return this.performRequest(`v1/vaults/${vaultId}/documents`, {
            method: 'POST',
            body: formData
        });
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
        const response = await this.performRequest(url);
        if (!!full) {
            response.data.items = response.data.items.map(item => {
                if (item.document) {
                    item.document = JSON.parse(atob(item.document));
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

        const response = await this.performRequest(`v1/vaults/${vaultId}/documents/${requestDocumentIds.join(',')}`);
        const documents = response.documents.map(doc => {
            doc.document = JSON.parse(atob(doc.document));
            return doc;
        });

        if (documentIds.length === 1) {
            // Only return the first result here, since there will be duplicate results due to our
            // ID duplication in the request.
            return [documents[0]];
        }
        return documents;
    }

    /**
     * Perform a search. See https://docs.truevault.com/documentsearch#search-documents.
     * @param {string} vaultId vault to search in.
     * @param {Object} searchOption search query. See https://docs.truevault.com/documentsearch#defining-search-options.
     * @returns {Promise.<Object>}
     */
    searchDocuments(vaultId, searchOption) {
        const formData = new FormData();
        formData.append("search_option", btoa(JSON.stringify(searchOption)));

        return this.performRequest(`v1/vaults/${vaultId}/search`, {
            method: 'POST',
            body: formData
        });
    }

    /**
     * Update an existing document. See https://docs.truevault.com/documents#update-a-document.
     * @param {string} vaultId vault that contains the document.
     * @param {string} documentId document id to update.
     * @param {Object} document new document contents.
     * @returns {Promise.<Object>}
     */
    updateDocument(vaultId, documentId, document) {
        const formData = new FormData();
        formData.append("document", btoa(JSON.stringify(document)));

        return this.performRequest(`v1/vaults/${vaultId}/documents/${documentId}`, {
            method: 'PUT',
            body: formData
        });
    }

    /**
     * Delete a document. See https://docs.truevault.com/documents#delete-a-document.
     * @param {string} vaultId vault that contains the document.
     * @param {string} documentId document id to delete.
     * @returns {Promise.<Object>}
     */
    deleteDocument(vaultId, documentId) {
        return this.performRequest(`v1/vaults/${vaultId}/documents/${documentId}`, {
            method: 'DELETE'
        });
    }

    /**
     * Create a BLOB. See https://docs.truevault.com/blobs#create-a-blob.
     * @param {string} vaultId vault that will contain the blob.
     * @param {File|Blob} file the BLOB's contents.
     * @returns {Promise.<Object>}
     */
    createBlob(vaultId, file) {
        const formData = new FormData();
        formData.append('file', file);

        return this.performRequest(`v1/vaults/${vaultId}/blobs`, {
            method: 'POST',
            body: formData
        });
    }

    /**
     * Create a BLOB with a callback for progress updates. See https://docs.truevault.com/blobs#create-a-blob.
     * @param {string} vaultId vault that will contain the blob.
     * @param {File|Blob} file the BLOB's contents.
     * @param {function} progressCallback callback for XHR's `progress` and `load` events.
     * @returns {Promise.<Object>}
     */
    createBlobWithProgress(vaultId, file, progressCallback) {
        // We are using XMLHttpRequest here since fetch does not have a progress API
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            const formData = new FormData();
            formData.append('file', file);

            xhr.upload.addEventListener('progress', progressCallback);
            xhr.upload.addEventListener('load', progressCallback);
            xhr.open('post', `${this.host}/v1/vaults/${vaultId}/blobs`);
            xhr.setRequestHeader('Authorization', `Basic ${btoa(this.apiKeyOrAccessToken + ':')}`);
            xhr.onload = () => {
                const responseJson = JSON.parse(xhr.responseText);
                if (responseJson.result === 'error') {
                    const error = new Error(responseJson.error.message);
                    error.error = responseJson.error;
                    reject(error);
                } else {
                    resolve(responseJson);
                }
            };
            xhr.onerror = () => reject(Error('Network error'));
            xhr.send(formData);
        });
    }

    /**
     * Get a BLOB's contents. See https://docs.truevault.com/blobs#read-a-blob.
     * @param {string} vaultId the vault containing the BLOB.
     * @param {string} blobId id of the BLOB.
     * @returns {Promise.<*>}
     */
    async getBlob(vaultId, blobId) {
        const headers = {
            Authorization: `Basic ${btoa(this.apiKeyOrAccessToken + ':')}`
        };
        const response = await fetch(`${this.host}/v1/vaults/${vaultId}/blobs/${blobId}`, {
            headers: headers
        });
        return response.blob();
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
        const response = await this.performRequest(url);
        return response.data
    }

    /**
     * Update a BLOB's contents. See https://docs.truevault.com/blobs#update-a-blob.
     * @param {string} vaultId the vault containing the BLOB.
     * @param {string} blobId id of the BLOB.
     * @param {File|Blob} file the BLOB's contents.
     * @returns {Promise.<Object>}
     */
    updateBlob(vaultId, blobId, file) {
        const formData = new FormData();
        formData.append('file', file);

        return this.performRequest(`v1/vaults/${vaultId}/blobs/${blobId}`, {
            method: 'PUT',
            body: formData
        });
    }

    /**
     * Delete a BLOB. See https://docs.truevault.com/blobs#delete-a-blob.
     * @param {string} vaultId the vault containing the BLOB.
     * @param {string} blobId the BLOB to delete.
     * @returns {Promise.<Object>}
     */
    deleteBlob(vaultId, blobId) {
        return this.performRequest(`v1/vaults/${vaultId}/blobs/${blobId}`, {
            method: 'DELETE'
        });
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
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await this.performRequest(`v1/users/${userId}/message/email`, {
            method: 'POST',
            headers: headers,
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
}

module.exports = TrueVaultClient;

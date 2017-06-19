class TrueVaultClient {

    constructor(apiKeyOrAccessToken) {
        this.apiKeyOrAccessToken = apiKeyOrAccessToken;
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
        const response = await fetch(`https://api.truevault.com/v1/${path}`, options);
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

    static async login(accountId, username, password, mfaCode) {
        const formData = new FormData();
        formData.append("account_id", accountId);
        formData.append("username", username);
        formData.append("password", password);
        if (!!mfaCode) {
            formData.append("mfa_code", mfaCode);
        }

        const tvClient = new TrueVaultClient();
        const response = await tvClient.performRequest(`auth/login`, {
            method: 'POST',
            body: formData
        });
        tvClient.apiKeyOrAccessToken = response.user.access_token;
        return tvClient;
    }

    async logout() {
        const response = await this.performRequest(`auth/logout`, {method: 'POST'});
        this.apiKeyOrAccessToken = null;
        return response;
    }

    async readCurrentUser() {
        const response = await this.performRequest('auth/me?full=true');
        const user = response.user;
        if (user.attributes === null) {
            user.attributes = {};
        } else {
            user.attributes = JSON.parse(atob(user.attributes));
        }
        return user;
    }

    async listUsers() {
        const response = await this.performRequest('users?full=true');
        return response.users.map(user => {
            if (user.attributes) {
                user.attributes = JSON.parse(atob(user.attributes));
            }
            return user;
        });
    }

    async createUser(username, password, attributes) {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        if (attributes) {
            formData.append("attributes", btoa(JSON.stringify(attributes)));
        }
        const response = await this.performRequest('users', {
            method: 'POST',
            body: formData
        });
        return response.user;
    }

    async updateUserPassword(userId, newPassword) {
        const formData = new FormData();
        formData.append("password", newPassword);

        const response = await this.performRequest(`users/${userId}`, {
            method: 'PUT',
            body: formData
        });
        return response.user;
    }

    async createUserApiKey(userId) {
        const response = await this.performRequest(`users/${userId}/api_key`, {method: 'POST'});
        return response.api_key;
    }

    async createUserAccessToken(userId) {
        const response = await this.performRequest(`users/${userId}/access_token`, {method: 'POST'});
        return response.user.access_token;
    }

    async createGroup(name, policy, userIds) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("policy", btoa(JSON.stringify(policy)));
        if (!!userIds) {
            formData.append("user_ids", userIds.join(','));
        }
        const response = await this.performRequest('groups', {
            method: 'POST',
            body: formData
        });
        return response.group;
    }

    addUsersToGroup(groupId, userIds) {
        const headers = {
            'Content-Type': 'application/json'
        };

        return this.performRequest(`groups/${groupId}/membership`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({user_ids: userIds})
        });
    }

    createVault(name) {
        const formData = new FormData();
        formData.append("name", name);

        return this.performRequest('vaults', {
            method: 'POST',
            body: formData
        });
    }

    createSchema(vaultId, name, fields) {
        const schemaDefinition = {name, fields};
        const formData = new FormData();
        formData.append("schema", btoa(JSON.stringify(schemaDefinition)));

        return this.performRequest(`vaults/${vaultId}/schemas`, {
            method: 'POST',
            body: formData
        });
    }

    createDocument(vaultId, schemaId, document) {
        const formData = new FormData();
        formData.append("document", btoa(JSON.stringify(document)));

        if (schemaId) {
            formData.append("schema_id", schemaId);
        }
        return this.performRequest(`vaults/${vaultId}/documents`, {
            method: 'POST',
            body: formData
        });
    }

    async listDocuments(vaultId, full, page, perPage) {
        let url = `vaults/${vaultId}/documents?`;
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
        return response.data
    }

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

        const response = await this.performRequest(`vaults/${vaultId}/documents/${requestDocumentIds.join(',')}`);
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

    searchDocuments(vaultId, searchOption) {
        const formData = new FormData();
        formData.append("search_option", btoa(JSON.stringify(searchOption)));

        return this.performRequest(`vaults/${vaultId}/search`, {
            method: 'POST',
            body: formData
        });
    }

    updateDocument(vaultId, documentId, document) {
        const formData = new FormData();
        formData.append("document", btoa(JSON.stringify(document)));

        return this.performRequest(`vaults/${vaultId}/documents/${documentId}`, {
            method: 'PUT',
            body: formData
        });
    }

    deleteDocument(vaultId, documentId) {
        return this.performRequest(`vaults/${vaultId}/documents/${documentId}`, {
            method: 'DELETE'
        });
    }

    createBlob(vaultId, file) {
        const formData = new FormData();
        formData.append('file', file);

        return this.performRequest(`vaults/${vaultId}/blobs`, {
            method: 'POST',
            body: formData
        });
    }

    createBlobWithProgress(vaultId, file, progressCallback) {
        // We are using XMLHttpRequest here since fetch does not have a progress API
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            const formData = new FormData();
            formData.append('file', file);

            xhr.upload.addEventListener('progress', progressCallback);
            xhr.upload.addEventListener('load', progressCallback);
            xhr.open('post', `https://api.truevault.com/v1/vaults/${vaultId}/blobs`);
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

    async getBlob(vaultId, blobId) {
        const headers = {
            Authorization: `Basic ${btoa(this.apiKeyOrAccessToken + ':')}`
        };
        const response = await fetch(`https://api.truevault.com/v1/vaults/${vaultId}/blobs/${blobId}`, {
            headers: headers
        });
        return response.blob();
    }

    async listBlobs(vaultId, page, perPage) {
        let url = `vaults/${vaultId}/blobs?`;
        if (!!page) {
            url += `&page=${page}`;
        }
        if (!!perPage) {
            url += `&per_page=${perPage}`;
        }
        const response = await this.performRequest(url);
        return response.data
    }

    updateBlob(vaultId, blobId, file) {
        const formData = new FormData();
        formData.append('file', file);

        return this.performRequest(`vaults/${vaultId}/blobs/${blobId}`, {
            method: 'PUT',
            body: formData
        });
    }

    deleteBlob(vaultId, blobId) {
        return this.performRequest(`vaults/${vaultId}/blobs/${blobId}`, {
            method: 'DELETE'
        });
    }

    async sendEmailSendgrid(sendgridApiKey, userId, sendgridTemplateId, fromEmailSpecifier,
                            toEmailSpecifier, substitutions) {
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await this.performRequest(`users/${userId}/message/email`, {
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

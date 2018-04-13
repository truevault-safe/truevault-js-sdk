import TrueVault from '../index';

import uuid from 'uuid';
import otplib from 'otplib';
import {Readable} from 'stream';
import should from 'should';
import Ajv from 'ajv';

const USER_SCHEMA = {
    type: 'object',
    properties: {
        account_id: {type: 'string', format: 'uuid'},
        id: {type: 'string', format: 'uuid'},
        status: {type: 'string'},
        username: {type: 'string'},
        mfa_enrolled: {type: 'boolean'},
        attributes: {type: ['null', 'object']}
    },
    required: ['account_id', 'id', 'status', 'username', 'mfa_enrolled']
};

if (typeof window === "undefined") {
    // When run via the web runner, webpack-dotenv injects the contents of the test env dotfile. However, this
    // doesn't happen for nodejs. To pick up the test environment variables, we need to invoke dotenv normally.
    // We need to do so via eval to avoid webpack trying to bundle the path and dotenv modules when building for web.
    // noinspection JSUnusedLocalSymbols
    const dirname = __dirname;
    eval(`
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.resolve(dirname, 'test.env')});
    `);
}
const TEST_TRUEVAULT_HOST = process.env.TEST_TRUEVAULT_HOST;
const TEST_ACCOUNT_UUID = process.env.TEST_ACCOUNT_UUID;
const TEST_USER_API_KEY = process.env.TEST_USER_API_KEY;
const TEST_SENDGRID_API_KEY = process.env.TEST_SENDGRID_API_KEY;
const TEST_SENDGRID_TEMPLATE_ID = process.env.TEST_SENDGRID_TEMPLATE_ID;

const uniqueString = () => `js_integration_test_${uuid.v4()}`;

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

const ajv = new Ajv({
    allErrors: true,
    verbose: true
});

should.Assertion.add('matchSchema', function (schema) {
    const validate = ajv.compile(schema);
    if (!validate(this.obj)) {
        const validationErrors = validate.errors.map(error => `  ${error.keyword} ${error.message}`);
        const failureMessage = `object ${JSON.stringify(this.obj, null, 2)} doesn't conform to schema ${JSON.stringify(schema, null, 2)}:\n${validationErrors.join("\n")}`
        should.fail(this.obj, schema, failureMessage);
    }
});

const client = new TrueVault({apiKey: TEST_USER_API_KEY}, TEST_TRUEVAULT_HOST);

describe('TrueVaultClient', function () {
    this.slow(10 * 60 * 1000);
    this.timeout(10 * 60 * 1000);

    describe('login', function () {
        it('works', async function () {
            const loginUserUsername = uniqueString();
            const loginUserPassword = 'testpassword';
            await client.createUser(loginUserUsername, loginUserPassword);

            const loginClient = await TrueVault.login(TEST_ACCOUNT_UUID, loginUserUsername, loginUserPassword, undefined, TEST_TRUEVAULT_HOST);

            loginClient.accessToken.should.match(/[a-z0-9.-]+/);

            const currentUser = await loginClient.readCurrentUser(false);
            should(currentUser.attributes).equals(undefined);

            const currentUserFull = await loginClient.readCurrentUser();
            currentUserFull.attributes.should.eql({});

            (await loginClient.logout()).should.matchSchema(USER_SCHEMA);
            should(loginClient.authHeader).equals(null);
        });
    });

    describe('error handling', function () {
        it('works', async function () {
            try {
                await TrueVault.login(TEST_ACCOUNT_UUID, 'invalid', 'invalid', undefined, TEST_TRUEVAULT_HOST);
                should.fail(null, null, 'Should have thrown');
            } catch (e) {
                e.error.should.matchSchema({
                    type: 'object',
                    properties: {
                        code: {type: 'string'},
                        message: {type: 'string'},
                        type: {type: 'string'}
                    },
                    required: ['code', 'message', 'type']
                });
                e.transaction_id.should.matchSchema({type: 'string', format: 'uuid'});
            }
        });
    });

    describe('readCurrentUser', function () {
        it('returns current user', async function () {
            const user = await client.readCurrentUser();
            user.should.matchSchema(USER_SCHEMA);
        });
    });


    describe('groups', function () {
        it('works', async function () {
            const newGroup = await client.createGroup(uniqueString(), []);
            const groupSchema = {
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    name: {type: 'string'},
                    policy: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                Activities: {type: 'string'},
                                Resources: {type: 'array', items: {type: 'string'}}
                            }
                        }
                    },
                    user_ids: {type: 'array'}
                }
            };

            newGroup.should.matchSchema(groupSchema);

            const fullGroup = await client.readFullGroup(newGroup.id);
            fullGroup.should.matchSchema(groupSchema);

            const updatedGroup = await client.updateGroup(newGroup.id, uniqueString(), []);
            updatedGroup.should.matchSchema(groupSchema);

            const groups = await client.listGroups();
            groups.should.matchSchema({
                type: 'array',
                items: groupSchema
            });

            const newUser = await client.createUser(uniqueString(), uniqueString());

            const addUsersResult = await client.addUsersToGroup(newGroup.id, [newUser.id]);
            should(addUsersResult).be.undefined();

            const removeUsersResult = await client.removeUsersFromGroup(newGroup.id, [newUser.id])
            should(removeUsersResult).be.undefined();

            const addUsersReturnIdsResult = await client.addUsersToGroupReturnUserIds(newGroup.id, [newUser.id]);
            addUsersReturnIdsResult.should.matchSchema(groupSchema);

            const removeUsersReturnIdsResult = await client.removeUsersFromGroupReturnUserIds(newGroup.id, [newUser.id]);
            removeUsersReturnIdsResult.should.matchSchema(groupSchema);

            const deleteResult = await client.deleteGroup(newGroup.id);
            deleteResult.should.matchSchema(groupSchema);
        });
    });

    describe('users', function () {
        it('works', async function () {
            try {
                // We pre-create the user schema and you can't delete user schemas without deleting all users, so in practice
                // this will always fail
                await client.createUserSchema(TEST_ACCOUNT_UUID, "user schema", []);
            } catch (e) {
            }

            const newUserSchema = [{name: "foo", type: "string", index: 1}];
            const updateSchemaResponse = await client.updateUserSchema(TEST_ACCOUNT_UUID, "users", newUserSchema);
            const schemaSchema = {
                type: 'object',
                properties: {
                    fields: {type: 'array'},
                    id: {type: 'string', 'format': 'uuid'},
                    name: {type: 'string'},
                    vault_id: {type: 'string', format: 'uuid'}
                }
            };
            updateSchemaResponse.should.matchSchema(schemaSchema);

            const readUserSchemaResponse = await client.readUserSchema(TEST_ACCOUNT_UUID);
            readUserSchemaResponse.should.matchSchema(schemaSchema);

            // In practice, deleting UserSchema always fails because there's at least one user
            try {
                await client.deleteUserSchema(TEST_ACCOUNT_UUID);
                should.fail(null, null, 'Deleting should fail');
            } catch (e) {

            }

            const newUser = await client.createUser(uniqueString(), uniqueString());
            const userSchemaWithUsername = {
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    username: {type: 'string'}
                },
                required: ['id', 'username']
            };
            newUser.should.matchSchema(userSchemaWithUsername);

            const newUserWithStatus = await client.createUser(uniqueString(), uniqueString(), {}, [], 'PENDING');
            newUserWithStatus.status.should.equal('PENDING');

            const users = await client.listUsers();
            users.should.matchSchema({
                type: 'array',
                items: userSchemaWithUsername
            });

            const fullUsers = await client.listUsers(true);
            (typeof fullUsers[0].attributes).should.equal("object");

            const usersWithStatus = await client.listUsersWithStatus('PENDING');
            const pendingUser = usersWithStatus.filter(u => u.id === newUserWithStatus.id)[0];
            pendingUser.id.should.equal(newUserWithStatus.id);
            should(pendingUser.attributes).be.undefined();

            const userFromTV = await client.readUser(newUser.id);
            userFromTV.should.matchSchema(userSchemaWithUsername);

            const usersFromTV = await client.readUsers([newUser.id]);
            usersFromTV.should.matchSchema({
                type: 'array',
                items: userSchemaWithUsername
            });

            const uniqueAttributeValue = uniqueString();
            const userUpdatedAttributes = await client.updateUserAttributes(newUser.id, {foo: uniqueAttributeValue});
            userUpdatedAttributes.should.matchSchema(userSchemaWithUsername);

            const searchResultNotFull = await client.searchUsers({
                "filter": {
                    "foo": {
                        "type": "eq",
                        "value": uniqueAttributeValue
                    }
                }
            });
            searchResultNotFull.should.matchSchema({
                type: 'object',
                properties: {
                    documents: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: {type: 'string', format: 'uuid'}
                            },
                            required: ['id']
                        }
                    },
                    info: {
                        type: 'object',
                        properties: {
                            current_page: {type: 'integer'},
                            num_pages: {type: 'integer'},
                            total_result_count: {type: 'integer'},
                            per_page: {type: 'integer'}
                        },
                        required: ['current_page', 'num_pages', 'total_result_count', 'per_page']
                    }
                },
                required: ['documents', 'info']
            });

            const searchResultFull = await client.searchUsers({
                "full_document": true,
                "filter": {
                    "foo": {
                        "type": "eq",
                        "value": uniqueAttributeValue
                    }
                }
            });
            searchResultFull.should.matchSchema({
                type: 'object',
                properties: {
                    documents: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: {type: 'string', format: 'uuid'},
                                attributes: {type: ['null', 'object']},
                            },
                            required: ['id', 'attributes']
                        }
                    },
                    info: {
                        type: 'object',
                        properties: {
                            current_page: {type: 'integer'},
                            num_pages: {type: 'integer'},
                            total_result_count: {type: 'integer'},
                            per_page: {type: 'integer'}
                        },
                        required: ['current_page', 'num_pages', 'total_result_count', 'per_page']
                    }
                },
                required: ['documents', 'info']
            });

            const newUserAccessToken = await client.createUserAccessToken(newUser.id);
            newUserAccessToken.should.matchSchema({type: 'string'});

            const newUserAPIKey = await client.createUserApiKey(newUser.id);
            newUserAPIKey.should.matchSchema({type: 'string'});

            const newUserPasswordUpdated = await client.updateUserPassword(newUser.id, 'newpassword');
            newUserPasswordUpdated.should.matchSchema(userSchemaWithUsername);

            const newUserStatusUpdated = await client.updateUserStatus(newUser.id, 'PENDING');
            newUserStatusUpdated.should.matchSchema(userSchemaWithUsername);

            const newUserUsernameUpdated = await client.updateUserUsername(newUser.id, uniqueString());
            newUserUsernameUpdated.should.matchSchema(userSchemaWithUsername);

            const newUserDeleted = await client.deleteUser(newUser.id);
            newUserDeleted.should.matchSchema(userSchemaWithUsername);

            const updateCurrentUserResult = await client.updateCurrentUser(null);
            updateCurrentUserResult.should.matchSchema(USER_SCHEMA);

            const currentUserAfterUpdate = await client.readCurrentUser();
            should(currentUserAfterUpdate.attributes).be.null();
        });
    });

    describe('user mfa', function () {
        it('works', async function () {
            const newUsername = uniqueString();
            const newUserPassword = 'password';
            const newUser = await client.createUser(newUsername, newUserPassword);

            const mfaEnrollmentInfo = await client.startUserMfaEnrollment(newUser.id, 'js-integration-tests');
            mfaEnrollmentInfo.should.matchSchema({
                type: 'object',
                properties: {
                    qr_code_svg: {type: 'string'},
                    secret: {type: 'string'},
                    uri: {type: 'string'}
                },
                required: ['qr_code_svg', 'secret', 'uri']
            });

            const secret = mfaEnrollmentInfo.secret;

            const token1 = otplib.authenticator.generate(secret);

            await sleep(30000);

            const token2 = otplib.authenticator.generate(secret);

            const mfaFinalizationResult = await client.finalizeMfaEnrollment(newUser.id, token1, token2);
            should(mfaFinalizationResult).be.undefined();

            await sleep(30000);
            const token3 = otplib.authenticator.generate(secret);

            const mfaUnrenrollResult = await client.unenrollMfa(newUser.id, token3, newUserPassword);
            should(mfaUnrenrollResult).be.undefined();
        });
    });

    describe('blobs', function () {
        let testBlobContentsFactory;
        if (typeof Blob !== "undefined") {
            // Must be running in a browser-like environment
            testBlobContentsFactory = () => new Blob(['testing blob contents'], {type: 'text/plain'});
        } else {
            // Must be running in something node-like. This atrocity is needed to keep webpack from trying
            // to load the fs module when building for web. Obviously this would fail if run in a web environment,
            // but on web Blob will be defined so the other branch runs.
            const fs = eval("require('fs')");

            const directory = process.env.LAMBDA_TASK_ROOT || __dirname;
            const filePath = directory + '/' + 'index.test.js';
            testBlobContentsFactory = () => fs.createReadStream(filePath);
        }

        const newBlobSchema = {
            type: 'object',
            properties: {
                id: {type: 'string', format: 'uuid'},
                filename: {type: 'string'},
                size: {type: 'string'}
            },
            required: ['id', 'filename', 'size']
        };

        function testProgressCallbackFactory(tag) {
            let receivedLoadEvent = false;
            let receivedProgressEvent = false;

            const ret = e => {
                console.log(`${tag}: test progress callback received event`, e);
                if (e.type === 'load') {
                    receivedLoadEvent = true;
                }
                if (e.type === 'progress') {
                    receivedProgressEvent = true;
                }
            };

            ret.verify = () => {
                if (!receivedLoadEvent) {
                    should.fail(`Didn't receive 'load' event for ${tag}`);
                }

                if (!receivedProgressEvent) {
                    should.fail(`Didn't receive 'progress' event for ${tag}`);
                }
            };

            return ret;
        }

        if (typeof XMLHttpRequest === "undefined") {
            it('works with progress tests can only run in the browser');
        } else {
            it('works with progress', async function () {
                const newVault = await client.createVault(uniqueString());

                const createProgressCallback = testProgressCallbackFactory("create");
                const newBlob = await client.createBlobWithProgress(newVault.id, testBlobContentsFactory(), createProgressCallback);
                newBlob.should.matchSchema(newBlobSchema);
                createProgressCallback.verify();

                const updateProgressCallback = testProgressCallbackFactory("update");
                const updatedBlob = await client.updateBlobWithProgress(newVault.id, newBlob.id, testBlobContentsFactory(), updateProgressCallback);
                updatedBlob.should.matchSchema(newBlobSchema);
                updateProgressCallback.verify();

                const getProgressCallback = testProgressCallbackFactory("get");
                const getBlobResponse = await client.getBlobWithProgress(newVault.id, newBlob.id, getProgressCallback);
                getBlobResponse.blob.size.should.above(0);
                getBlobResponse.blob.should.be.instanceOf(Blob);
                getProgressCallback.verify();
            });
        }

        it('works without progress', async function () {
            const vaultName = uniqueString();
            const newVault = await client.createVault(vaultName);
            const newVaultId = newVault.id;

            const newBlob = await client.createBlob(newVaultId, testBlobContentsFactory());

            newBlob.should.matchSchema(newBlobSchema);

            const blobs = await client.listBlobs(newVaultId);
            const blobSchema = {
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'}
                },
                required: ['id']
            };
            blobs.should.matchSchema({
                type: 'object',
                properties: {
                    total: {type: 'integer'},
                    page: {type: 'integer'},
                    per_page: {type: 'integer'},
                    items: {
                        type: 'array',
                        items: blobSchema
                    }
                },
                required: ['total', 'page', 'per_page', 'items']
            });

            const response = await client.getBlob(newVaultId, newBlob.id);
            const responseBlobLength = response.blob.read ? response.blob.read().length : response.blob.size;
            responseBlobLength.should.above(0);

            const updateBlobResponse = await client.updateBlob(newVaultId, newBlob.id, testBlobContentsFactory());
            updateBlobResponse.should.matchSchema(blobSchema);

            const newUser = await client.createUser(uniqueString(), uniqueString());
            const updateOwnerResponse = await client.updateBlobOwner(newVaultId, newBlob.id, newUser.id);
            updateOwnerResponse.should.matchSchema(blobSchema);

            const deleteResponse = await client.deleteBlob(newVaultId, newBlob.id);
            deleteResponse.should.matchSchema(blobSchema);
        });
    });

    describe('vaults and docs', function () {
        it('works', async function () {
            const vaults = await client.listVaults();
            const vaultSchema = {
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    name: {type: 'string'}
                },
                required: ['id', 'name']
            };
            vaults.should.matchSchema({
                type: 'array',
                items: vaultSchema
            });

            const newVault = await client.createVault(uniqueString());
            newVault.should.matchSchema({
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    name: {type: 'string'}
                }
            });
            const vaultId = newVault.id;

            const vaultFromTV = await client.readVault(vaultId);
            vaultFromTV.should.matchSchema(vaultSchema);

            const newVaultName = uniqueString();
            const updatedVault = await client.updateVault(vaultId, newVaultName);
            updatedVault.should.matchSchema(vaultSchema);
            updatedVault.name.should.equal(newVaultName);

            const docAttributes = {foo: "bar"};
            const newDoc = await client.createDocument(vaultId, undefined, docAttributes);
            const documentSchema = {
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    vault_id: {type: 'string', format: 'uuid'},
                    owner_id: {type: ['string', 'null'], format: 'uuid'}
                },
                required: ['id', 'vault_id', 'owner_id']
            };
            newDoc.should.matchSchema(documentSchema);
            const newDocId = newDoc.id;

            const newUser = await client.createUser(uniqueString(), uniqueString());

            const updateOwnerResponse = await client.updateDocumentOwner(vaultId, newDocId, newUser.id);
            updateOwnerResponse.should.matchSchema(documentSchema);

            const getDocsByIdResponse = await client.getDocuments(vaultId, [newDocId]);
            getDocsByIdResponse.should.matchSchema({
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {type: 'string', format: 'uuid'},
                        document: {type: 'object'}
                    },
                    required: ['id', 'document']
                }
            });

            const fullDocs = await client.listDocuments(vaultId, true);
            const docListSchema = {
                type: 'object',
                properties: {
                    page: {type: 'integer'},
                    per_page: {type: 'integer'},
                    total: {type: 'integer'},
                    items: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: {type: 'string', format: 'uuid'},
                                document: {type: 'object'}
                            },
                            required: ['id', 'document']
                        }
                    }
                },
                required: ['page', 'per_page', 'total', 'items']
            };
            fullDocs.should.matchSchema(docListSchema);

            const updateDocumentResponse = await client.updateDocument(vaultId, newDocId, {newFoo: "newBar"});
            updateDocumentResponse.should.matchSchema(documentSchema);

            const newSchemaName = uniqueString();
            const newSchema = await client.createSchema(vaultId, newSchemaName, [{
                name: 'foo',
                type: 'string',
                index: true
            }]);
            const schemaSchema = {
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    vault_id: {type: 'string', format: 'uuid'},
                    name: {type: 'string'},
                    fields: {type: 'array'}
                },
                required: ['id', 'vault_id', 'name', 'fields']
            };
            newSchema.should.matchSchema(schemaSchema);

            const addedDocToSchemaResponse = await client.updateDocument(vaultId, newDocId, {}, null, newSchema.id);
            addedDocToSchemaResponse.should.matchSchema(documentSchema);

            const schemaFromTrueVault = await client.readSchema(vaultId, newSchema.id);
            schemaFromTrueVault.name.should.equal(newSchemaName);
            schemaFromTrueVault.should.matchSchema(schemaSchema);

            const schemas = await client.listSchemas(vaultId);
            schemas.should.matchSchema({
                type: 'array',
                items: schemaSchema
            });

            const schemaToDelete = await client.createSchema(vaultId, uniqueString(), []);
            const deleteSchemaResponse = await client.deleteSchema(vaultId, schemaToDelete.id);
            should(deleteSchemaResponse).be.undefined();

            const indexedDoc = await client.createDocument(vaultId, newSchema.id, {foo: "bar"});
            indexedDoc.should.matchSchema(documentSchema);

            const docsInSchema = await client.listDocumentsInSchema(vaultId, newSchema.id, true);
            docsInSchema.should.matchSchema(docListSchema);

            const searchResultsNotFull = await client.searchDocuments(vaultId, {
                schema_id: newSchema.id,
                filter: {
                    foo: {
                        type: "eq",
                        value: "bar"
                    }
                }
            });
            searchResultsNotFull.should.matchSchema({
                type: 'object',
                properties: {
                    documents: {type: 'array'},
                    info: {
                        type: 'object',
                        properties: {
                            current_page: {type: 'integer'},
                            num_pages: {type: 'integer'},
                            per_page: {type: 'integer'},
                            total_result_count: {type: 'integer'}
                        },
                        required: ['current_page', 'num_pages', 'per_page', 'total_result_count']
                    }
                },
                required: ['documents', 'info']
            });

            const searchResultsFull = await client.searchDocuments(vaultId, {
                schema_id: newSchema.id,
                full_document: true,
                filter: {
                    foo: {
                        type: "eq",
                        value: "bar"
                    }
                }
            });

            searchResultsFull.should.matchSchema({
                type: 'object',
                properties: {
                    documents: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                document_id: {type: 'string', format: 'uuid'},
                                owner_id: {type: ['string', 'null'], format: 'uuid'},
                                document: {type: 'object'}
                            },
                            required: ['document_id', 'owner_id', 'document']
                        }
                    },
                    info: {
                        type: 'object',
                        properties: {
                            current_page: {type: 'integer'},
                            num_pages: {type: 'integer'},
                            per_page: {type: 'integer'},
                            total_result_count: {type: 'integer'}
                        },
                        required: ['current_page', 'num_pages', 'per_page', 'total_result_count']
                    }
                },
                required: ['documents', 'info']
            });

            const newFields = [];
            const newName = uniqueString();
            const updateSchemaResponse = await client.updateSchema(vaultId, newSchema.id, newName, newFields);
            updateSchemaResponse.should.matchSchema(schemaSchema);
            updateSchemaResponse.name.should.equal(newName);
            updateSchemaResponse.fields.should.eql(newFields);

            const deleteDocumentResponse = await client.deleteDocument(vaultId, newDocId);
            deleteDocumentResponse.should.matchSchema({
                type: 'object',
                properties: {
                    id: {type: 'string', format: 'uuid'}
                },
                required: ['id']
            });

            const vaultToDelete = await client.createVault(uniqueString());

            const deleteVaultResponse = await client.deleteVault(vaultToDelete.id);
            deleteVaultResponse.should.matchSchema(vaultSchema);
        });
    });

    describe('password reset flow', function () {
        it('works', async function () {
            const passwordResetFlowSchema = {
                type: 'object',
                properties: {
                    id: {type: 'string'},
                    name: {type: 'string'},
                    sg_template_id: {type: 'string'},
                    substitutions: {type: 'object'},
                    user_email_value_spec: {type: 'object'},
                    from_email_value_spec: {type: 'object'}
                }
            };

            const passwordResetFlowName = uniqueString();
            const passwordResetFlow = await client.createPasswordResetFlow(
                passwordResetFlowName,
                TEST_SENDGRID_TEMPLATE_ID,
                TEST_SENDGRID_API_KEY,
                {user_attribute: 'email'},
                {literal_value: 'support@example.com'},
                {});
            passwordResetFlow.should.matchSchema(passwordResetFlowSchema);

            const passwordResetFlows = await client.listPasswordResetFlows();
            passwordResetFlows.should.matchSchema({
                type: 'array',
                items: passwordResetFlowSchema
            });

            const sendResult = await client.sendPasswordResetEmail(passwordResetFlow.id, uniqueString());
            should(sendResult).be.undefined();
        });
    });

    describe('sendgrid', function () {
        it('works', async function () {
            const newUser = await client.createUser(uniqueString(), uniqueString(), {email: 'test@example.com'});

            const providerMessageId = await client.sendEmailSendgrid(
                TEST_SENDGRID_API_KEY,
                newUser.id,
                TEST_SENDGRID_TEMPLATE_ID,
                {literal_value: 'support@example.com'},
                {user_attribute: 'email'},
                {}
            );
            providerMessageId.should.matchSchema({type: 'string'});
        });
    });

    describe('twilio', function () {
        it('works', async function () {
            const newUser = await client.createUser(uniqueString(), uniqueString(), {phone: '+15558675309'});

            try {
                // We don't really want to send SMS for each test run, because that will get expensive fast.
                await client.sendSMSTwilio(
                    'twilio_account_id',
                    'twilio_key_id',
                    'twilio_key_secret',
                    newUser.id,
                    {literal_value: '+15555555555'},
                    {user_attribute: 'phone'},
                    'Testing'
                );
                should.fail(null, null, 'should have thrown');
            } catch (e) {
            }
        });
    });
});

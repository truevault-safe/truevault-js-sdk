const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'test.env')});

const TrueVault = require('./index');

const uuid = require('uuid');
import otplib from 'otplib';
import {Readable} from 'stream';
import fs from 'fs';
import {matchersWithOptions} from 'jest-json-schema';

expect.extend(matchersWithOptions({
    allErrors: true,
    verbose: true,
    schemas: []
}));

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

const TEST_TRUEVAULT_HOST = process.env.TEST_TRUEVAULT_HOST;
const TEST_ACCOUNT_UUID = process.env.TEST_ACCOUNT_UUID;
const TEST_USER_API_KEY = process.env.TEST_USER_API_KEY;
const TEST_SENDGRID_API_KEY = process.env.TEST_SENDGRID_API_KEY;
const TEST_SENDGRID_TEMPLATE_ID = process.env.TEST_SENDGRID_TEMPLATE_ID;

const uniqueString = () => `js_integration_test_${uuid.v4()}`;

jest.setTimeout(600000);

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

const client = new TrueVault({apiKey: TEST_USER_API_KEY}, TEST_TRUEVAULT_HOST);

test('login', async () => {
    const loginUserUsername = uniqueString();
    const loginUserPassword = 'testpassword';
    await client.createUser(loginUserUsername, loginUserPassword);

    const loginClient = await TrueVault.login(TEST_ACCOUNT_UUID, loginUserUsername, loginUserPassword, undefined, TEST_TRUEVAULT_HOST);

    expect(loginClient.accessToken).toMatch(/[a-z0-9.-]+/);

    const currentUser = await loginClient.readCurrentUser(false);
    expect(currentUser.attributes).toBe(undefined);

    const currentUserFull = await loginClient.readCurrentUser();
    expect(currentUserFull.attributes).toEqual({});

    expect(await loginClient.logout()).toMatchSchema(USER_SCHEMA);
    expect(loginClient.authHeader).toBeNull();
});

test('error handling', async () => {
    try {
        await TrueVault.login(TEST_ACCOUNT_UUID, 'invalid', 'invalid', undefined, TEST_TRUEVAULT_HOST);
        fail('Should have thrown');
    } catch (e) {
        expect(e.error).toMatchSchema({
            type: 'object',
            properties: {
                code: {type: 'string'},
                message: {type: 'string'},
                type: {type: 'string'}
            },
            required: ['code', 'message', 'type']
        });
        expect(e.transaction_id).toMatchSchema({type: 'string', format: 'uuid'});
    }
});

test('readCurrentUser', async () => {
    const user = await client.readCurrentUser();
    expect(user).toMatchSchema(USER_SCHEMA);
});

test('groups', async () => {
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

    expect(newGroup).toMatchSchema(groupSchema);
    const fullGroup = await client.getFullGroup(newGroup.id);

    expect(fullGroup).toMatchSchema(groupSchema);
    const updatedGroup = await client.updateGroup(newGroup.id, uniqueString(), []);

    expect(updatedGroup).toMatchSchema(groupSchema);
    const groups = await client.listGroups();

    expect(groups).toMatchSchema({
        type: 'array',
        items: groupSchema
    });

    const newUser = await client.createUser(uniqueString(), uniqueString());

    const addUsersResult = await client.addUsersToGroup(newGroup.id, [newUser.id]);
    expect(addUsersResult).toBe(undefined);

    const removeUsersResult = await client.removeUsersFromGroup(newGroup.id, [newUser.id]);
    expect(removeUsersResult).toMatchSchema(groupSchema);

    const addUsersReturnIdsResult = await client.addUsersToGroupReturnUserIds(newGroup.id, [newUser.id]);
    expect(addUsersReturnIdsResult).toMatchSchema(groupSchema);

    const deleteResult = await client.deleteGroup(newGroup.id);
    expect(deleteResult).toMatchSchema(groupSchema);
});

test('users', async () => {
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
    expect(updateSchemaResponse).toMatchSchema(schemaSchema);
    const readUserSchemaResponse = await client.readUserSchema(TEST_ACCOUNT_UUID);
    expect(readUserSchemaResponse).toMatchSchema(schemaSchema);

    // In practice, deleting UserSchema always fails because there's at least one user
    try {
        await client.deleteUserSchema(TEST_ACCOUNT_UUID);
        fail('Deleting should fail');
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
    expect(newUser).toMatchSchema(userSchemaWithUsername);

    const newUserWithStatus = await client.createUser(uniqueString(), uniqueString(), {}, [], 'PENDING');
    expect(newUserWithStatus.status).toBe('PENDING');

    const users = await client.listUsers();
    expect(users).toMatchSchema({
        type: 'array',
        items: userSchemaWithUsername
    });

    const userFromTV = await client.readUser(newUser.id);
    expect(userFromTV).toMatchSchema(userSchemaWithUsername);

    const usersFromTV = await client.readUsers([newUser.id]);
    expect(usersFromTV).toMatchSchema({
        type: 'array',
        items: userSchemaWithUsername
    });

    const uniqueAttributeValue = uniqueString();
    const userUpdatedAttributes = await client.updateUserAttributes(newUser.id, {foo: uniqueAttributeValue});
    expect(userUpdatedAttributes).toMatchSchema(userSchemaWithUsername);

    const searchResultNotFull = await client.searchUsers({
        "filter": {
            "foo": {
                "type": "eq",
                "value": uniqueAttributeValue
            }
        }
    });
    expect(searchResultNotFull).toMatchSchema({
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
    expect(searchResultFull).toMatchSchema({
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
    expect(newUserAccessToken).toMatchSchema({type: 'string'});

    const newUserAPIKey = await client.createUserApiKey(newUser.id);
    expect(newUserAPIKey).toMatchSchema({type: 'string'});

    const newUserPasswordUpdated = await client.updateUserPassword(newUser.id, 'newpassword');
    expect(newUserPasswordUpdated).toMatchSchema(userSchemaWithUsername);

    const newUserStatusUpdated = await client.updateUserStatus(newUser.id, 'PENDING');
    expect(newUserStatusUpdated).toMatchSchema(userSchemaWithUsername);

    const newUserUsernameUpdated = await client.updateUserUsername(newUser.id, uniqueString());
    expect(newUserUsernameUpdated).toMatchSchema(userSchemaWithUsername);

    const newUserDeleted = await client.deleteUser(newUser.id);
    expect(newUserDeleted).toMatchSchema(userSchemaWithUsername);

    const updateCurrentUserResult = await client.updateCurrentUser(null);
    expect(updateCurrentUserResult).toMatchSchema(USER_SCHEMA);

    const currentUserAfterUpdate = await client.readCurrentUser();
    expect(currentUserAfterUpdate.attributes).toBe(null);
});

test('user mfa', async () => {
    const newUsername = uniqueString();
    const newUserPassword = 'password';
    const newUser = await client.createUser(newUsername, newUserPassword);

    const mfaEnrollmentInfo = await client.startUserMfaEnrollment(newUser.id, 'js-integration-tests');
    expect(mfaEnrollmentInfo).toMatchSchema({
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
    expect(mfaFinalizationResult).toBe(undefined);

    await sleep(30000);
    const token3 = otplib.authenticator.generate(secret);

    const mfaUnrenrollResult = await client.unenrollMfa(newUser.id, token3, newUserPassword);
    expect(mfaUnrenrollResult).toBe(undefined);
});

test('blobs', async () => {
    const vaultName = uniqueString();
    const newVault = await client.createVault(vaultName);
    const newVaultId = newVault.id;

    const newBlob = await client.createBlob(newVaultId, fs.createReadStream(__filename));

    expect(newBlob).toMatchSchema({
        type: 'object',
        properties: {
            id: {type: 'string', format: 'uuid'},
            filename: {type: 'string'},
            size: {type: 'string'}
        },
        required: ['id', 'filename', 'size']
    });

    const blobs = await client.listBlobs(newVaultId);
    const blobSchema = {
        type: 'object',
        properties: {
            id: {type: 'string', format: 'uuid'}
        },
        required: ['id']
    };
    expect(blobs).toMatchSchema({
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

    await client.getBlob(newVaultId, newBlob.id);

    const updateBlobResponse = await client.updateBlob(newVaultId, newBlob.id, fs.createReadStream(__filename));
    expect(updateBlobResponse).toMatchSchema(blobSchema);

    const newUser = await client.createUser(uniqueString(), uniqueString());
    const updateOwnerResponse = await client.updateBlobOwner(newVaultId, newBlob.id, newUser.id);
    expect(updateOwnerResponse).toMatchSchema(blobSchema);

    const deleteResponse = await client.deleteBlob(newVaultId, newBlob.id);
    expect(deleteResponse).toMatchSchema(blobSchema);
});

test('vaults and docs', async () => {
    const vaults = await client.listVaults();
    const vaultSchema = {
        type: 'object',
        properties: {
            id: {type: 'string', format: 'uuid'},
            name: {type: 'string'}
        },
        required: ['id', 'name']
    };
    expect(vaults).toMatchSchema({
        type: 'array',
        items: vaultSchema
    });

    const newVault = await client.createVault(uniqueString());
    expect(newVault).toMatchSchema({
        type: 'object',
        properties: {
            id: {type: 'string', format: 'uuid'},
            name: {type: 'string'}
        }
    });
    const vaultId = newVault.id;

    const vaultFromTV = await client.readVault(vaultId);
    expect(vaultFromTV).toMatchSchema(vaultSchema);

    const newVaultName = uniqueString();
    const updatedVault = await client.updateVault(vaultId, newVaultName);
    expect(updatedVault).toMatchSchema(vaultSchema);
    expect(updatedVault.name).toBe(newVaultName);

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
    expect(newDoc).toMatchSchema(documentSchema);
    const newDocId = newDoc.id;

    const newUser = await client.createUser(uniqueString(), uniqueString());

    const updateOwnerResponse = await client.updateDocumentOwner(vaultId, newDocId, newUser.id);
    expect(updateOwnerResponse).toMatchSchema(documentSchema);

    const getDocsByIdResponse = await client.getDocuments(vaultId, [newDocId]);
    expect(getDocsByIdResponse).toMatchSchema({
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
    expect(fullDocs).toMatchSchema(docListSchema);

    const updateDocumentResponse = await client.updateDocument(vaultId, newDocId, {newFoo: "newBar"});
    expect(updateDocumentResponse).toMatchSchema(documentSchema);

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
    expect(newSchema).toMatchSchema(schemaSchema);

    const schemaFromTrueVault = await client.readSchema(vaultId, newSchema.id);
    expect(schemaFromTrueVault.name).toBe(newSchemaName);
    expect(schemaFromTrueVault).toMatchSchema(schemaSchema);

    const schemas = await client.listSchemas(vaultId);
    expect(schemas).toMatchSchema({
        type: 'array',
        items: schemaSchema
    });

    const schemaToDelete = await client.createSchema(vaultId, uniqueString(), []);
    const deleteSchemaResponse = await client.deleteSchema(vaultId, schemaToDelete.id);
    expect(deleteSchemaResponse).toBe(undefined);

    const indexedDoc = await client.createDocument(vaultId, newSchema.id, {foo: "bar"});
    expect(indexedDoc).toMatchSchema(documentSchema);

    const searchResultsNotFull = await client.searchDocuments(vaultId, {
        schema_id: newSchema.id,
        filter: {
            foo: {
                type: "eq",
                value: "bar"
            }
        }
    });
    expect(searchResultsNotFull).toMatchSchema({
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

    expect(searchResultsFull).toMatchSchema({
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
    expect(updateSchemaResponse).toMatchSchema(schemaSchema);
    expect(updateSchemaResponse.name).toEqual(newName);
    expect(updateSchemaResponse.fields).toEqual(newFields);

    const deleteDocumentResponse = await client.deleteDocument(vaultId, newDocId);
    expect(deleteDocumentResponse).toMatchSchema({
        type: 'object',
        properties: {
            id: {type: 'string', format: 'uuid'}
        },
        required: ['id']
    });

    const vaultToDelete = await client.createVault(uniqueString());

    const deleteVaultResponse = await client.deleteVault(vaultToDelete.id);
    expect(deleteVaultResponse).toMatchSchema(vaultSchema);
});

test('password reset flow', async () => {
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
    expect(passwordResetFlow).toMatchSchema(passwordResetFlowSchema);

    const passwordResetFlows = await client.listPasswordResetFlows();
    expect(passwordResetFlows).toMatchSchema({
        type: 'array',
        items: passwordResetFlowSchema
    });

    const sendResult = await client.sendPasswordResetEmail(passwordResetFlow.id, uniqueString());
    expect(sendResult).toBe(undefined);
});

test('sendgrid', async () => {
    const newUser = await client.createUser(uniqueString(), uniqueString(), {email: 'test@example.com'});

    const providerMessageId = await client.sendEmailSendgrid(
        TEST_SENDGRID_API_KEY,
        newUser.id,
        TEST_SENDGRID_TEMPLATE_ID,
        {literal_value: 'support@example.com'},
        {user_attribute: 'email'},
        {}
    );
    expect(providerMessageId).toMatchSchema({type: 'string'});
});

test('twilio', async () => {
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
        fail('should have thrown');
    } catch (e) {
    }
});

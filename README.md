# TrueVault JavaScript SDK

The official JavaScript SDK for TrueVault. For more information about TrueVault, check out our [website](https://www.truevault.com) and [API documentation](https://docs.truevault.com). To see how the SDK is used in a real application, check out the [TrueVault React Sample App](https://github.com/truevault/tv-react-js-sample-app). You can also browse the [documentation for this SDK](https://truevault.github.io/truevault-js-sdk).

_Note: This SDK is supported on Node JS, AWS Lambda, React Native, and modern browsers (tested in Chrome)._

## Install using unpkg CDN

Simply copy this line into your HTML:
```html
<script src="https://unpkg.com/truevault@2.0.0/build/index-web.js"></script>
```

## Install using yarn / npm

First download the package using yarn or npm.

```
yarn add truevault

// OR

npm install truevault
```

Then import the JS SDK into your project:

### ES6
```javascript
import TrueVaultClient from 'truevault';
```

### ES5
```javascript
const TrueVaultClient = require('truevault');
```

## Usage

Initialize a TrueVaultClient using an access token or API key:

```javascript
const tvClient = new TrueVaultClient({apiKey: 'your api key'});
```

You can also create a new TrueVaultClient by logging in:

```javascript
const tvClient = await TrueVaultClient.login(accountId, username, password, mfaCode);
```

See the [documentation](http://truevault.github.io/truevault-js-sdk) for more info.

### Asynchronous Requests

The methods in this SDK make asynchronous web requests to TrueVault and return Promises. We recommend using async/await in favor of Promises wherever possible for clarity and conciseness.

#### async/await
```javascript
async readTrueVaultDocument() {
    try {
        const response = await tvClient.readDocument(vaultId, documentId);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}
```

#### Promises
```javascript
readTrueVaultDocument() {
    tvClient.readDocument(vaultId, documentId).then(response => {
        console.log(response);
    }).catch(err => {
        console.error(err);
    });
}
```

### Example

Test out the SDK with this simple [JSFiddle](https://jsfiddle.net/TrueVault/wq4em2m1/) example.

## Development

Make changes to `index.js` and then bundle them into `build/index.js` with webpack:

`yarn install`

`yarn build`

The integration tests are built with [Mocha](https://mochajs.org/). To run them,
first copy `test.env.template` to `test.env` and populate `test.env` with values from your account. To run tests, do
`yarn test`. You can run a subset of tests via `yarn test -g [filter regex]`

To run in a browser, first rebuild the test file with webpack: `yarn build-browser-tests`
and then load test/index.html in a browser.

Running in AWS lambda is more complicated:

1. Build a version of the tests for inclusion in lambda: `yarn build-lambda-tests`
1. Create a new Lambda function. Choose Node 8.10 for the runtime, `run-lambda-tests.runTests` for the handler, 5 minutes for the timeout, and supply the generated lambda.zip.
1. Perform a test invocation to run the tests. They take a few minutes to run, and no output appears until they complete.

## Documentation

This project uses [documentationjs](http://documentation.js.org/). To generate the docs:

```
rm -rf docs && yarn documentation -- build index.js -f html -o docs
```

The documentation is available [via GitHub Pages](https://truevault.github.io/truevault-js-sdk).

## License

This SDK is released under the [BSD 3-Clause License](LICENSE).

## Releasing a new version

- Update version in `package.json`, update the version in README.md.
- Update the changelog in README.md
- Rebuild distribution files; see above
- Rebuild documentation; see above
- Commit
- `npm publish`
- Tag

## CHANGELOG

### v2.0.0
* CHANGE: Remove babel-polyfill from production builds

### v1.3.0
* FEATURE: Add support for managing scoped access tokens

### v1.2.1
* BUGFIX: Correct issue that prevented setting schema id or owner id when creating documents
* FEATURE: Add support for configuring access token expiration

### v1.1.0
* FEATURE: Get blob methods return the blob's content type and filename, in addition to the blob itself

### v1.0.2
* FEATURE: Minify production builds to reduce file size

### v1.0.1
* FEATURE: Add JSDoc to blob methods

### v1.0.0
* BUGFIX: Fix error in `readUserSchema` method
* CHANGE: `listUsers` now defaults to `full=false`, rather than `full=true`
* CHANGE: `TrueVaultClient` constructor no longer accepts a string parameter; authentication information must be provided as an object
* CHANGE: `removeUsersFromGroup` renamed to `removeUsersFromGroupReturnUserIds`
* CHANGE: `deleteGroup` returns the deleted group, rather than the top-level TrueVault API response
* CHANGE: `deleteBlob`, `updateBlobOwner`, `updateBlob`, `createBlob`, `createBlobWithProgress` return the blob's info, rather than the top-level TrueVault API response
* CHANGE: `getBlob` and `getBlobWithProgress` return an object with a blob property, rather than just the blob
* CHANGE: `startUserMfaEnrollment` now returns the mfa response object rather than the top-level TrueVault API response
* CHANGE: `createVault` now returns the vault object rather than the top-level TrueVault API response
* CHANGE: `createDocument`, `updateDocument` and `updateDocumentOwner` now return the document rather than the top-level TrueVault API response
* CHANGE: `getFullGroup` renamed to `readFull` group, and it now returns the group rather than the top-level TrueVault API response
* CHANGE: `createSchema`, `createUserSchema`, `readUserSchema`, `updateUserSchema` and `deleteUserSchema` now return the schema rather than the top-level TrueVault API response
* CHANGE: `searchUsers`, `searchDocuments`, and `readUsers` now decode attributes
* CHANGE: `listPasswordResetFlows` returns an array of password reset flows rather than the top-level TrueVault API response
* CHANGE: `sendPasswordResetEmail` returns undefined rather than the top-level TrueVault API response
* CHANGE: `deleteDocument` returns an object with the deleted document's info, rather than the top-level TrueVault API response
* FEATURE: Add support AWS Lambda, NodeJS, and React Native
* FEATURE: Allow specifying status when creating user
* FEATURE: Access token and auth header exposed as properties
* FEATURE: Error objects from failed requests include transaction_id
* FEATURE: `readCurrentUser` now allows setting `full=false`
* FEATURE: `listDocuments` now supports specifying `full` parameter
* FEATURE: Add `updateCurrentUser`, `listUsersWithStatus`, `removeUsersFromGroup`, `listVaults`, `readVault`, `updateVault`, `deleteVault`, `updateSchema`, `readSchema`, `listSchema`, `deleteSchema`, `listDocumentsInSchema` methods

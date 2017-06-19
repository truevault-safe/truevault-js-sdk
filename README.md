# TrueVault JavaScript SDK

The official JavasScript SDK for TrueVault. For more information about TrueVault, check out our [website](https://www.truevault.com) and [API documentation](https://docs.truevault.com). To see how the SDK is used in a real application, check out the [TrueVault React Sample App](https://github.com/truevault/tv-react-js-sample-app).

_Note: This SDK is only supported for the latest release of Chrome._

## Install using unpkg CDN

Simply copy this line into your HTML:
```html
<script src="https://unpkg.com/tv-js-sdk@0.1.0/build/index.js"></script>
```

## Install using yarn / npm

First download the package using yarn or npm.

```
yarn add tv-js-sdk

// OR

npm install tv-js-sdk
```

Then import the JS SDK into your project:

### ES6
```javascript
import TrueVaultClient from 'tv-js-sdk';
```

### ES5
```javascript
const TrueVaultClient = require('tv-js-sdk');
```

## Usage

Initialize a TrueVaultClient using an access token or API key

```
const tvClient = new TrueVaultClient(apiKeyOrAccessToken);
```

You can also create a new TrueVaultClient by logging in:

```
const tvClient = await TrueVaultClient.login(accountId, username, password, mfaCode);
```

### Asynchronous Requests

The methods in this SDK make asynchronous web requests to TrueVault and return Promises. We recommend using async/await in favor of Promises wherever possible for clarity and conciseness.

### async/await
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

### Promises
```javascript
readTrueVaultDocument() {
    tvClient.readDocument(vaultId, documentId).then(response => {
        console.log(response);
    }).catch(err => {
        console.error(err);
    });
}
```

## Development

Make changes to `index.js` and then bundle them into `bundle.js` with webpack:

`./node_modules/.bin/webpack`

## License

This SDK is released under the [BSD 3-Clause License](LICENSE).


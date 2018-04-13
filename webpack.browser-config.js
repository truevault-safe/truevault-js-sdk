const path = require('path');

module.exports = {
    target: "web",
    entry: ["babel-polyfill", "./index.js"],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: './build',
        filename: 'index-web.js',
        library: 'TrueVaultClient',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env']
                }
            },
        ]
    }
};

const path = require('path');

module.exports = {
    entry: ["babel-polyfill", "./index.js"],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: './build',
        filename: 'index.js',
        library: 'TrueVaultClient',
        libraryTarget: "umd"
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

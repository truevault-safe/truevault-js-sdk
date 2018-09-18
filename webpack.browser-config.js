const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    target: "web",
    entry: ["./index.js"],
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
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    target: "node",
    plugins: [
        new Dotenv({
            safe: './test/test.env',
            path: './test/test.env',
            systemvars: false,
            silent: false
        })
    ],
    entry: ["babel-polyfill", "./test/index.test.js"],
    output: {
        path: path.join(__dirname, './test/lambda'),
        publicPath: './test/lambda',
        filename: 'index.test.js',
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

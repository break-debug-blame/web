const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const ManifestPlugin = require('webpack-manifest-plugin');

const env = require('./config/env');
const common = require('./config/common');

const config = {
    entry: {
        vendor: [
            path.join(env.paths.scripts, 'vendor.js')
        ]
    },
    plugins: [
        new ManifestPlugin({
            fileName: 'vendor-manifest.json',
            writeToFileEmit: env.DEV,
            publicPath: '/'
        }),
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(env.paths.dist, 'common', '[name].json')
        })
    ],
    devtool: false
};

module.exports = merge([
    common,
    config
]);
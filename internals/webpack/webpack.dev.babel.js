/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const webpack = require('webpack');

const plugins = [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NoEmitOnErrorsPlugin(),
    new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/, // exclude node_modules
        failOnError: false, // show a warning when there is a circular dependency
    }),
    new  ExtractTextPlugin('styles.css'),
];

module.exports = require('./webpack.base.babel')({
    entry: [
        'eventsource-polyfill', // Necessary for hot reloading with IE
        'webpack/hot/only-dev-server',
        path.join(process.cwd(), 'src/app','main.js'),
        path.join(process.cwd(), 'src/styles','styles.css')
    ],

    // Don't use hashes in dev mode for better performance
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: dependencyHandlers().concat(plugins),
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader', 'babel'],
            include: path.join(__dirname, 'src')
        }]
    },
    babelQuery: {
        // require.resolve solves the issue of relative presets when dealing with
        // locally linked packages. This is an issue with babel and webpack.
        // See https://github.com/babel/babel-loader/issues/149 and
        // https://github.com/webpack/webpack/issues/1866
        presets: ['babel-preset-react-hmre'].map(require.resolve),
    },
    devtool: 'source-map',
    performance: {
        hints: false,
    },
    devServer: {
        hot: true,
        inline:true,
        historyApiFallbacl:true,
        colors:true,

    },
});

function dependencyHandlers() {
    return [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            children: true,
            minChunks: 2,
            async: true,
        }),
    ];
}


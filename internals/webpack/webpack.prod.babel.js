/**
 * Created by mambig on 5/1/17.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base.babel')({
    // In production, we skip all hot-reloading stuff
    entry: [
        path.join(process.cwd(), '/src/app','main.js'),
        path.join(process.cwd(), '/src/styles','styles.css')
    ],

    // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            sourceMap:false
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/, // exclude node_modules
            failOnError: false, // show a warning when there is a circular dependency
        }),
        new  ExtractTextPlugin('styles.css')
    ],

    performance: {
        assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
    },
});
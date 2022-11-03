const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { resolve } = require('path')
module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'dist'),
        clean: true
    }
}

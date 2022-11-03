const HtmlWebpackPlugin = require('html-webpack-plugin')

const { resolve } = require('path')
module.exports = {
    entry: {
        main: './src/index.js',
        lodash: './src/lodash.js'
    },
    mode: 'development',
    // devtool: 'inline-source-map', // 讲打包的映射存放在bundle.js中， source-map则单独新建一个文件存放代码的映射，但是也包含了第三方模块错误的映射
    devtool: 'eval-cheap-module-source-map',
    // cheap-module-source-map 在生产环境中使用
    devServer: {
        static: {
            directory: resolve(__dirname, 'src')
            // publicPath: '/serve-ayu-jiajia' // 告诉服务器在哪个 URL 上提供 static.directory 的内容
        }
    },

    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'dist'),
        clean: true
    }
}

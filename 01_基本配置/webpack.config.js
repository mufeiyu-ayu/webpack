const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { resolve } = require('path')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    // devtool: 'inline-source-map', // 讲打包的映射存放在bundle.js中， source-map则单独新建一个文件存放代码的映射，但是也包含了第三方模块错误的映射
    devtool: 'eval-cheap-module-source-map',
    // cheap-module-source-map 在生产环境中使用
    devServer: {
        hot: true, // 热模块更新
        static: {
            directory: resolve(__dirname, 'src')
            // publicPath: '/serve-ayu-jiajia' // 告诉服务器在哪个 URL 上提供 static.directory 的内容
        },
        client: {
            overlay: false // 报错不覆盖全屏 （默认为true）cls
        },
        // port: 3000 // 指定监听的端口号
        proxy: {
            /*
              通过此代理。当给/api开头的接口发请求时，会先让代理服务器向目标服务器（'http://localhost:4000+接口'）发请求，然后拿到响应后返回给客户端8080
             */
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true
                // 当是https的时候需要额外加这一条配置项
                // secure: false,
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader' // 需要单独配置postcss.config.js
                    /*  集中处理
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                        }
                    } */
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024 * 400 // 大于300kb则转化为单独的文件，否则转化到打包的js文件中用base64位编码存储
                    }
                },
                generator: {
                    filename: 'images/[name][ext][query]' // 打包的文件名称，如果是base64编码形式，则自动忽略
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'learn webpack' }),
        new webpack.HotModuleReplacementPlugin() // 热更新配置
    ],
    output: {
        filename: 'bunlde.js',
        path: resolve(__dirname, 'dist'),
        clean: true
    }
}

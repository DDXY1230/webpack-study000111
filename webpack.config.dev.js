const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 自定义创建的名字
            template: './src/index.html' // 根据自定义模版创建
        })
    ],
    devServer: {
        open: true, // 让浏览器自动给你打开一些端口,
        port: 9000 // 自定义打开端口
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        // {
        //     test: /\.(jpeg|jpg|png|gif)$/,
        //     use:['file-loader']
        // },
        {
            test: /\.(jpeg|jpg|png|gif)$/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 10000 // 超过就会被打包，不然就是base64
                }
            }]// 会把图片编码成base64
        },
        {
            test: /\.(ttf|woff|woff2|eot|svg|otf)$/,
            use:['file-loader']
        }
    ]
    }
    // 以下未跑通
    // module: {
    //     rules: [{
    //         test: /\.js$/,
    //         use: [{
    //             loader: 'babel-loader',
    //             options: {
    //                 presets: ['react']
    //             }
    //         }]
    //     }]
    // }
}
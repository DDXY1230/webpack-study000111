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
            filename: 'index.html',// 自定义创建的名字
            template: './src/index.html'// 根据自定义模版创建
        })
    ],
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
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main_dev.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'aac.html',// 自定义创建的名字
            template: './src/index.html'// 根据自定义模版创建
        })
    ]
}
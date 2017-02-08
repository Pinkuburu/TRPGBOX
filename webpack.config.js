var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname+"/dist/js",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style','css-loader')
        }, {
            test:/\.scss$/,
            loader:ExtractTextPlugin.extract('style','css-loader!sass-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin("./dist/css/index.css") //提取出来的样式放在style.css文件中
    ]
}
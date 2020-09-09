const path =require('path')
// 这里导入html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
 // 单入口
module.exports={
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'./build'),
    filename:'main.js'
  },
  // 开发模式
  mode:'development',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[miniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({ // plugin的使用，先new一下
      template:'./src/index.html', // 模板文件
      filename:'index.html' //倒出的文件名
    }),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
        filename:'css/index.css'
    })
  ]
}
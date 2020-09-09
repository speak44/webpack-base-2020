const path = require('path')
// 多入口
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  entry:{
    index:'./src/index.js',
    login:'./src/login.js'
  },
  output:{
    path:path.resolve(__dirname, 'ohh'),
    filename:'[name].js'
  },
  mode:'development',
  module:{ // 模块
    rules:[ // 规则
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"] //从右到左解析
      },
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./src/index.html', // 以那个文件为模版
      filename:'ohh.html' // 生成的模板叫什么
    })
  ]
}






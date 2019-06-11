let path = require('path')
let webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js', //打包之后生成的文件名。
    library: 'widget', // 指定类库名（全局的）
    libraryExport: "default",
    globalObject: 'this', // 兼容不同环境获取全局对象（node/浏览器）
    libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
  },
  mode: "production", 
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader",
    }]
  }
}
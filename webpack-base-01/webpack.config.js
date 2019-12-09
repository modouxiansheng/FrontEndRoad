const HtmlWebpackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成index页面的插件
const path = require('path')

// 创建一个插件的实例对象
const htmlplugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'), // 源文件
    filename: 'index.html'
})

// 向外暴露一个打包的配置对象
module.exports = {
    mode: 'development',
    plugins:[
        htmlplugin
    ],
    module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
    }
    
}
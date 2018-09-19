var webpack = require('webpack');
//html与编译的js合并
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  entry:__dirname+"/src/scripts/app.js",
  output:{
    path:__dirname+"/build/",
    filename:"scripts/[name]-[hash].js"
  },
  plugins: [
    //html与编译的js合并配置
     new HtmlWebpackPlugin({
       filename:'index.html',
       template:__dirname+"/src/index.html"
     })
   ],

   //配置别名
   // resolve:{
   //   extensions:['','.js','.css','.scss'],
   // }

   module:{
     loaders:[{
       test:/\
     }]
   }
}

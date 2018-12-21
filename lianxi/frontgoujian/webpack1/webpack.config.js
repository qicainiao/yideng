var webpack = require('webpack');
//html与编译的js合并
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const cleanWebpackPlugin = require('clean-webpack-pligin');

module.exports={
  entry:__dirname+"/src/scripts/app.js",  // //入口文件，__dirname指向当前执行脚本所在的目录。
  output:{
    path:__dirname+"/build/", //打包文件的路径
    filename:"scripts/[name]-[hash].js"
    //可以写死bundle.js我们最后打包生成的都是bundle.js文件。
    //其实为了保证文件每一次的版本变化，我们可以为其加上hash值。
    //做法很简单，只需在webpack-config.js文件中对output进行改造即可[name]-[hash].js

    //按照hash打包我们会发现一些问题。添加了hash之后，会导致改变文件内容后重新打包时，文件名不同而内容越来越多，这并不友好，因此我们可以使用插件
    //clean-webpack-plugin来解决这个问题。插件的使用方法也很简单，首先使用npm安装插件，然后在webpack-config.js文件中进行插件的配置即可。配置如下：
  },
  // plugins: [
  //   new cleanWebpackPlugin("build/scripts/*.js"),
  //   //html与编译的js合并配置
  //    new HtmlWebpackPlugin({
  //      filename:'index.html',
  //      template:__dirname+"/src/index.html"
  //    })
  //  ]

   //配置别名
   // resolve:{
   //   extensions:['','.js','.css','.scss'],
   // }

}

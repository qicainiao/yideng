var webpack = require('webpack');
var cleanWebpackPlugin = require('clean-webpack-pligin');

console.log("__dirname===>",__dirname);
module.exports={
  entry:__dirname+"/src/scripts/app.js",
  output:{
    path:__dirname+"/build/",
    filename:"scripts/[name]-[hash].js"
  },
  plugins:[
    new cleanWebpackPlugin('build/scripts/*.js')
  ]
}

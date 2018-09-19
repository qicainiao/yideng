var path = require("path");
module.exports={
  entry:{
    'index':'./src/scripts/index.es'
  },
  output:{
    path:path.join(__dirname,'./src'),
    publicPath
  }
}

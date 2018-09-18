var http = require("http")

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plan'});
  res.end('Hello World!\n');
}).listen(8000);
console.log('server is running....');

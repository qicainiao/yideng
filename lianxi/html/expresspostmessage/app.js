var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/iframe.html', function (req, res) {
  res.sendFile('Hello World!');  //写index不需要加index.html  写别的文件需要加上http://localhost:3000/iframe.html
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

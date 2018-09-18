var express = require('express');
var swig = require('swig')
var mysql = require('mysql')
var app = express();

app.set('view engine', 'html')
app.engine('html', swig.renderFile);

app.use(express.static('public'));

var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'lizhijuan'});

app.get('/', function(req, res, next) {
  res.render('index', {
    title: '我是标题',
    content: '我是body'
  })
})

app.get('/receive', function(req, res, next) {
  console.log("query值：", req.query);
  var post = {
    name: req.query.username
  }

  var query = connection.query('INSERT INTO user SET?', post, function(err, result) {
    console.log("err,result===>", err, result);
    if (err) {
      res.send('插入失败')
    }else {
      // res.json({success: 'ok', message: '插入成功'})
      res.render('receive', {
        title: '我是标题',
        content: '插入成功'
      })
    }

  })
  // connection.end();
})

//容错机制
app.get("*", function(req, res, next) {
  res.status(404);
  res.end('404')
})

app.use(function(err, req, res, next) {
  res.status(500);
  res.ens('error...');
});

app.listen(3000, function() {
  console.log("接口已启动...");
})

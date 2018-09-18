var express = require("express");
var swig = require('swig');
var app = express();

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static('public'));

app.get("/index", function(req, res, next) {
  res.render('index', {
      title: '测试首页',
      data: 'Hello Express'
  });
});
app.listen(3000, function() {
    console.log('接口已启动...');
});

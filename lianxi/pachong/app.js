var express = require('express');
const cheerio = require('cheerio')
var app = express();

var request = require('request')
app.get('/', function(req, res) {
  request('http://www.jikexueyuan.com/', function(error, response, body) {
    console.log(error, response);
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body)//直接拿到元素选择器
      // console.log('body:', body);
      res.json({
        'class':$('.aside-allCategory li').length
      })
    }

  });
});
app.listen(3000)

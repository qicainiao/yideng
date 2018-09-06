var express = require('express');
var request = require('request')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://www.jikexueyuan.com/', function (error, response, body) {
    if (!error&&response.statusCode==200) {
      console.log('body:', body);
    }
     res.send('Hello')
});
});

module.exports = router;

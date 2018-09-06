var express      = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');

var app = express()
app.use(cookieParser())

app.get('/', function(req, res,next) {
    console.log("Cookies: " + util.inspect(req.cookies));
  next();
},function(req,res,next){
    //res.send('输出东西');如果这里提前send 吐给用户数据，再next可以执行node的其他操作，但是不能再给用户吐数据了
  next();  //next()可以继续执行其他操作。
},function(req,res,next){
  res.send('输出东西');
  res.end();
})


var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', cb0, cb1, cb2);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


app.listen(8081)

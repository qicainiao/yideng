//1基本使用
new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("问题解决了")
    },1000)
}).then((value) => {
  console.log(value);
})


//Promise的构造函数接收一个参数，是函数，并且传入两个参数：resolve，reject，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数

function runAsync(callback){
   setTimeout(function(){
     callback("问题解决了");
   },1000);
}
runAsync(function(value){
    console.log(value);
})

//这样写一样的效果，为啥还用Promise呢？多层回调怎么办？如果callback也是一个异步操作，执行完也需要相应的回调函数怎么办？
//Promise的优势在于可以在then方法中继续写

function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}

runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return '直接返回数据';  //这里直接返回数据
})
.then(function(data){
    console.log(data);
});

Promise.all([runAsync1(),runAsync2(),runAsync3()]).then((value) => {
  console.log(value);
})  //runAsync1(),runAsync2(),runAsync3() 有括号的执行函数

//执行结果
// 异步任务1执行完成
// VM5791:15 异步任务2执行完成
// VM5791:25 异步任务3执行完成
// VM6222:2 (3) ["随便什么数据1", "随便什么数据2", "随便什么数据3"]

//all方法的效果实际上是「谁跑的慢，以谁为准执行回调」

//相对的另外一个方法【谁跑的快，以谁为准执行回调】 race
Promise.race([runAsync1(),runAsync2(),runAsync3()]).then((value) => {
  console.log(value);
})
//执行结果
//异步任务1执行完成
// VM6172:2 随便什么数据1
// VM5791:15 异步任务2执行完成
// VM5791:25 异步任务3执行完成


//race使用场景
//这个race有什么用呢？使用场景还是很多的，比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作，代码如下：

function requestImg(){
  var p = new Promise(function(resolve,reject){
    var img = new Image();
    img.onload= function(){
      resolve(img);
    }
    img.src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1488861817,1113726833&fm=202";
  });
   return p;
}


function timeout(){
  var p = new Promise(function(resolve,reject){
     setTimeout(function(){
       reject("图片请求超时");
     },5000);
  });
  return p;
}

Promise.race([requestImg(),timeout()]).then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
})

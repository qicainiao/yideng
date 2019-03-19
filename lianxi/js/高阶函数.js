//把函数当做参数或者返回值的函数就是高阶函数
//函数式编程 确定的输入肯定有确定的输出

function add(a,b){
  return a+b;
}
function withLog(fn){
  function wrapper(a,b){
     const result = fn(a,b);
     console.log(result);
     return result;
  }
  return wrapper;
}

const withLogAdd= withLog(add);
withLogAdd(1,2);

//回调函数
[1,2,3,4].forEach((item)=>{
  console.log(item);
})

//闭包
function makeCounter(init){
  var init = init||0;
   return function(){
     return init++;
   }
}

var counter = new makeCounter(10);
counter();
counter();

//柯力化
function isType(type){
   return function(obj){
     return Object.prototype.toString.call(obj) ===`[object ${type}]`
   }
}

var isNumber = isType('Number');
console.log(isNumber(1));

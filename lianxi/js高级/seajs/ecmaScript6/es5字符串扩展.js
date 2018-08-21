// 传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。
//
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
// let s = 'Hello world!';
//
// s.startsWith('Hello') // true
// s.endsWith('!') // true
// s.includes('o') // true
// 这三个方法都支持第二个参数，表示开始搜索的位置。
//
// let s = 'Hello world!';
//
// s.startsWith('world', 6) // true
// s.endsWith('Hello', 5) // true
// s.includes('Hello', 6) // false
// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

//用es5去实现
//简单一个参数的实现
function addMethod(obj,name, fn) {
   var old = obj[name];
   obj[name] = function() {
      if (fn.length===arguments.length) {
        return fn.apply(this,arguments);
      }else if(typeof fn =='function'){
        return old.apply(this,arguments);
      }
   }
   return obj[name] ;
}
//
// var people=[];
// addMethod(people,'find',function(){
//   console.log(0);
// })
// addMethod(people,'find',function(a){
//   console.log(a);
// })
// people.find();
// people.find(1);

var array=[]
addMethod(array,'sub0',function(){
  return 0;
})
addMethod(array,'sub0',function(prefix){
  console.log("prefix===>",prefix);
  return prefix[0];
})
array.sub0([1,2,3,5])  //这里是array对象拥有了sub0这样的方法，而不是Array，是继承

// 区别于方法直接作用于原型上
//例子  String的 startsWith 实现
function addstartsWithToString(){
   if (typeof String.prototype.startsWith1 != 'function' ) {
     String.prototype.startsWith1 = function(subString){
       return this.slice(0,subString.length)==subString
     }
   }
}

addstartsWithToString();
'120000'.startsWith1('1')

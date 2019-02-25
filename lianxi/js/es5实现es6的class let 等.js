//es6 class 创建对象用es5实现
//1最简单的对象字面量和Object构造函数
  var person = new Object();
  person.age=20;
  person.name="lili";
  person.code=function(){
    console.log("Hello World");
  }

 var person = {
   age:20,
   name:'lili',
   code:function(){
     console.log("Hello World");
   }
 }


 //2 工厂模式
 function createPerson(age,name){
   var o=new Object();
   o.age=age;
   o.name=name;
   o.code = function(){
     console.log("Hello world!");
   }
   return o;
 }


var person1 = new createPerson(10,"大米");
var person2 = new createPerson(21,"小米");




//es6语法糖的提现

function test(){
  this.a=20;
}

test.prototype.a=30;

console.log((new test()).a);  //20

class demo{
  constructor(){
    this.a=2
  }
}

demo.prototype.a=3;
(new demo()).a

//2

class test{
  a(){
    console.log(2);
  }
}
test.prototype.a=function(){
  console.log(3);
}
(new test()).a()


//打印结果
// ƒ (){
//   console.log(3);
// }


function demo(){
  this.a=function () {
    console.log(2);
  }
}

demo.prototype.a=function(){
  console.log(3);
}
(new demo()).a()

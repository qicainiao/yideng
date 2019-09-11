// •apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；

 

// •apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；

 

// •apply 、 call 、bind 三者都可以利用后续参数传参；

 

// •bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。
//基本用法

function add(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

var a1 = add.apply(sub,[4,2]);
var a2 = sub.apply(add,[4,2]);


function add (x, y) 
{ 
    console.log (x + y);
} 
function minus (x, y) 
{ 
    console.log (x - y); 
} 
add.call (minus , 1, 1);    //2
add.bind (minus , 1, 1); 

//这个例子中的意思就是用 add 来替换 minus ，add.call(minus ,1,1) == add(1,1) ，
//所以运行结果为：console.log (2); // 注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。
//A.call( B,x,y )：就是把A的函数放到B中运行，x 和 y 是A方法的参数。

//实现继承
function Animal(name){
   this.name = name;
   this.showName = function(){
     console.log(this.name);
   }
}

function Cat(name){
  // Animal.apply(this,[name])
  Animal.call(this,name);
}

var cat = new Cat("咕咕");
cat.showName();


//多重继承
function Class10(){
  this.showSub = function(a,b){
    console.log(a-b);
  }
}

function Class11(){
  this.showAdd = function(a,b){
    console.log(a+b);
  }
}

function Class12(){
  Class10.apply(this);
  Class11.apply(this);
}


var c2= new Class12();
c2.showAdd(3,1);

Function.prototype.mycall = function(context){
   if(typeof this !== 'function'){
      throw new TypeError('Error')
   }

   context = context || window
   context.fn = this
   const args = [...arguments].slice(1)
   const result = context.fn(...args)
   delete context.fn
   return result
}

//如果function里面自带fn会被覆盖，所以选择Symbol

Function.prototype.mycall= function(context){
  if(typeof this != 'function'){
    return new ErrorType('Error')
  }
  const fn = Symbol()
  context[fn] = this;
  const args = Array.prototype.slice.call(arguments,1);
  const result = context[fn](...args)
  delete context[fn]
  return result
}

//以上就是实现 call 的思路，apply 的实现也类似，区别在于对参数的处理，所以就不一一分析思路了

Function.prototype.myApply = function(context){
   if(typeof this!='function'){
      return new TypeError("Error")
   }
   const fn = Symbol()
   context[fn] = this;
   let result;
   if(arguments[1]){
    result = context[fn](...arguments[1])
   }else{
    result = context[fn]()
   }
   delete context[fn]
   return result
}

Function.prototype.myBind= function(context){
  if(typeof this !== 'function'){
    throw new TypeError('Error')
  }
  const _this = this;
  const args=[...arguments].slice(1)
  return function F(){
    if(this instanceof F){
      return new _this(...args,...arguments)
    }
    return _this.apply(context,args.concat(...arguments))
  }
}

//bind 和call很相似，第一个参数是this的指向，从第二个参数开始是接收的参数列表。
//区别在于bind方法返回值是函数以及bind接收的参数列表的使用

//bind返回的是函数
var obj = {
  name: 'Dot'
}

function printName() {
  console.log(this.name)
}

var dot = printName.bind(obj)
console.log(dot) // function () { … }
dot()  // Dot

//bind方式不会立即执行，而是返回一个改变了上下文this后的函数。而原函数printName中
//this并没有被改变，依旧是指向全局window

//参数的使用
//https://www.jianshu.com/p/bc541afad6ee


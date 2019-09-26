var value= 'v in window';
function func (){
  console.log(this.value)
}

var obj = {
  value: 'v in obj'
}

func();
var newFunc = func.bind(obj);
newFunc();


var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

//讲的太好了
//https://github.com/mqyqingfeng/Blog/issues/12
// 返回了一个函数
var bindFoo = bar.bind(foo);

bindFoo(); // 1
// 第一版
Function.prototype.bind2 = function (context) {
    var self = this;
    return function () {
        return self.apply(context);
    }

}

函数需要传 name 和 age 两个参数，竟然还可以在 bind 的时候，只传一个 name，在执行返回的函数的时候，再传另一个参数 age!

这可咋办？不急，我们用 arguments 进行处理：

// 第二版
Function.prototype.bind2 = function (context) {

    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }

}

构造函数效果的模拟实现
完成了这两点，最难的部分到啦！因为 bind 还有一个特点，就是

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
注意：尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。


Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fBound.prototype = this.prototype;
    return fBound;
}


构造函数效果的优化实现
但是在这个写法中，我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：

// 第四版
Function.prototype.bind2 = function (context) {

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

最终代码
所以最最后的代码就是：

Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18');
// 1
// daisy
// 18





//bind 1 改变原函数this指向，即绑定上下文，返回原函数的拷贝
//2 当绑定函数被调用时，bind的额外参数将置于实参之前，
//传递给被绑定的方法
// 3 注意 一个绑定函数也能使用new操作符创建对象，
//这种行为就像把原函数当做构造器，thisArg参数无效。也就是
//new 操作符修改this指向的优先级最高

//超级好的文章 https://blog.csdn.net/q3254421/article/details/82999718


Function.prototype.myBind = function(){
  if(typeof this !=='function'){
    return new ErrorType('Error')
  }
  var _self = this;
  var construtor = Array.prototype.shift.call(arguments)
  var args = Array.prototype.slice.call(arguments);
  console.log("construtor===",construtor)
  console.log("args===",args)
  return function(){
    return _self.apply(construtor,args.concat( Array.prototype.slice.call(arguments)))
  }
}

function foo(name){
  this.name = name
}
var obj={}

var tar = foo.myBind(obj)
tar('jack')
console.log(obj.name)

var alice = new tar('alice')
console.log(obj.name)
console.log(alice.name)




Function.prototype.myBind = function(){
  if(typeof this !=='function'){
    return new ErrorType('Error')
  }
  var _self = this;
  var construtor = Array.prototype.shift.call(arguments)
  var args = Array.prototype.slice.call(arguments);
  console.log("construtor===",construtor)
  console.log("args===",args)
  var fnBound = function () {
     // 检测 New
     // 如果当前函数的this指向的是构造函数中的this 则判定为new 操作
     var _this = this instanceof _self ? this : thisArg;
     return _self.apply(_this, args.concat(Array.prototype.slice.call(arguments)));
   }
   // 为了完成 new操作
   // 还需要做一件事情 执行原型 链接 （思考题，为什么？
   fnBound.prototype = this.prototype;
   return fnBound;
}

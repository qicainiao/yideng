//浅拷贝就是只复制了一层  深拷贝就是把一个对象中的属性,依次的,一个一个的复制到另一个对象中

//对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。
//当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。

//const a = []
//对于常量 a 来说，假设内存地址（指针）为 #001，那么在地址 #001 的位置存放了值 []，.
//常量 a 存放了地址（指针） #001，再看以下代码
//const a = []
//const b = a
//b.push(1)
//当我们将变量赋值给另外一个变量时，复制的是原本变量的地址（指针），
//也就是说当前变量 b 存放的地址（指针）也是 #001，
//当我们进行数据修改的时候，就会修改存放在地址（指针） #001 上的值，也就导致了两个变量的值都发生了改变。

let a = {
    age: 1
}
let b = a
a.age = 2
console.log(b.age) // 2

//这时候需要使用浅拷贝

//例子

var obj1={
    name:"风斯托罗斯基",
    age:20
  };

//方法一

var obj2={};
function extend(a,b) {
//把a对象中的东西,拷贝到b对象中
    for(var key in a){
        b[key]=a[key];
    }
}
extend(obj1,obj2);
console.dir(obj1);
console.dir(obj2);

//方法二
var obj3= Object.assign({},obj1);
console.dir(obj1);
console.dir(obj3);

//方法三

var obj4= {...obj1};
console.dir(obj1);
console.dir(obj4);



var obj1={
    name:"风斯托罗斯基",
    age:20,
    car:["奔驰","宝马","奥拓"],
    dog:{
      name:"哮天犬",
      age:2,
      color:"黑色"
    }
  };

//这时候需要深拷贝

//方法一
var obj2={};
function extend(a,b){
   for(key in obj1){
       var item = a[key];
       if(item instanceof Array){
          b[key]=[];
          extend(item,b[key])
       }else if(item instanceof Object){
          b[key] = {};
          extend(item,b[key]);
       } else {
           b[key] = item
       }
   }
}

extend(obj1,obj2);
console.dir(obj2);
console.dir(obj1);


//方法二
var obj3 = JSON.parse(JSON.stringify(obj1))

console.dir(obj3);
console.dir(obj1);

// 但是该方法也是有局限性的：

// 会忽略 undefined
// 会忽略 symbol
// 不能序列化函数
// 不能解决循环引用的对象

//方法三
function deepClone(obj) {
    function isObject(o) {
      return (typeof o === 'object' || typeof o === 'function') && o !== null
    }
  
    if (!isObject(obj)) {
      throw new Error('非对象')
    }
  
    let isArray = Array.isArray(obj)
    let newObj = isArray ? [...obj] : { ...obj }
    Reflect.ownKeys(newObj).forEach(key => {
      newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    })
  
    return newObj
  }
  
  let obj = {
    a: [1, 2, 3],
    b: {
      c: 2,
      d: 3
    }
  }
  let newObj = deepClone(obj)
  newObj.b.c = 1
  console.log(obj.b.c) // 2
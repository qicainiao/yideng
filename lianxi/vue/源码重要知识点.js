var o={};
Object。defineProperty(o,"a",{
  value:37,
  writable:true,//是否能重新分配
  enumerable:true,// enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
  configurable:true//configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改。
})


var bValue;
Object.defineProperty(o,"b",{
  get:function(){
    console.log("get---");
    return bValue;
  },

  set:function(newValue){
    console.log("set---");
    bValue= newValue;
  },
  enumerable:true,
  configurable:true
})
o。b=38;

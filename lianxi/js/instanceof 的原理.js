function People(name,age){
    this.name= name;
    this.age= age;
  }

  People.prototype.getAge= function(){
    return this.age+1
  }

  function EngLish(name,age,language){
    People.call(this,name,age); //这个时候call只是继承了父类里面的 this.name= name;和 this.age= age;但是父类的prototype并没有继承
    this.language = language;
  }

  //call apply bind 1 只是改变this指向，
  //A.call( B,x,y )：就是把A的函数放到B中运行，x 和 y 是A方法的参数。

function myInstanceOf(left,right){
    if(left === null || left===undefined){
        return false
    }
   const prototype = right.prototype;
   const __proto__ = left.__proto__;
   while(true){
       if(prototype===__proto__){
         return true
       }
       __proto__ = left.__proto__
   }
}


function MathHandle(x,y){
    this.x=x;
    this.y =y
}

MathHandle.prototype.add = function(){
   return this.x+this.y
}

var m=new MathHandle(2,4)

m.add()
//6
MathHandle.prototype.constructor == MathHandle
//true
m.__proto__ === MathHandle.prototype
//true

class MathHandle2{
  constructor(x,y){
      this.x=x;
      this.y=y;
  }

  add(){
      return this.x+this.y
  }
}
var m2=new MathHandle2(2,4)
m2.add()
//6
MathHandle2.prototype.constructor == MathHandle2
//true
m2.__proto__ === MathHandle2.prototype
//true


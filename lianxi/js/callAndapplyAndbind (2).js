//基本用法

function add(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

var a1 = add.apply(sub,[4,2]);
var a2 = sub.apply(add,[4,2]);


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

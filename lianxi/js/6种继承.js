//1 原型链继承
function Person(name,age){
  this.name = name;
  this.age = age;
  this.play=[1,2,3]
  this.setName = function(){

  }
}

Person.prototype.setAge = function(){

}


function Student(price){
   this.price = price;
   this.setScore = function(){

   }
}

Student.prototype  = new Person();

//2 借用构造函数继承
  //在子类型构造函数中通用call()调用父类型构造函数

  function Person(name, age) {
    this.name = name,
    this.age = age,
    this.setName = function () {}
  }
  Person.prototype.setAge = function () {}
  function Student(name, age, price) {
    Person.call(this, name, age)  // 相当于: this.Person(name, age)
    /*this.name = name
    this.age = age*/
    this.price = price
  }
  var s1 = new Student('Tom', 20, 15000)

  //这种方式只是实现部分的继承，如果父类的原型还有方法和属性，子类是拿不到这些方法和属性的。


//3 原型链+借用构造函数的组合继承

function Person(name, age) {
    this.name = name,
    this.age = age,
    this.setAge = function () { }
}
Person.prototype.setAge = function () {
    console.log("111")
}
function Student(name, age, price) {
    Person.call(this,name,age)
    this.price = price
    this.setScore = function () { }
}
Student.prototype = new Person()
Student.prototype.constructor = Student//组合继承也是需要修复构造函数指向的
Student.prototype.sayHello = function () { }
var s1 = new Student('Tom', 20, 15000)
var s2 = new Student('Jack', 22, 14000)
console.log(s1)
console.log(s1.constructor) //Student
console.log(p1.constructor) //Person


// 4 组合继承优化1
function Person(name, age) {
    this.name = name,
        this.age = age,
        this.setAge = function () { }
}
Person.prototype.setAge = function () {
    console.log("111")
}
function Student(name, age, price) {
    Person.call(this, name, age)
    this.price = price
    this.setScore = function () { }
}
Student.prototype = Person.prototype
Student.prototype.sayHello = function () { }
var s1 = new Student('Tom', 20, 15000)
console.log(s1)

//5 组合继承优化2
function Person(name, age) {
    this.name = name,
    this.age = age
}
Person.prototype.setAge = function () {
    console.log("111")
}
function Student(name, age, price) {
    Person.call(this, name, age)
    this.price = price
    this.setScore = function () {}
}
Student.prototype = Object.create(Person.prototype)//核心代码
Student.prototype.constructor = Student//核心代码
var s1 = new Student('Tom', 20, 15000)
console.log(s1 instanceof Student, s1 instanceof Person) // true true
console.log(s1.constructor) //Student
console.log(s1)

//6 ES6中class 的继承

class Person {
    //调用类的构造方法
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //定义一般的方法
    showName() {
        console.log("调用父类的方法")
        console.log(this.name, this.age);
    }
}
let p1 = new  Person('kobe', 39)
console.log(p1)
//定义一个子类
class Student extends Person {
    constructor(name, age, salary) {
        super(name, age)//通过super调用父类的构造方法
        this.salary = salary
    }
    showName() {//在子类自身定义方法
        console.log("调用子类的方法")
        console.log(this.name, this.age, this.salary);
    }
}
let s1 = new Student('wade', 38, 1000000000)
console.log(s1)
s1.showName()


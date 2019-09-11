//symble 唯一标识

var a  = Symbol()

//添加描述
var stu = Symbol("学生")

//作为对象的属性
var obj ={
    name:'aa',
    [stu]:'A班级'
}

obj[stu] //'A班级'
obj['name'] //aa

for(var key in obj){console.log(key)}  //只有name

﻿
Reflect.ownKeys(obj)
// (2) ["name", Symbol(学生)]
// 0: "name"
// 1: Symbol(学生)
// length: 2
// __proto__: Array(0)
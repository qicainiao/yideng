// es7
// 1 includes
// 2 指数运算符 **
let arr = ['react', 'angular', 'vue'];
if (arr.includes('react'))
{
    console.log('react存在');
}
//在ES7中引入了指数运算符**，**具有与Math.pow(..)等效的计算结果
console.log(2**10);// 输出1024

//es8
// 1 async/await
// 2 Object.values()
// 3 Object.entries()

async function process(array){
  for await (let i of array){
    doSomething(i)
  }
}

const obj={a:1,b:2,c:3}
Object.values(obj)

for(let [key,value] of Object.entries(obj1)){
	console.log(`key: ${key} value:${value}`)
}


var v=1;
a={v:2,func(){console.log(this.v)}},
b={v:3,func:()=>console.log(this.v)}
a.func(); //2
b.func();//1
(a.func||b.func)() //1
(a.func&&b.func)() //1
setTimeout(a.func,0) //1
setTimeout(b.func(),0) //1

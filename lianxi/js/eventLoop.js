// console.log('script start')
//
// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end')
// }
// async1()
//
// setTimeout(function() {
//   console.log('setTimeout')
// }, 0)
//
// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function() {
//     console.log('promise1')
//   })
//   .then(function() {
//     console.log('promise2')
//   })
//
// console.log('script end')

//https://www.jianshu.com/p/deedcbf68880
setTimeout(()=>{
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

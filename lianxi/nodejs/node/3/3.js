const EventEmitter = require('events')
class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
myEmitter.on('event',()=>{
  console.log("触发了一个事件");
})

myEmitter.emit('event');
console.log("事件执行完毕！");

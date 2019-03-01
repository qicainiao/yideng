//工作中免不了异步回调，Promise Async/await .
 // fetch axios 都是运用了Promise。那么Promise是怎么实现的呢？

  const PENDING="pending"
  const RESOLVED="resolved"
  const REJECTED="rejected"

  function MyPromise(fn){
    const that = this;
    that.state=PENDING;
    that.value=null;
    that.resolvedCallbacks=[];
    that.rejectedCallbacks=[];

     function resolve(value){
       if (that.state==PENDING) {
          that.state=RESOLVED;
          that.value = value;
          that.resolvedCallbacks.map((item) => item(that.value))
       }
     }

     function reject(value) {
      if (that.state === PENDING) {
        that.state = REJECTED
        that.value = value
        that.rejectedCallbacks.map(cb => cb(that.value))
      }
    }

    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }



MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : r => {
          throw r
        }
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}

// 为了下文方便，我们顺便实现一个catch方法
MyPromise.prototype.catch = function(onRejected) {
  return that.then(null, onRejected)
}

new MyPromise(function(resolve, reject) {
  setTimeout(() => {
    reject(1)
  }, 0)
}).catch((value) => {
    console.log("结果2："+value);
})


//实现一个符合 Promise/A+ 规范的 Promise

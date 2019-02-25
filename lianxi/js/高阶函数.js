function add(a,b){
  return a+b;
}
function withLog(fn){
  function wrapper(a,b){
     const result = fn(a,b);
     console.log(result);
     return result;
  }
  return wrapper;
}

const withLogAdd= withLog(add);
withLogAdd(1,2);

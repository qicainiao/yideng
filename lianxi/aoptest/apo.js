function test() {
   var start;
   alert(2);
   var end;
   console.log(end-start);   //这种做法无耻。可能变量污染，需要跟所有代码都这么加
}

//统计一下当前所有函数谁耗时间最长，做优化


Function.prototype.before = function(fn){
   var _self = this;
   fn();
   _self.apply(this,arguments);
}


Function.prototype.after = function(fn){

}

test.before(function(){
  alert(1);
})

var Zepto = (function(){
  //这么一封装 防止全局污染。如果不封装，别的类库也有classList。那么就会被覆盖
  var undefined, key, $, classList,
   emptyArray = [],
   slice = emptyArray.slice,
   filter = emptyArray.filter,
   zepto={}

   zepto.init = function(selector, context){
      //函数内容
   }

  $ = function(selector, context){
    return zepto.init(selector,context)
  }

  return $

})

window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)

define(function(require,exports,module){
   var Vango = require('vango')
   exports.drawCircle = function(){
     var vango = new Vango(document.body,100,100)
     vango.circle(50,50,50,{
       fill:true,
       styles:{
         fillStyle:'red'
       }
     })
   }
})

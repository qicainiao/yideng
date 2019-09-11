//https://juejin.im/post/5ce3b2d451882533287a767f

function __const(data,value){
    window.data = value;
    Object.defineProperty(window,data,{
        enumerable:false,
        configurable:false,
        get:function(){
            return value
        },
        set: function(data){
           if(data !== value){
             throw new ErrorType("Assignment to constant variable")
           }else {
               return value
           }
        }
    })
}
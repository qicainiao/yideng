
      function foo(){
        console.log(this.a)
      }
      var a=1;
      foo()  //1

      const obj={
        a:42,
        foo:foo
      }

      obj.foo()  //42
      var s = obj.foo;
      s();
      

      var module = {
          x: 42,
          getX: function() {
            return this.x;
          }
       }

        var unboundGetX = module.getX;
        console.log(unboundGetX()); // The function gets invoked at the global scope
        // expected output: undefined

        var boundGetX = unboundGetX.bind(module);
        console.log(boundGetX());
        // expected output: 42


        function LateBloomer(){
            this.petalCount = Math.ceil(Math.random()*12)+1;
        }

        LateBloomer.prototype.bloom = function(){
            setTimeout(this.declare.bind(this),1000)
        }

        LateBloomer.prototype.declare = function(){
            console.log('I am a beautiful flower with ' +
            this.petalCount + ' petals!')
        }
        var flower = new LateBloomer();
        flower.bloom();
        


        Function.prototype.myBind = function(thisArg){
            if(typeof this != 'function'){
                return
            }
            var _self = this;
            var args = Array.prototype.slice.call(arguments,1)
            return function(){
              return _self.apply(thisArg,args.concat(Array.prototype.slice.call(arguments)))
            }
        }

        function foo(name) {
          this.name = name;
          }
          
          var obj = {}
          
          //上下文 功能  done
          var bar = foo.myBind(obj)
          bar('jack')
          console.log(obj.name) //'jack'
          
          // 参数 功能   done
          var tar = foo.myBind(obj, 'rose');
          tar()
          console.log(obj.name) //'rose'
          // new 功能   error
          var alice = new bar('alice')
          console.log(obj.name) //alice   obj name should be 'jack'
          console.log(alice.name) //undefined, alice name should be 'alice'

          

        Function.prototype.myBind = function(thisArg){
          if(typeof this != 'function'){
              return
          }
          var _self = this;
          var args = Array.prototype.slice.call(arguments,1)
          var fnBound = function(){
            var _this = this instanceof _self? this:thisArg
            return _self.apply(thisArg,args.concat(Array.prototype.slice.call(arguments)))
          }
         
          fnBound.prototype = this.prototype;
          return fnBound;
      }


      function _new() {
        // 创建一个新对象
          let newObj = {};  
          // 获取构造函数
          let Constructor = Array.prototype.shift.call(arguments);
          console.log("Constructor",Constructor)
          // 连接新对象原型，新对象可以访问原型中的属性
          newObj.__proto__ = Constructor.prototype;
          // 执行构造函数，即绑定 this，并且为这个新对象添加属性
          Constructor.apply(newObj, arguments);
          console.log("newObj",newObj)
          // 返回该对象
          return newObj;
      }

      function Person(name){
          this.name= name;
          console.log(this.name)
      }
      
      var person = _new(Person,"lili")


    function test3(name,age){
        console.log(arguments)
        [1,2,4].slice.call(arguments)
       // console.log(Array.prototype.slice.call(arguments))
    }
    test2("11","55")
      


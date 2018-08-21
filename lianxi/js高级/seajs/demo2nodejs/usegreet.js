var greet = require('./greet.js')
greet.helloJavaScript();

// node.js把JavaScript移植到了Server端的开发中，Node.js通过exports和require
// 实现了代码的模块化组织。在一个Node.js的模块文件中，我们可以使用exports
// 把对外的接口暴露出来，其他模块可以使用require函数加载其他文件，获得这些接口。
// 从而使用模块提供出来的功能，而不关心其实现。在npmjs.org上已经有上万的Node.js
// 开源模块了！

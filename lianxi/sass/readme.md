
//变量 less变量是@ sass变量是$
$highlight-color: #F90;  //全局变量

nav{
  $width:100px;
  width: $width;
  color: $highlight-color;  //块级作用域
}

//嵌套CSS规则
// css中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要 一遍又一遍地写同一个ID：
//
// #content article h1 { color: #333 }
// #content article p { margin-bottom: 1.4em }
// #content aside { background-color: #EEE }
// 像这种情况，sass可以让你只写一遍，且使样式可读性更高。在Sass中，你可以像俄罗斯套娃那样在规则块中嵌套规则块。sass在输出css时会帮你把这些嵌套规则处理好，避免你的重复书写。

#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}

//大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器 里边立刻应用一个类似于：hover的伪类。为了解决这种以及其他情况，sass提供了一个特殊结 构&。

// 父选择器的标识符&;


//群组选择器
.container {
  h1, h2, h3 {margin-bottom: .8em}
}

// //导入SASS文件
// css有一个特别不常用的特性，即@import规则，它允许在一个css文件中导入其他css文件。然而，后果是只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢。
//雅虎军规不建议这么做
//sass也有一个@import规则，但不同的是，sass的@import规则在生成css文件时就把相关文件导入进来。
//这意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求。另外，所有在被导入文件中定义的变量和混合器（参见2.5节）均可在导入文件中使用。
//sass做了优化


//混合
@mixin rounded-corners{
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}


//扩展与继承
.message{
  color:#333;
  padding:10px;
  border:1px solid #ccc;
}

.success{
  @extend .message;
  border-color:green;
}

.faile{
  @extend .message;
  border-color:red;
}

.warning{
  @extend .message;
  border-color:yellow;
}

//中文文档地址

let _ = require('lodash');

//_.chunk(Array,[size=1])将数组拆分多个size区块
let  array1= [1,2,3,4,5];
console.log(_.chunk(array1,2));  //=>[[1,2],[3,4],[5]]
console.log(_.chunk(array1,3));  //=>[[1,2,3],[4,5]]
console.log(array1); //不改变原数组

//_.compact(array) 创建一个新数组，创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
let  array2= [1,2,3,4,5];
array2[10] =10;
console.log('compact==>',_.compact(array2));//compact==> [ 1, 2, 3, 4, 5, 10 ]
console.log(array2);//[ 1, 2, 3, 4, 5, <5 empty items>, 10 ]

let  array3= ['',2,0,4,false];
console.log('compact==>',_.compact(array3));//compact==> [2,4]

//concat(array, [values])创建一个新数组，将Array与任何数组或值连接在一起
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log('other==>',other); //=> [1, 2, 3, [4]]

//difference创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
console.log("difference==>",_.difference(['a','b','c'],['a','b'])); //['c']
console.log("difference==>",_.difference([{a:1},{a:2},{a:3}],[{a:1}]));//[{a:1},{a:2},{a:3}]

console.log(_.isEmpty({}));

_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]

// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]

_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]


var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]

console.log(_.flattenDeep([{a:1}, [{a:2},[{a:3},[{a:4}]]]]));

_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});

console.log(_.groupBy(['one', 'two', 'three'], 'length'));

console.log(_.map([{ 'a': 4},{'a': 8 }], function(item,n){
  console.log(item,n);
   return item.a>4?item:null;
}));

  console.log(_.now());
  console.log(_.isEmpty([]));

  var object = { 'a': 1,b:{c:{f:10}} };
var other = { 'a': 1,b:{c:{f:0}} };

console.log(_.isEqual(object, other));
console.log("global==>",global);

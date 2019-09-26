//冒泡
function fn(array){
   for (var i = 0; i < array.length-1; i++) {
     for (var j = 0; j < array.length-i-1; j++) {
       var temp = array[j]
       if (array[j]>array[j+1]) {
         array[j] = array[j+1]
         array[j+1] = temp
       }
     }
   }
   return array;
}


//
function quickSort(arr){
  if (arr.length<=1) {
    return arr;
  }
   let middleIndex = Math.floor(arr.length/2);
   console.log("middleIndex==>",middleIndex)
   let middleData = arr[middleIndex]
   let left=[],right=[]
   arr.splice(middleIndex,1)
   console.log("arr==>",arr)
   for (var i = 0; i < arr.length; i++) {
     if (arr[i]>=middleData) {
       right.push(arr[i])
     }else {
       left.push(arr[i])
     }
   }
   console.log("left==>",left)
      console.log("right==>",right)
   return quickSort(left).concat(middleData,quickSort(right))
}


//台阶递归 100的话运超出时间限制
function f(m,n){
  console.log(m,n)
   if (n == 1) {
     return 1
   }
  if(n>m){
     var sum = 0;
     for (var i = 1; i <= m; i++) {
       sum+=f(m,n-i)
     }
     return sum
  }else {
    sum =1;
    for (var i = 0; i < n; i++) {
      sum+=f(m,i)
    }
    return sum
  }
}


//数组方式
function fn (m,n){
  var steps=[1,1];
  for(var i = 2; i <= n; i++){
    if(i <= m) {
      var sum = 1
      for (var j = 1; j < i; j++) {
        sum += steps[j]
      }
      steps[i] = sum
    } else {
      sum = 0
      for (var j = 1; j < m+1; j++) {
        sum += steps[i-j]
      }
      steps[i] = sum
    }
  }
  console.log(steps[n])
}

// ⽤js实现随机选取10–100之间的10个且不重复的数字，存⼊⼀个数
// 组。还要排序
function s(){
  let data = new Set()
  while (data.size<10) {
    data.add(Math.floor(10+Math.random()*90))
  }
  return [...data].sort((a,b)=>a-b)
}


var list =[{
  id:1,
  name:'li',
  trade:100
},{
  id:2,
  name:'hah',
  trade:200
}]
function f(list){
  var datas = new Map(),totalDatas = new Map;
  var total=0
  for (var i = 0; i < list.size; i++) {
      var
       jingli= list[i].trade* 0.1%
      if (!datas[list[i].id]) {
        datas[list[i].id]=0
      }
      if (datas[list[i].id] +jingli<10) {
          datas[list[i].id] +=jingli
        } else if (datas[list[i].id] +jingli>= 10 && totalDatas[list[i].id] < 50 && total < 200) {
          tmp = datas[list[i].id] +jingli+ totalDatas[list[i].id]
          totalJiangli= tmp < 50 && tmp + total < 200 ? datas[list[i].id] +jingli
            :(tmp < 50 ? datas[list[i].id] +jingli+ 200 - tmp - total : datas[list[i].id] +jingli+ 50 - tmp)
         // 输出实际发放奖励
          if (!totalDatas[list[i].id]) {
            totalDatas[list[i].id]=0
          }
          totalDatas[list[i].id] +=  totalJiangli
          total +=  totalJiangli
      }
  }
  for (var i = 0; i < list.size; i++) {
    console.log("输出每个用户获得的总奖励", totalDatas[list[i].id])
  }
}


// function f(m,n){
//    let steps=[1,1]
//    for (var i = 2; i <= n; i++) {
//      if (m>=i) {
//        let sum =1
//        for (var j =1; j <i; j++) {
//          sum+=steps[j]
//        }
//        steps[i]=sum
//      }else {
//        let sum =0
//        for (var j = i-m; j < i; j++) {
//          sum+=steps[j]
//        }
//        steps[i]=sum
//      }
//    }
// }

//泡解json的层级
var obj = {'a':{'b':'2','c':1},'d':{'e':0},f:{'g':2,'h':5}}
function fn(obj,array){
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }
  let keyValues = Reflect.ownKeys(obj);
  if (keyValues.length==0) {
    console.log("keyValues.length==0===>",array)
    return array
  }
  array.push(keyValues)
  var newObj = {}
  keyValues.forEach((item)=>{
    if (isObject(obj[item])) {
        newObj={...newObj,...obj[item]}
    }
  })
    console.log("array===>",array)
    return fn(newObj,array)
}

fn(obj,[])

function s(arr){
  arr.push("s")
  return arr
}
console.log(s())

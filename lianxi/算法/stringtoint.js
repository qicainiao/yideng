function stringToInt(str){
   if(typeof str !='string' || str.length==0){
      throw new ErrorType('请输入正确字符串')
    }

   var result=0;
   for (let i = 0; i < str.length; i++) {
    if (i==0) {
      if(str.charAt(i) == '-' ){
        continue;
      }
    }else{
      if(str.charAt(i)>'9' || str.charAt(i)<'0'){
        throw new ErrorType("字符串格式错误");
      }
    }
    result = result * 10;
    result = ( result + str.charAt(i)*1 ) ;
    console.log("每一次累加结果："+typeof result+' '+result);
  }
  return str.charAt(0) == '-' ? 0-result:result;
}

stringToInt('5555')
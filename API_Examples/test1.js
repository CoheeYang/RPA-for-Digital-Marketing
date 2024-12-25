function unique (arr) {
    return Array.from(new Set(arr))
  }
  var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
  console.log(unique(arr))
   //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
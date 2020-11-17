let arr = [3,10,5,22,17,66,101,23,6];

//现在要进行排序
//升序排列 a-b ;降序排列 b-a
let sorted1=arr.sort((a,b)=>a-b);
console.log(sorted1);

let sorted2=arr.sort((a,b)=>b-a);
console.log(sorted2);
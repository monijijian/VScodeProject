console.log(NaN==NaN,null===null,undefined===undefined);
let arr=[0,1,2,3,4,5];
let res = arr.unshift(-1);
console.log(arr,res);
let arr1 =[10,11,12];
arr.push(...arr1);
console.log(...arr);
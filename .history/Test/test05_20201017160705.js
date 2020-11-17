console.log(NaN==NaN,null===null,undefined===undefined);
let arr=[0,1,2,3,4,5];
let res = arr.unshift(-1);
console.log(arr,res);
let arr1 =[10,11,12];
arr.push(...arr1);
console.log(...arr);

new Promise((res,rej)=>{
    console.log('Promise中的语句');
    res(10);
}).then((msg)=>{
    console.log('msg : ',msg);
})

console.log('我是外面的语句');
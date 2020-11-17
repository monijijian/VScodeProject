//js中的几种循环

//for循环,  缺点：需要计时器和退出条件
let arr = [1,2,3,4,5,9];
for(let i=0;i<arr.length;i++){
    //console.log(arr[i]);
}

//for in循环   缺点：需要使用index访问数组的值，像数组中添东西会影响循环
for(let i in arr){
    //console.log(arr[i]);
}

//for of循环
for(let i of arr){
    //console.log(i);
}

for(let i of arr){
    if(i%4 === 0){
        continue;
    }
    console.log(i);
}
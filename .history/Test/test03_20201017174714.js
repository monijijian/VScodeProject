function ff(a1,a2){
    var arr1 = a1;
    var arr2 = a2;

    var res = [];

    res = arr1.concat(arr2);
    res = res.sort();

    return res;
}

console.log(ff([1,2,4],[1,3,4]));

let arr = [1,2,3,4,5,6]
let max=0;
for(let i of arr){
    for(let j of arr){
        if(i==j){
            continue;
        }else{
           max<i*j?max=i*j:max=max;
        }
    }
}
console.log(max);

let str = 'wzzc';
for(let i of str){
    console.log(i,typeof i);
}
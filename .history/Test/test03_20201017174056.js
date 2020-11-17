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
for(let i of arr){
    console.log('i =  ', i)
    for(let j of arr){
        if(i==j){
            continue;
        }else{
            console.log('j = ',j);
        }
    }
}
//双重循环去重
function foo1(arr){
    let res=[];
    for(let i of arr){
        let flag=true;
        for(let j of res){
            if(i===j){
                flag=false;
            }
        }
        if(flag){
            res.push(i);
        }
    }
    return res;
}

function foo2(arr){
    let res=[];
    arr.forEach(element => {
        if(res.indexOf(element)==-1){
            res.push(element);
        }
    });
    return res;
}

let arr=[1,2,3,2,4,5,7,5,4,3];
console.log(`foo1: ${foo1(arr)}  foo2: ${foo2(arr)}`);
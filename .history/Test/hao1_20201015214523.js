function foo1(arr){
    let resArr=[...new Set(arr)];

    for(let i of resArr){
        let count=0;
        for(let j of arr){
            if(i==j)count++;
            if(count>Math.floor(arr.length/2)){
                return j;
            }
        }
    }
    return 0;
}

let arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(foo1(arr));

function foo2(arr){
    let resArr=[...arr.sort((a,b)=>a-b)];
    console.log(resArr);
    let resList=[];

    for(let i in resArr){
        if(resArr[i]==resArr[i+1]){
            i++;
            console.log('afafsaf');
            break;
        }
        console.log(i+1, resArr[i] , resArr[(i + 1)]);
        resList.push(i);
    }
    console.log(resList);
}

let arr1=[1,1,2,4,7,6,3,7,6,4];
foo2(arr1);
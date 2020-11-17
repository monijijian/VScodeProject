function foo1(arr){
    let resArr=[...new Set(arr)];
    console.log(resArr);

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
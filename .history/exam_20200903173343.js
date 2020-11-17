arr1 = [23,40];
arr2 = [1,3,5]
function ap(arr1,arr2){
    for(it in arr1){
        arr1.push(it);
        
    }
    console.log(JSON.stringify(arr1))
    arr3 = arr1.splice(arr1.length-3,1);
    return arr1;

}
console.log(ap(arr1,arr2));
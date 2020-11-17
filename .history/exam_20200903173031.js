arr1 = [23,40];
arr2 = [1,3]
function ap(arr1,arr2){
    for(it in arr1){
        arr1.push(it);
    }
    arr3 = arr1.splice(arr1.length-1,1);
    return arr1;

}
alert(ap(arr1,arr2));
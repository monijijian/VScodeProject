function ff(a1,a2){
    var arr1 = a1;
    var arr2 = a2;

    var res = [];

    res = arr1.concat(arr2);
    res = res.sort();

    return res;
}

console.log(ff([1,2,4],[1,3,4]));

getname();
var getname = function () {
    console.log('fafa');
}
getname();
var getname = function () {
    console.log('qaqa');
}
getname();
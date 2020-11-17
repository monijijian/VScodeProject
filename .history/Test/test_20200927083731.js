function ff(a, b, c) {

    var num = 0;

    var arr = [a, b, c];
    arr.sort((a, b) => { return a - b; });

    var max = arr[2];
    var mid = arr[1];
    var min = arr[0];

    max -= min;
    mid -= min;

    num += min;

    if (mid == 0) {
        num += parseInt(max / 4);
    } else if (max - mid <= 1) {
        num += mid - 1;
    } else {
        var flag = parseInt((max - mid) / 2);
        max = max - flag * 2;
        num += ff(max - mid, mid, flag);
    }



    console.log(num);
    return num;

}

//ff(1, 3, 9);

function a(x){
    var flag = 4;
    function b(y){
        console.log(++x+y+(flag--));
    }
    b(5);
}
a(7);

var te = 5;
console.log(`--te ${--te}   te ${te}   te-- ${te--}`);//和java一样，自增自减符号在后面就后计算
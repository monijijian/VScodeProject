function ff(a,b,c){

    var num = 0;

    var arr = [a,b,c];
    arr.sort((a,b)=>{return a-b; });

    var max = arr[2];
    var mid = arr[1];
    var min = arr[0];

    num += min;
    num += parseInt((max-mid)/2);
    console.log(num);
    return num;
}

ff(4,4,2)
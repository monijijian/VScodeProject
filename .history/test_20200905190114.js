function ff(a,b,c){

    var num = 0;

    var arr = [a,b,c];
    arr.sort((a,b)=>{return a-b; });

    var max = arr[2];
    var mid = arr[1];
    var min = arr[0];

    max -= min;
    mid -= min;
    
    num += min;

    if(mid == 0){
        num += parseInt() 
    }

    if(max-mid <= 1){
        num += mid - 1;
    }else{
        var flag = parseInt((max - mid)/2);
        max = max - flag*2;
        num += ff(max-mid,mid,flag);
    }

    console.log(num);
    return num;
    
}

ff(9,3,3);
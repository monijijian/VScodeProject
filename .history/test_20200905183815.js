function ff(a,b,c){
    var arr = [a,b,c];
    arr.sort((a,b)=>{return a-b; });
    console.log(JSON.stringify(arr));
}

ff(1,2,3)
function ff(t,xa){

    var res =0;

    var x = [];
    x.length = xa.length/2;
    var a = [];
    a.length = xa.length/2;

    var xnum = 0;
    var anum = 0;

    for(var i =0;i < xa.length;i++){
        if((i)%2 == 0){
            x[xnum] = xa[i];
            xnum++;
        }else{
            a[anum] = xa[i]/2;
            anum++;
        }
    }

    

    // for(var i = 0; i< x.length;i++){
    //     x[i] = x[i] - x[0];
    // }

    var space = [];

    for(var i=0;i<x.length-1;i++){
        space[i] = x[i+1] - a[i+1] - (x[i]+a[i]);
    }

    console.log('x:' + JSON.stringify(x) +' a:' + JSON.stringify(a));
    console.log('space:' +JSON.stringify(space) + 't:' +t);

    for(var i=0;i<space.length;i++){

        console.log('space[i]: '+ space[i] + 't:'+t);
        if(space[i] = t){
            res++;
        }else if(space[i] > t){
            console.log('fgshadjkgfdshjig');
            res = res + 2;
        }
    }
    return res;
}

console.log(ff(2,[-1,4,5,2]));
function a(){
    let global=0;

    b=function(){
        global++;
        console.log(global);
    }
    return b();
}

a();
a()
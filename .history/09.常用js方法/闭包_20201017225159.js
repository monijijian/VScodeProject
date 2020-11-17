function a(){
    let global=0;

    let b = function(){
        global++;
        console.log(global);
    }
    return b();
}

a();
a();
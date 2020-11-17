function a(){
    let global=0;

    function b(){
        global++;
        console.log(global);
    }
    return b();
}

a(),a();
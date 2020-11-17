function a(){
    let global=0;

    return function(){
        global++;
        console.log(global);
    };
}

console.log(a(),a(),a());
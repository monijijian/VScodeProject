function a(){
    let global=0;

    return (function (){
        global++;
        return global;
    })();
}

console.log(a(),a());
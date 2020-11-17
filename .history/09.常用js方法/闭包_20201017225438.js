function a(){
    let global=0;

    return (()=>{
        global++;
        console.log(global);
    })();
}

a();
a();
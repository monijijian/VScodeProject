function a(){
    let global=0;

    return function(){
        global++;
        console.log(global);
    };
}
let b=a();
console.log(b(),b(),b());
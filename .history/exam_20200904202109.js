function fn(n){
    let arr=['1'];
    let r1 = 0;
    // arr.push(1);
    console.log(typeof arr);
    const ff = (n) => {
        const a = Math.sqrt(n);
        for(let i = 0;i<a;i++){
            r1++;
        }
        if(r1 == a){
            arr.push(r1);
        }else{
            arr.push(r1-1);
            ff(n-(r1-1)*(r1-1));
        }

    }
    ff(n);
    console.log(arr);
}
fn(63);
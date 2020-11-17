function fn(n){
    let r1 = 0;
    const a = Math.sqrt(n);
    for(let i = 0;i<a;i++){
        r1++;
    }
    if(r1 == a) return r1;
    fn(n-(r1-1)(r1-1));
}
console.log(fn(63));
function fn(n){
    let r1 = 0;
    const a = Math.sqrt(n);
    for(let i = 0;i<a;i++){
        r1++;
    }
    if(r1 == a) return r1;
    console.log('n:'+n +'r1:'+r1+'a:'+a);
    fn(n-(r1-1)*(r1-1));
}
console.log(fn(63));
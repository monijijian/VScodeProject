function a(){
    let global=0;

    return ()=>global++;
}
let b= a();//将a中的箭头函数传给b，b = ()=>global++；用到了闭包
console.log(b(),b(),)
function a(){
    let global=0;

    return ()=>global++;
}
var b= a();//将a中的箭头函数传给b，b = ()=>global++；用到了闭包,无论调用多少次用的同一个a实例
console.log(b(),b(),)
var b = a();//重新赋值的话是新创建了一个a的实例，global也会跟着更新
console.log(b(), b(),)
console.log(b(), b(),)

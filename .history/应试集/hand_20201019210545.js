console.log(typeof a);
console.log(a);
var a;
a();
function a (){
    console.log(2);
}
a=3;
console.log(typeof a);
//考察变量声明提升，函数的优先级高于var。但当a赋值之后，a就确定了。

let i = function j (){
    return 1;
}
// console.log(j);
console.log(typeof j);
console.log(i());
console.log(typeof i);

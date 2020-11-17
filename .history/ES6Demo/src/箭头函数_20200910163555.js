//箭头函数

//箭头函数的的写法
function fn1(a,b){
    console.log('fn1');
    return a+b;
}
const fn2 = (a,b) => {
    console.log('fn2');
    return a+b;
}
//只有一个参数时，可以省略()
const fn3 = a =>{
    return a;
}
//只有一条语句时，可以把{}和return省略，写的是返回值
const fn4 = (a,b) => a+b;
const fn5 = a => a


//箭头函数的this指向
//ES6之前的普通函数中：this指向的是函数被调用的对象（谁调用了函数，谁就是this）
//而ES6中，箭头函数本身不绑定this，指向的是位置处的this
const obj = {name: 'xiaomi'};

function fn6(){
    console.log(this);//第一个this
    return ()=>{
        console.log(this);//第二个this
    }
}
const fn7 = fn6.call(obj);//call函数改变this指向，这行代码的意思是把fn6的this指向obj，并将新函数赋值给fn7
fn7();
//两个this都指向obj

//参数默认值       有值传入时用传入的值，没传入值时用默认值
//传统写法   ES6写法
function fn8(param){
    let p = param || 'hello';
    return p;
}
const fn9 = (param = 'hello') => {
    return param;
}

let x = 'xxlivexx';

const fn10 = (x,y=x)=>{
    console.log(x,y);
}
fn10('via');//打印结果是 via via  。48行的y=x里面的x是从近处到远处寻找x值，所以应该是()里面的x值
//如果再括号里面没有找到x的话，就会用46行的x

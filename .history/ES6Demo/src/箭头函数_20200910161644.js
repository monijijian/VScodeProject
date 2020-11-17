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

//参数默认值

//function 的简写，箭头函数与包围它的代码共享同一个this
const up1 = ['aaa','bbb'].map(function(name){
    return name.toUpperCase();
});//把字母变成大写，es6之前的写法

const up2 = ['aaa','bbb'].map(
    name  => name.toUpperCase()
);//箭头函数写法，简写的箭头函数后面不用加分号

console.log(`up1: ${up1} , up2 : ${up2}`);

let name = ['a','b','c','d']
const sayHi = (n)=>{
    let str = "";
    console.log(n);
    for(let i of n){
        str += `hello ${i}  !  `;
    }
    console.log(str);
}
sayHi(name);


//this指向问题

function IceCream() {
    this.scoops = 0;
}

// 为 IceCream 添加 addScoop 方法
IceCream.prototype.addScoop = function () {
    setTimeout(function () {
        this.scoops++;
        console.log('scoop added!');
        console.log(this.scoops); // undefined+1=NaN
        console.log(dessert.scoops); //0
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
//因为定时器方法被调用时没用到call apply new 也没上下文对象，意味着函数里的this是全局对象
//传统解决方法闭包

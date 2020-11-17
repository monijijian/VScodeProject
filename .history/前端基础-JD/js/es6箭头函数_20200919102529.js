//function 的简写，箭头函数与包围它的代码共享同一个this
const up1 = ['aaa','bbb'].map(function(name){
    return name.toUpperCase();
});//把字母变成大写，es6之前的写法

const up2 = ['aaa','bbb'].map(
    name  => name.toUpperCase()
);//箭头函数写法，简写的箭头函数后面不用加分号

console.log(`up1: ${up1} , up2 : ${up2}`);

let name = ['a','b','c','d']
const sayHi = (...n)=>{
    let str = "";
    for(const i of n){
        str += `hello ${i}`;
        console.log('i:  '+i)
    }
    console.log(str);
}
sayHi(name);
//初始或对象时，传入的变量名和属性名一致时可以简写
let name = 'echo';
let age = 21;

const pro1 = {name,age};

console.log(pro1);

const pro2 = {
    name,
    age,
    foo(){
        console.log('我是简写的方法');
    }
}
console.log(pro2,pro2.foo());
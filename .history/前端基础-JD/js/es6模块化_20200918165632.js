//模块的功能主要有export和import组成，每个模块都有单独的作用域
//export用来导出模块，可以是属性或者方法
const name = 'echo';
let age = 21;

export {name,age};

export function myModel(msg){
    return msg;
}

// import { name, age, myModel } from 'es6模块化';

// console('name : ' + name + 'age: ' + age + ' msg: ' + myModel(123));
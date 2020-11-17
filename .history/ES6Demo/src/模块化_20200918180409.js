//模块的功能主要有export和import组成，每个模块都有单独的作用域
//export用来导出模块，可以是属性或者方法
// const name = 'echo';
// let age = 21;

// export {name,age};

var name = 'echo';
exports.name = name;
var age = 16;
exports.age = age;
export function myModel(msg) {
    return msg;
}

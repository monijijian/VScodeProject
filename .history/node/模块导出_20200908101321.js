//模块引用：通过require方法来同步加载所依赖的模块
//模块定义：在node中，一个文件就是一个模块，通过exports对象导出当前模块的变量或者方法
//模块标识：标识传递给require方法的参数，可以是名字也可以是文件路径

function fn(){//封装了一个方法
    console.log('fn');
}

let st = {//一个对象
    name:'nane'
};

console.log(st.name);

module.exports = {st,fn}; // 模块的导出，把st对象和fn方法导出
exports.fn = funcf;//导出单独的函数
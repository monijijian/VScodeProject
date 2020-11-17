
function fn(){
    console.log('fn');
}

let st = {
    name:'nane'
};

console.log(st.name);

//module.exports = {st,fn}; // 模块的导出
exports.fn = fn;//导出单独的函数
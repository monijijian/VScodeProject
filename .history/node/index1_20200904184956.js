function fn(){
    console.log('fn');
}

let st = {
    name:'nane'
};

console.log(st.name);

//module.exports = {st,fn};
exports.fn = fn;//导出单独的函数
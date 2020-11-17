//剩余参数
const fn1 = (a,b,...args) => {
    console.log('a : ' + a + 'b : ' + b + '  args[0]: ' + args[0] + '  args[1]: ' + args[1] + '  args[2]: ' + args[2]);
}
fn1(1,2,3,4);
//多余的实参会以数组形式存储，， 注意...args后面就不能再加形参了，因为不确定数组里要存几个


//剩余参数举例:参数求和
const sum = (...args) => {
    let total = 0;
    args.forEach(item => total += item);
    return total;
};
console.log(sum(10,20,30,40));

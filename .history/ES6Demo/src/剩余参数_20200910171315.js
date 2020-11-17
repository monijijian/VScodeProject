//剩余参数
const fn1 = (a,b,...args) => {
    console.log('a : ' + a + 'b : ' + b + '  args[0]: ' + args[0] + '  args[1]: ' + args[1] + '  args[2]: ' + args[2]);
}
fn1(1,2,3,4);
//多余的实参会以数组形式存储，， 注意...args后面就不能再加形参了，因为不确定数组里要存几个



//剩余参数
const fn1 = (a,b,...args) => {
    console.log('a : ' + a + 'b : ' + b + 'args[0]: '+ args[0]);
}
fn1(1,2,3,4);

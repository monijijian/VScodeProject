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

//剩余参数 和 解构赋值 配合使用
const students = ['zhangsan','lisi','wangwu'];
let [s1, ...s2] = students;

console.log('s1 : ' + s1  + 's2 : ' + s2);

//扩展运算符（展开语法）
const arr = [10,20,30];
console.log(...arr);
console.log('arr: '+  arr);
console.log(10,20,30);
//会发现...arr的输出是和10,20,30序列一样的输出，说明...arr并不是一个数组


//进行数组赋值时，直接进行传值的话修改时会相互干扰
//要解决这个问题的话可以通过扩展运算符来赋值
let arr1 = ['a','b','c'];
let arr2 = arr1;
let arr3 = [...arr1];

arr1.push('hello !');
console.log('arr1 : '+arr1 + 'arr2 : ' + arr2 +'arr3 : '+ arr3);
//发现修改arr1，直接赋值的arr2也受影响，扩展运算符赋值的arr3并不受影响


//合并数组
let arr4 = ['1','2','3'];
let arr5 = ['4','5','6'];

let arr6 = [...arr4,...arr5];
console.log(arr6);
arr6.push(...arr6);
console.log(arr6);
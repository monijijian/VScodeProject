//数组的解构赋值

//基本语法
//let [a,b,c] = [1,2,3];

//解构时，左边允许有默认值
//let [a,b='jijiboy'] = ['aa','bb'];
//输出结果 a:aa b: bb，但没有值传入的话，用默认，有值传入的话用传入值

//传入值少时
//let[a,b,c] = [1,2];
//a:1b:2c:undefined,没有被赋值的变量默认是undefined

// null 和 undefined 传值的区别
let [a = 'a',b = 'b'] = [null,undefined];
console.log('a : '+a+'  b  : '+b);


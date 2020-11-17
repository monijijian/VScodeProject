//数组的解构赋值

//基本语法
// let [a,b,c] = [1,2,3];

//解构时，左边允许有默认值
// let [a,b='jijiboy'] = ['aa','bb'];
//输出结果 a:aa b: bb，但没有值传入的话，用默认，有值传入的话用传入值

//传入值少时
// let[a,b,c] = [1,2];
//a:1b:2c:undefined,没有被赋值的变量默认是undefined

// null 和 undefined 传值的区别
// let [a = 'a',b = 'b'] = [null,undefined];
// console.log('a : '+a+'  b  : '+b);
//结果是 a : null  b: b 。因为undefined相当于什么都没有，null相当于有值，值为null



//对象的解构赋值
const person = {name:'zhangsan',age:'21',sex:'boy'};
let{name,age,sex} = person;
console.log('name : '+name +'  age: '+age+'  sex : ' +sex);//打印结果 zhangsan   21  boy
//对象解构和数组结构的区别，对象解构是按照键来取值的

//未匹配的情况，变量在一 一对应时，没有找到对应的值时，那么多余的变量会被赋值为undefined

//给左边的变量自定义命名
let{name:myname,age:myage} = person;
console.log(myName); // 打印结果：qianguyihao
console.log(myAge); // 打印结果：28

console.log(name); // 打印报错：Uncaught ReferenceError: name is not defined
console.log(age); // 打印报错：Uncaught ReferenceError: age is not defined
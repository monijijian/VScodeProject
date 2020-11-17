//字符串、数组、对象的扩展
/* 
字符串的扩展
includes(str)：判断是否包含指定的字符串
startsWith(str)：判断是否以指定字符串开头
endsWith(str)：判断是否以指定字符串结尾
repeat(count)：重复指定次数
*/
let str = 'abcdefg';

console.log(str.includes('a')); //true
console.log(str.includes('h')); //false

//startsWith(str) : 判断是否以指定字符串开头
console.log(str.startsWith('a')); //true
console.log(str.startsWith('d')); //false

//endsWith(str) : 判断是否以指定字符串结尾
console.log(str.endsWith('g')); //true
console.log(str.endsWith('d')); //false

//repeat(count) : 重复指定次数a
console.log(str.repeat(5));

/*
Number的扩展
二进制和八进制数值表示法:二进制0b ，八进制0o；
0b1010  表示10      0b56  表示46

*/ 
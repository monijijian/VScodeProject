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
Number.isFinite(i)：判断是否为有限大的数。比如Infinity这种无穷大的数，返回的就是 false。
Number.isNaN(i)：判断是否为 NaN。
Number.isInteger(i)：判断是否为整数。
Number.parseInt(str)：将字符串转换为对应的数值。
Math.trunc(i)：去除小数部分。
*/ 
//Number.isFinite(i) : 判断是否是有限大的数
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(5)); //true
console.log(Number.isFinite(Infinity)); //false

//Number.isNaN(i) : 判断是否是NaN
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(5)); //falsse

//Number.isInteger(i) : 判断是否是整数
console.log(Number.isInteger(5.23)); //false
console.log(Number.isInteger(5.0)); //true
console.log(Number.isInteger(5)); //true

//Number.parseInt(str) : 将字符串转换为对应的数值
console.log(Number.parseInt('123abc')); //123
console.log(Number.parseInt('a123abc')); //NaN

// Math.trunc(i) : 直接去除小数部分
console.log(Math.trunc(13.123)); //13


//对象的扩展
//1.Objiect.is(v1,v2);通过字符串判断两个数据是否完全相等
console.log(0 == -0);//结果为true
console.log(NaN == NaN);//结果为false
//==是通过数值来进行判断的，而NaN和任何数都不想相等，包括自身
console.log(Object.is(0,-0));//结果为false
console.log(Object.is(NaN,NaN));//结果为true
//Object.is是通过字符串判断的

//_proto_属性
let obj1 = {name:'xiaoming',age:'22'};
let obj2 = {name:'liwi'};

obj2.__proto__ = obj1;

console.log(obj1);//输出键值对
console.log(obj2);//空对象
console.log(obj2.name);//输出xiaoming
//通过该属性与obj1中的属性相关联，尽管自己是空对象也能得到obj1的属性。但如果obj2中有同名属性就关联不了了
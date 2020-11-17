//展开运算符，用三个连续的点...表示，能将字面量展开为多个元素
let arr = [1,3,5,6,8];

console.log(...arr);
console.log(arr);

//用处可以来结合数组
let animel = ['dog','cat','pig'];
let plant = ['apple','flower'];
let res = [...animel,...plant];

console.log(res);
//ES6提供了新的数据结构 Set   类似于数组，但里面没有重复的值
const set1 = new Set();
console.log(set1.size);

const set2 = new Set(['a','b','c','a']);
console.log(set2);
//通过 扩展运算符，拿到set2里面的元素,外面加[]就成数组了

console.log([...set2]);
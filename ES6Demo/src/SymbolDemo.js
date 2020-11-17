//Symbol是ES6引入的新的数据类型
//至此一共有七种数据类型：undefined  null   Boolean   String    Number  Object  Symbol

let ms = Symbol();
let mscat  = Symbol('cat');

let obj = {
    name : 'tom',
    age:20,
    friend:'jerry'
}

obj[ms] = 'cat';
obj[mscat] = 'cattt';

console.log(obj);
for(let i in obj){
    console.log(obj[i]);
}
//Symbol属性不能被遍历出来
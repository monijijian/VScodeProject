//Symbol是ES6引入的新的数据类型
//至此一共有七种数据类型：undefined  null   Boolean   String    Number  Object  Symbol

let ms = Symbol();

let obj = {
    name : 'tom',
    age:20,
    friend:'jerry'
}

obj[ms] = cat;

console.log(obj);
for(let i in obj){
    console.log(i);
}
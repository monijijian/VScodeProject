//数组的解构
const arr = [1,2,3,4];//多的不会被分配
const [x,y,z] = arr;
console.log(x,y,z);
const[x,,y] = arr;
console.log(x, y, z);

//对象的解构
let obj = {
    name:'echo',
    sex:'boy',
    age:20
}
let {name,age} = obj;//对象的解构是通过属性名来获取的，所以大括号里面的是属性名
console.log(name,age);
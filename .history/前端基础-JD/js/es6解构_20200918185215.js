//数组的解构
const arr = [1,2,3,4];//多的不会被分配
const [x,y,z] = arr;
console.log(x,y,z);

//对象的解构
let obj = {
    name:'echo',
    age:20
}
let n = "",a ="";
let {n,a} = obj;
console.log(n,a);
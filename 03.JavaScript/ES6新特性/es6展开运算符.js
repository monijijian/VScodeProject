//展开运算符，用三个连续的点...表示，能将字面量展开为多个元素
let arr = [1,3,5,6,8];

console.log(...arr);
console.log(arr);

//用处可以来结合数组
let animel = ['dog','cat','pig'];
let plant = ['apple','flower'];
let res = [...animel,...plant];

console.log(res);


//剩余参数（可变参数）

//用途一：将变量赋值给数组
const order = [1,2,3,4,5,6];
const [one,two,three,...other] = order;
console.log(other)
//用途二：可变参数函数
function sum(...num){
    let total = 0;
    for(const i of num){
        total+=i;
    }
    return total;
}

console.log(sum(1,2,3,4,5,6));
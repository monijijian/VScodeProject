//学习过原型、原型链，再看new的过程
function Student(name){
    this.name = name;
}
let stu = new Student('echo');

//看看new 操作符返回来了什么东西
console.log(stu);                      //
console.log(typeof stu);        //object  stu是一个对象
console.log(stu.__proto__==Student.prototype);    //
console.log(stu.constructor);
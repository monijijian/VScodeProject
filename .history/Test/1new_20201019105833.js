//学习过原型、原型链，再看new的过程
function Student(name){
    this.name = name;
    console.log('this.name : ' +this.name);
}
let stu = new Student('echo');

//看看new 操作符返回来了什么东西
//从输出this.name : echo 可知，new操作符把实例赋值this
console.log(stu);                      //
console.log(typeof stu);        //object  stu是一个对象
console.log(stu.constructor); //stu 的constructor指向Student
console.log(stu.__proto__ == Student.prototype); // stu 的 __proto__ 指向Student.prototype

//所以如果要实现new 操作，首先 的创建一个对象 ，其次放置到原型链中（即改变对象的constructor 、__proto__属性等）

function myNew(Con,arg){//参数问题 1.首先的接受 要创建实例的构造函数 2.要给实例的参数
    let obj = {};
    obj.constructor = Con;
    obj.con = Con;
    obj.con(arg);
    delete obj.con;
}
let stu1 = myNew(Student,'stu1');
console.log('stu1',stu1);
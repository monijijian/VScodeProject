// 工厂模式
function creatStu(name,age){
    //创建新对象
    var obj = new Object();

    //添加属性和方法
    obj.name = name;
    obj.age = age;
    obj.sing = function(){
        return this.name + this.age;
    }
    return obj;
}

var stu3 = creatStu('echo',21);
console.log(stu3);
console.log(stu3.name,stu3.age);
console.log(stu3.sing);

var arr = new Array();
console.log(arr);

//构造函数
function Stuent(name,age){
    //添加属性
    this.name = name;
    this.age = age;

    //添加方法
}
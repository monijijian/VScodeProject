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

var s1 = creatStu('echo',21);
console.log(s1);
console.log(s1.name,s1.age);
console.log(s1.sing);

var arr = new Array();
console.log(arr);

//构造函数
function Stuent(name,age){
    //添加属性
    this.name = name;
    this.age = age;

    //添加方法
    this.sing = function(){
        return this.name+this.age;
    };
}

var s2 = new Stuent('diyi',1);
var s3 = new Stuent('dier',2);

console.log('s2 : '+s2 +'s3 : '+s3);
console.log(s2 instanceof Stuent);
console.log(s3 instanceof Object);

console.log(s2.sing() == (new Stuent('diyi',1)).sing());//同于同样的输入两个输出的结果一样
console.log(s2.sing == s3.sing);

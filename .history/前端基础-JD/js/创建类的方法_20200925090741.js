//1.工厂模式
function Person1(name){
    let per = {};
    //添加属性
    per.name = name;
    per.sayName = function (){
        console.log(`my name is ${per.name}`);
    }
    return per;
}
let tom1 = new Person1('tom1');
tom1.sayName();
//缺点：需要定义一个临时变量，而且所有实例都会新建同样的方法

//2. 构造函数
function Person2(name){
    this.name = name;
    this.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
}
let tom2 = new Person2('tom2');
tom2.sayName();
//无需定义临时变量，但所有实例仍然各自新建方法

//3. 原型
function Person3 (name){
    Person3.prototype.name = name;
    Person3.prototype.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
}
let tom3 = new Person3('tom3');
let jerry = new Person3('jerry');
tom3.sayName();
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
let tom1 = Person1('tom1');
tom1.sayName();
//缺点：需要定义一个临时变量，而且所有实例都会新建同样的方法

//2. 构造函数
function Person2(name){
    this.name = name;
    this.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
    return this;//构造函数也需要添加return返回this
}
let tom2 = Person2('tom2');
tom2.sayName();
//无需定义临时变量，但所有实例仍然各自新建方法

//3. 原型
function Person3 (){
    Person3.prototype.name = name;
    Person3.prototype.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
    return this;
}
let tom3 = Person3('tom3');
tom3.sayName();
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
    this.say = function (){
        console.log('hi')
    }
}
let tom2 = Person2('tom2');
tom2.say();
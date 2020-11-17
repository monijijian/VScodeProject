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
let tom = Person1('tom');
tom.sayName();
//缺点：需要定义一个临时变量，而且所有实例都会新建同样的方法

//2. 构造函数
function Person2(name){
    this.name = name;
    this.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
}
let tom = Person2(tom);
tom.sayName();
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
//所有属性和方法都在原型上，共用一个地址，所以属性会被影响

//4. 动态原型
function Person4(name){
    this.name = name;
    Person4.prototype.sayName = function(){
        console.log(`my name is ${this.name}`);
    }
}
let tom4 = new Person4('tom4');
let jerry1 = new Person4('jerry1');
tom4.sayName();
console.log(Person4.prototype);
//推荐，每个实例的属性都是独立定义和存储的，而方法共用原型的方法
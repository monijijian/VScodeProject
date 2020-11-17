class Animal{
    //构造函数，实例化的时候会被调用，如果不指定，那么会有一个不带参数的默认构造函数
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    //toString 是原型对象上的属性
    toString(){
        console.log('name: ' + this.name + '  color : ' + this.color);
    }
}

let tom = new Animal('cat','blue');
tom.toString();

console.log('toString' in tom);

//类的继承
class Dog extends Animal{
    constructor(name,color,action){
        //子类必须要在constructor中指定super函数
        //如果没有置顶constructor，默认带super函数的constructor将会被添加
        super(name,color);
        this.action = action;
    }
    toString(){
        console.log(super.toString);
    }
}

let d1 = new Dog('dog','white','wang');
d1.toString();
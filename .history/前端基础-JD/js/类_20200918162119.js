class Animal{
    //构造函数，实例化的时候会被调用，如果不指定，那么会有一个不带参数的默认构造函数
    constructor(neme,color){
        this.neme = name;
        this.color = color;
    }
    //toString 是原型对象上的属性
    toString(){
        console.log('name: ' + name + '  color : ' + this.color);
    }
}

let tom = new Animal('cat','blue')
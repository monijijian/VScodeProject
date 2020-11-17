//构造器函数
let Parent = function(name,age){
    this.name = name;
    this,age = age;
}
Parent.prototype.sayName = function(){
    console.log(this.name);
}

//自己定义的new方法
let newMethod = function(Parent,...rest){
    //1. 以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);
    //2. 将this和调用参数传给构造器执行
    let result = Parent.apply(child,rest);
    //3. 如果构造器没有手动返回对象，则返回第一步的对象
    return typeof result == 'object' ? result : child;
}

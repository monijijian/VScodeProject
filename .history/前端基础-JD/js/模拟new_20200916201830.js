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
    //以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);
}

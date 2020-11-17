//1.工厂模式
function Person1(name){
    let per;
    //添加属性
    per.name = name;
    per.sayName = function (){
        console.log(`my name is ${per.name}`);
    }
    return per;
}
let tom = Person1('tom');
tom.sayName();
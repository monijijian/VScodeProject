//1.工厂模式
function Person1(na){
    let per;
    //添加属性
    per.name = na;
    per.sayName = function (){
        console.log(`my name is ${per.name}`);
    }
    return per;
}
let tom = Person1('jerry');
tom.sayName();
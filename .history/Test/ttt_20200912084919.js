var obj1 = {
    a:1,
    b:2,
    item:{
        it1:45
    }
};
var obj2 = {c:3,obj1};
console.log(obj2);

obj1.a = 10;

console.log('obj1.a : ' + obj1.a + 'obj2.a: '+ obj2.a);
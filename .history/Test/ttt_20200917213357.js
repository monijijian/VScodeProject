function Stu (){}

Stu.prototype.name ='echo';
Stu.prototype.age = 20;

var s = new Stu();

console.log(s.prototype);
console.log(JSON.stringify(s)  +  typeof s + s.name);

function Stu (){}

Stu.prototype.name ='echo';
Stu.prototype.age = 20;

var s = new Stu();

console.log(JSON.stringify(s._protio_)  +  typeof s + s.name);

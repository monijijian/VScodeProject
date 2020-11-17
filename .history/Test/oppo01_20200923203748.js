var a = 1;
function foo(){
    console.log(a);
    var a =2;
    console.log(this.a);
    this.a = 3;
}
foo();
new foo();

var b = 1;
b = 10;
function fpp(){
    console.log(this.b);
}
fpp();
new fpp();
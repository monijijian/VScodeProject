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
function fpp(){
    console.log(b);
}
fpp();
new fpp();
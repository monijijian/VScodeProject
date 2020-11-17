var a = 1;
function foo(){
    console.log(a);
    var a =2;//由于变量时就近原则，所以函数体内的a指的是此处定义的a，上一句输出时，a被定义了但还没有赋值，所以输出undefined
    console.log(this.a);
    this.a = 3;
}
foo();
new foo();

var b = 1;
function fpp(){
    console.log(this.b);
}
fpp();
new fpp();
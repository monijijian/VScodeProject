function a() {
    var name = 'echo';
    console.log('this.name :'+this.name);
    console.log('this : '+this);
}

globalThis.name = 'window.echo';

// a();
// var obj = new a();

var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a);
        }
    }
}
o.b.fn();//用多个对象调用时，this指向的时上一层的（离它最近的）对象

function Fn(){
    this.name = 'echo';
}
var a = new Fn();
console.log(a.name);//new可以改变this的指向，将this指向对象a\

//new 后面的函数如果有return返回值，，返回的是对象的话new返回这个对象，返回值时其他类型的话则不影响new

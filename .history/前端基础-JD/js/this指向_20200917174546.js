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
        fn:()=>{
            console.log(this.a);
        }
    }
}
o.b.fn();
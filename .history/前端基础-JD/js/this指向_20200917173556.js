function a() {
    var name = 'echo';
    console.log('this.name :'+this.name);
    console.log('this : '+this);
}

globalThis.name = 'window.echo';

a();
var obj = new a();
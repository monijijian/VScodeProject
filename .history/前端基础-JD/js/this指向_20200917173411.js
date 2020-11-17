function a() {
    var name = 'echo';
    console.log('this.name :'+this.name);
    console.log('this : '+this);
}

var name = 'window.echo';

a();
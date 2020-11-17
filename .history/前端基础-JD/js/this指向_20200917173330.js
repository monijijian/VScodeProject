function a() {
    var name = 'echo';
    console.log(this.name);
    console.log(this);
}

var name = 'window.echo';

a();
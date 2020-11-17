function a() {
    var name = 'echo';
    console(this.name);
    console(this);
}

var name = 'window.echo';

a();
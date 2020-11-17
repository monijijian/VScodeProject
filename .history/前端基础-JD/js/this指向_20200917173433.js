function a() {
    var name = 'echo';
    console.log('this.name :'+this.name);
    console.log('this : '+this);
}

window.name = 'window.echo';

a();
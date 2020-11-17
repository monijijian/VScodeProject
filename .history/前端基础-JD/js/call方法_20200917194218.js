var a = {
    name:'echo',
    syName:function(){
        console.log(this.name);
    }
}
var b = a.syName;
b();
b.call(a);
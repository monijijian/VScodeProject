var a = {
    name:'echo',
    syName:function(){
        console.log(this.name);
    },
    fn:function(n1,n2){
        console.log('num : '+  n1+n2);
    }
}
var b = a.syName;
b();
b.syName.call(a);

var f = a.fn;
f.call(a,n1,n2);

var a = {
    name:'echo',
    syName:function(){
        console.log(this.name);
    },
    fn:function(n1,n2){
        console.log('num : '+  n1+n2);
    }
}

// call
var b = a.syName;
b();
b.call(a);

var f = a.fn;
f.call(a,1,2);

// apply
var c = a.syName;
c.apply(a);

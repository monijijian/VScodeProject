var a = {
    name:'echo',
    syName:function(){
        console.log(this.name);
    },
    fn:function(n1,n2){
        console.log('num : '+  n1+n2);
    }
}
var b = a();
b.syName();
b.syName.call(a);
var n1 =2 ,n2 =5;

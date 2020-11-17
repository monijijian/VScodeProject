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

var f1 = a.fn;
f1.call(a,1,2);

// apply
var c = a.syName;
c.apply(a);

var f1 = a.fn;
f1.apply(a,[2,2]);//和call方法不一样，apply第二个参数必须是一个数组
//call和apply的第一个参数是null，那么this指向的是window对象

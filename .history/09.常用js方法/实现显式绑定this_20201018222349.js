//this绑定的优先级：箭头函数>new > 显示 >  隐式绑定 > 默认绑定

const obj={
    name:'joy',
};

function getName(a,b){
    console.log(this.name,a,b);
}

//实现 apply
//第一步在Function的原型上面新建一个函数
Function.prototype.myApply=function(that,arg){//如果第一个值不传会绑定到window上面
    //console.log(this);  此时是隐式绑定this ，谁调用这个方法，this就是谁

    if(typeof this !== 'function'){
        throw this + 'is not a function'
    }
    that = that||window;//如果第一个参数没传，就绑定到window上
    arg=arg||[];
    that.myFn=this;  //给实参增加一个 myFn方法属性 ，就是调用这个方法的方法
    const res=that.myFn(...arg); //执行实参里的这个方法,解构把参数传进来
    delete that.myFn;//删除实参中的这个方法，毕竟只是this指向的改变，不是真的多了这个方法
    return res;
}
getName.myApply(obj,[1,2]);

//实现call
Function.prototype.myCall=function(that,...arg){
    if(typeof this !== 'function'){
        throw this +'is not a function'
    }
    that=that||window;
    that.myFn=this;
    const res = that.myFn(...arg);//执行
    delete that.myFn;//删除
    return res;
}
getName.myCall(obj,1,2);

//实现bind
Function.prototype.myBind = function(that){
    if(typeof this !== 'function'){
        throw this + 'is not a function'
    }
    const args = [...arguments].slice(1);
    const fn =this;
    return function F() {
        // 因为返回了一个函数,如果是new的话this就要指向新创建的对象了
        if (this instanceof F) {
            return new fn(...args, ...arguments)
        }
        return fn.apply(that, args.concat(...arguments))
    }
}
getName.myBind(obj,1,2)();

let a =1;
console.log('this is ' + a);
console.log(`this is ${a}`);
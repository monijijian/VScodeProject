//this绑定的优先级：箭头函数>new > 显示 >  隐式绑定 > 默认绑定

const obj={
    name:'joy',
};

function getName(a,b){
    console.log(this.name,a,b);
}

//第一步在Function的原型上面新建一个函数
Function.prototype.myApply=function(that,arg){//如果第一个值不传会绑定到window上面
    //console.log(this);  此时是隐式绑定this ，谁调用这个方法，this就是谁

    if(typeof this !== 'function'){
        throw this + 'is not a function'
    }
    that = that||window;//如果第一个参数没传，就绑定到window上
    arg=arg||[];
    that.myFn=this;  //给实参增加一个 myFn方法属性 ，就是调用这个方法的方法
    const res=that.myFn(...arg); //执行实参里的这个方法
    return res;
}
getName.myApply(obj,[1,2]);
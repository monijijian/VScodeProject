//this绑定的优先级：箭头函数>new > 显示 >  隐式绑定 > 默认绑定

const obj={
    name:'joy',
};

function getName(){
    console.log(this.name);
}

//第一步在Function的原型上面新建一个函数
Function.prototype.myApply=function(that){
    //console.log(this);  此时是隐式绑定this ，谁调用这个方法，this就是谁
    that.myFn=this;
    const res=that.myFn();
    return res;
}
getName.myApply(obj);
//this绑定的优先级：箭头函数>new > 显示 >  隐式绑定 > 默认绑定

const obj={
    name:'joy',
};

function getName(){
    console.log(this.name);
}

//第一步在Function的原型上面新建一个函数
Function.prototype.myApply=function(){
    console.log(this);
}
getName.myApply();
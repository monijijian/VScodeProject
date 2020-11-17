//定义没有依赖的模块
define(function(require,exports,module){
    let name = 'i come from module1';
    function foo1(){
        return name;
    }
    //暴露模块
    module.exports = {foo1};//暴露的是foo1这个函数对象
});
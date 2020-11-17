# CommonJS 的基本语法
是Node.js使用的模块化规范
**CommonJS规范规定**： 每个模块内部，moduel对象代表当前模块，该对象的export（即moduel,export）属性是对外的接口对象。加载某个模块，其实就是加载该模块的module.export对象

- 服务器端：模块的加载是运行时同步加载的
- 浏览器端：模块需要提前编译打包

## 暴露模块

### 方式一 ： exports
导出当前模块的公共方法或属性
举例：

```javascript
const name = 'echo';
const foo = function(value){
    return value*2;
};

exports.name = name;
exports.foo = foo;
```
### 方式二  moduel.exports
导出一个对象，不指定对象名

举例：
```javascript
moduel.exports = {
    name:'echo';
    foo(){
        console.log(this.name);
    }
}

const age =22;
module.exports.age=age;
```

**两者的区别**
exports 只能导出 单个属性或者方法  ； module.exports可以导出 对象

## 引入模块 ： require
语法格式： 
```javascript
const module1 = require('模块名');
```
require()函数， 执行导入模块的代码    ， 返回导入模块的接口对象


**模块的初始化**
导入模块的代码只初始化一次，然后就被存入缓存
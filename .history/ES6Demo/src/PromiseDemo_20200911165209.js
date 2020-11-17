//JavaScript是单线程，异步是指可以一起执行多个任务，常见的异步模式：定时器，接口调用，事件函数
//接口调用的方式：1.原生ajax    2. 基于jQuery的ajax   3.Fetch    4.Promise   5.axios

//Promise从语法上来讲是一个对象，可以获取异步操作的消息；可以用同步的表现方式来书写异步代码
//Promise可以 很好的解决回调地狱的问题（层层嵌套的回调函数）  语法简洁，可读性强。

//Promise的基本用法
//1.使用new实例化一个promise对象，Promise的构造函数中传递一个函数，用于处理异步任务
//2. 传入两个参数：resolve 和 reject ，分别表示成功和失败后的回调函数
//3.通过promise.then()处理返回结果，这里的promise指的是实例


//Promise封装Ajax请求

//写法一：
const request = require('request');
//Promise 封装接口
function request1(){
    return new Promise((resolve,reject) => {
        request('https://www.baidu.com',function (response){
            if(response.retCode == 200){
                resolve('request1 success' + response);
            }else{
                reject('接口请求失败');
            }
        });
    });
}

request1().then((res1)=>{
    //接口1请求成功后，打印接口1的返回结果
    console.log(res1);
    return require2();
});

//写法2
//const request = require('request');
//Promise封装接口1
const request1 = function () {
    const promise = new Promise((resolve,reject) =>{
        request('https://www.baidu.com',function (response){
            if(response.retCode == 200){
                //这里的response是接口1的返回结果
                resolve('rsquest1 success' + response);
            } else {
                reject('接口请求失败');
            }
        });
    });
    return promise;
}
// 先发起request1，等resolve后再发起request2；紧接着，等 request2有了 resolve之后，再发起 request3
request1().then((res1) => {
    // 接口1请求成功后，打印接口1的返回结果
    console.log(res1);
    return request2();
});



//promise对象的三个状态:  初始化状态（等待状态）：pending    成功状态：fulfilled   失败状态:rejected
//代码举例：

let promise = new Promise((resolve, reject) => {
    //进来之后，状态为pending
    console.log('111'); //这行代码是同步的
    //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
    if (异步的ajax请求成功) {
        console.log('333');
        resolve('haha'); //如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fulfilled
    } else {
        reject('555'); //如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected
    }
});
console.log('222');

//调用promise的then()
promise.then(
    (successMsg) => {
        //如果promise的状态为fulfilled，则执行这里的代码
        console.log(successMsg, '成功了');
    },
    (errorMsg) => {
        //如果promise的状态为rejected，则执行这里的代码
        console.log(errorMsg, '失败了');
    }
);
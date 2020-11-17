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
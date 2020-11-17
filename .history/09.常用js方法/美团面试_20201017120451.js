//promise嵌套
//调用是链式进行的，即使前面有延时函数，后面的要等前面的全部完成才运行
//如果延时函数不写在promise里面的话会卡住，后面的then执行不了
//所以第8行异步任务挂起，然后任务栈里的36行开始执行
console.log('start')
new Promise(resolve => {
    console.log('Step 1')
    setTimeout(() => {
        console.log('我是非返回值的延时函数');
        resolve(100);//这里的100不会传递，后面函数都是被返回的promise调用的的
    }, 1000)
    console.log('i am new 1');
})
    .then(value => {//上一层函数没有写返回promise对象，默认返回一个值为undefined的promise
        console.log(value.value);
        return new Promise(resolve => {//这里返回promise对象，里面的110会传递到后面的then
            console.log('Step 1-1');
            setTimeout(() => {
                resolve(110)
            }, 1000)
        })
            .then(value => {
                console.log('Step 1-2')
                return value;
            })
            .then(value => {
                console.log('Step 1-3')
                return value;
            })
    })
    .then(value => {
        console.log(value)
        console.log('Step 2')
    })

Promise.resolve().then(//前面的resolve为空，返回值为undefined的promise对象
    res=>{
        console.log(res);

        new Promise((res,rej)=>{
            console.log('我是内部新开的promise,有自己的then，不用你们的');
            setTimeout(()=>{
                console.log('我，一个延时函数');
                res('内部promise');
            } ,1000);
        }).then((res)=>{
            console.log(res.value);
            console.log('我，内部promise的then')
        })
    }
).then((res)=>{
    console.log(res,'回归正轨，返回一个值');
    return 1;
}).then((res)=>{
    console.log(res);
})



//promise嵌套
//顺序是从前往后，后面的要等前面调用  
//如果then中由延时函数，
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
        return new Promise(resolve => {
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



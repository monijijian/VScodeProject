//promise嵌套
//顺序是从前往后，后面的要等前面调用
console.log('start')
new Promise(resolve => {
    console.log('Step 1')
    setTimeout(() => {
        resolve(100)
    }, 1000)
    console.log('i am new 1');
})
    .then(value => {
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

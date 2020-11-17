//async//await异步函数是ES7的新语法，用来完善promise 、
// aysnc用来声明一个异步的函数，返回值是promise对象；await会等待promise对象的处理

async function ff1 (ms){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('这是一个被async声明过异步操作');
        },ms);
    });
}

function ff2(){
    console.log('我是一个普通函数，再ff1后面');
}

async function ff3 (){
    const f1 = await  ff1(200);
    const f2 = await  ff2();
}

 ff3();
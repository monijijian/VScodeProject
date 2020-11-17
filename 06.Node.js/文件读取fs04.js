let fs = require('fs');

//读取同样也有同步异步，一般都采取异步读取，高效
fs.readFile('text1.txt',(err,data)=>{//err报错信息,data成功后返回的信息
    if(!err){
        console.log(data.toString());//data默认返回非字符串,需要转化toString

    }else{
        console.log(err);
    }
});
console.log('读取数据');
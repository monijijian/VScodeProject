let fs = require('fs');

//异步：不等文件写入完成后再往下执行，等写入完成后执行回调函数
fs.open('text.html','w',(err,fd)=>{
    console.log('文件打开！');

    fs.writeFile(fd,'<h1>大标题</h1>',(err)=>{
        if(!err){
            console.log('写入完成！');
            fs.close(fd,()=>{
                console.log('关闭完成!');
            })
        }else{
            console.log(err);
        }
    })
})

console.log('我先执行');
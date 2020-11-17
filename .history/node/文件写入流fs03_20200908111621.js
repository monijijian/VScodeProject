let fs = require('fs');

//创建写入流
let ws  = fs.createWriteStream('text1.txt');

//监听通道是否打开
ws.once('open',()=>{
    console.log('通道已经打开');
    ws.write('你没事吧');
    ws.write('你没事吧');
    ws.write('你没事吧');
    //写入结束
    ws.end();
});


//监听通道的关闭
ws.once('close',()=>{
    console.log('通道关闭')
});
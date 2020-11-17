//首先导入文件操作模块
let fs = require('fs');

//同步打开文件，同步：一步步进行
let fd = fs.openSync('text1','w');//同步要加Sync
console.log(fd);

//写入内容
let str = "我是写入的内容";
fs.writeFileSync(fd,str);//写入的文件和内容

//退出文件
fs.close(fd);
//首先导入文件操作模块
let fs = require('fs');

//同步打开文件，同步：一步步进行
//同步的所有步骤都要加Sync
let fd = fs.openSync('text1.txt','w');//可以写入各种格式的文件
console.log(fd);

//写入内容
let str = "我是写入的内容";
fs.writeFileSync(fd,str);//写入的文件和内容

//退出文件
fs.closeSync(fd);
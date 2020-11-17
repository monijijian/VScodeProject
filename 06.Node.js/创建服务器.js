let  express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('???????');
});

app.listen(8080,()=>{//监听端口号80801
    console.log('服务器已经启动!!','http://localhost:8080/node');
});
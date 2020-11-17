let  express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('???????');
});

app.listen(8080,()=>{
    console.log('qidong1!!','http://localhost:8080/');
});
const express = require('express');

const app = express();

// 解决跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/getUser', function(req, res) {
    res.send({
        code:0,
        data:{
          name: 'hkp',
          age: 18
        },
        msg:'ok',
    })
})

app.listen(3001, function (){
    console.log('express已启动')
})

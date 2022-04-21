const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.setHeader('Set-Cookie', 'token=true');
    res.send("this is 3005");
})

app.post('/getCookie', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7777');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키도 공유
    res.setHeader('Access-Control-Allow-Headers', 'Context-type');
    res.setHeader('Set-Cookie','token=true');
    res.send('cookie 보자');
})


app.listen(3005, ()=>{
    console.log("back is running at 3005");
})
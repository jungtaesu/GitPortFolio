const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.setHeader('Set-Cookie', 'token=true');
    res.send('this is 3000');
})

app.post('/getCookie', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키도 공유
    res.setHeader('Access-Control-Allow-Headers', 'Context-type');
    res.setHeader('Set-Cookie','token=true');
    res.send('cookie 보자');
})

app.listen(3000, ()=>{
    console.log('back running at 3000');
})
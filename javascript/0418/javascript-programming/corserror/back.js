const express = require('express');
const app = express();
// const nunjucks = require('nunjucks');

// app.set('view engine', 'html');

app.get('/', (req, res)=>{
    res.setHeader('Set-Cookie', 'token=true2');
    res.send("this is 5000");
    
})

// app.get('/getCookie', (req, res)=>{
//     res.setHeader('Set-Cookie', 'token=true2');
//     res.send('쿠키 찍힐걸');
// })

app.post('/getCookie', (req, res)=>{

    //응답과 요청이 맞물려야 한다. cors라는 라이브러리가 만들어주는 것.
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5555');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키도 공유
    res.setHeader('Access-Control-Allow-Headers', 'Context-type');
    res.setHeader('Set-Cookie','token=true2');
    res.send('요청값 되냐'); //이게 없으니까 res 볼수가 없네
})



app.listen(5000, ()=>{
    console.log("port 5000 (back) running");
})


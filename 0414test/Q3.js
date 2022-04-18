const express = require('express'); //라이브러리
const app = express();
const nunjucks = require('nunjucks');
// const cors = require('cors');
app.set('view engine', 'html');
// const cookieParser = require('cookie-parser')

nunjucks.configure('views', {
    express:app
})

// app.get('/getCookie', (req, res) => {

//     res.setHeader('Set-Cookie','token=true');
//     const [name, value] = req.headers.cookie.split('=');
//     console.log(name, value);
//     res.send("hi~~ port 3000");
      
// })

app.get('/', (req, res) => {
    
    res.setHeader('Set-Cookie','token1=true');
    res.send("hi~~ port 3000");

})

app.post('/getCookie', (req, res)=>{

    //응답과 요청이 맞물려야 한다. cors라는 라이브러리가 만들어주는 것.
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키도 공유
    res.setHeader('Access-Control-Allow-Headers', 'Context-type');
    res.setHeader('Set-Cookie','token1=true');
    res.send("되냐");
})

const host = 'localhost';
const port = 3000;

app.listen(port, () => console.log(`Node.js is running at ${port}`));

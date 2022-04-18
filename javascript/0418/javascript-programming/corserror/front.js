const express = require('express'); //라이브러리
const app = express();
const nunjucks = require('nunjucks');
// const cors = require('cors');
app.set('view engine', 'html'); //app.set
// const cookieParser = require('cookie-parser')

nunjucks.configure('views', {
    express:app
})

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(5555, ()=>{
    console.log("front server is on 5555");
})
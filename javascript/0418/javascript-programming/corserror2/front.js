const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.get('/', (req, res)=>{
    res.render('index');
})

app.set('view engine', 'html');
nunjucks.configure('views', {
    express:app
})

app.listen(7777, ()=>{
    console.log("front is running at 7777");
})
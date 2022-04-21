const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    express:app
});

app.get('/', (req, res)=>{
    res.render('index.html');
})

app.set('view engine', 'html');

app.listen(3006, (req, res)=>{
    console.log("front 3006 is running");
})
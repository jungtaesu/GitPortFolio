const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'html');

nunjucks.configure('', {
    express:app
});

app.get('/', (req, res) =>{
    res.render('index');
})

app.listen(4000, ()=>{
    console.log("start");
})
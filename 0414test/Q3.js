const express = require('express'); //라이브러리
const app = express();
const nunjucks = require('nunjucks');
// const cors = require('cors');
app.set('view engine', 'html');

nunjucks.configure('views', {
    express:app
})

// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.get('/2', (req, res) => {
//     res.render('index2');
// })

// app.get('/', (req, res)=>{
//     res.send("this is test");
// })

app.get('/getCookie', (req, res) => {
    res.setHeader('Set-Cookie','token=true');
    res.send("toekn");
})

app.get('/', (req, res) => {
    res.render("test");
})

const host = 'localhost';
const port = 3000;

app.listen(port, () => console.log(`Node.js is running at ${port}`));

//https://www.notion.so/d785adeb248142158f5b8019d8213210?v=a687c12a2a6f4552987bfcf5dfbec6b1&p=6a0e2e30d32344be933f34ab8fcc788b
//↑↑↑↑↑↑ Q10 관련 노션
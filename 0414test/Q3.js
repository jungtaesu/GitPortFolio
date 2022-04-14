const express = require('express');
const app = express();
// const cors = require('cors');

app.get('/', (req, res)=>{
    res.send("this is test");
})

app.get('/getCookie', (req, res) => {
    res.send({Token:true});
    
})

const host = 'localhost';
const port = 3000;

app.listen(port, () => console.log(`Node.js is running at ${port}`));

//https://www.notion.so/d785adeb248142158f5b8019d8213210?v=a687c12a2a6f4552987bfcf5dfbec6b1&p=6a0e2e30d32344be933f34ab8fcc788b
//↑↑↑↑↑↑ Q10 관련 노션
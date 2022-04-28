//웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express'; //필요한 express만 불러온다
// const express = require("express");  //통째로 다 불러온다.
import bodyParser from 'body-parser';
import { getBlocks,createBlock } from './block.js';


//초기화 함수
const initHttpServer = (myHttpPort) =>{
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req,res)=>{
        res.send("hello world!");
    })

    app.get('/blocks', (req, res)=>{
        res.send(getBlocks());
    })

    app.post('/createBlock', (req, res)=>{
        const data = req.body.data // postman에 바디에 넣는 값이 바뀔때마다 값을 받아오는 방법.
        res.send(createBlock(data));
    })

    app.listen(myHttpPort, ()=>{
        console.log("listening httpServer Port :", myHttpPort);
    })
}

export { initHttpServer };
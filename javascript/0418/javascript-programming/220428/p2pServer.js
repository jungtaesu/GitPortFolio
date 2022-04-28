// 다른 노드와 통신을 위한 서버
import WebSocket from 'ws'
import { WebSocketServer } from 'ws';

const sockets = []; //socket자체 값을 바꾸는건 문제가 되지만 내부에서 바꾸는건 괜찮다.

const initP2PServer = (p2pPort) =>{
    const server = new WebSocketServer({port:p2pPort}); //포트만 넣어주면 웹소켓 만들어준다.
    server.on('connection', (ws)=>{ //커넥션같은 이벤트들은 미리 정의되어있음. 웹소켓에서 처리할수 있게. 우리는 이벤트가 일어날때 어떤 함수를 호출해주겠다 라는 작업중임.
        initConnection(ws);
    })
    console.log("listening P2PServer Port", p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
}

export { initP2PServer }
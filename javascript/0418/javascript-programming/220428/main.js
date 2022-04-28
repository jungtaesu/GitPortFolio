// p2p 서버 초기화, 사용
// http 서버 초기화, 사용
// 블록체인 함수사용 

import { initHttpServer } from "./httpServer.js";
import { initP2PServer } from "./p2pServer.js";

const httpPort = parseInt(process.env.HTTP_PORT) || 3001;//이렇게 짜는 이유: 숫자를 직접 적어넣는건 프로그래머만 가능 근데 env해놓으면 외부에서도 변경가능
const p2pPort = parseInt(process.env.HTTP_PORT) || 6001;

initHttpServer(httpPort);
initP2PServer(p2pPort);
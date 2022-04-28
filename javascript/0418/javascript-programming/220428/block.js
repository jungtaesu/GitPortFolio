//블록체인 관련 함수
//블록 구조 설계
/*
    iindex : 블록체인의 높이
    data: 블록에 포함된 모든 데이터 (ex 트랜잭션)
    timestamp : 블록 생성시간
    hash : 블록 내부 데이터로 생성한 sha256값 (블록의 유일성 보장)
    perviousHash : 이전 블록의 해쉬 (이전 블록을 참조)
*/

import CryptoJS from 'crypto-js'; //sha256쓰기위해.

class Block {
    constructor(index, data, timestamp, hash, previousHash)
    {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}

function getBlocks() {
    return blocks;
}

const calculateHash = (index, data, timestamp, previousHash) =>{
    return CryptoJS.SHA256((index + data + timestamp + previousHash).toString()).toString();
}
//제네시스 블록 만드는 곳
const createGenesisBlock = () => {

    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', new Date().getTime() / 1000, 0, 0);

    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash);

    return genesisBlock;
}

const blocks = [createGenesisBlock()]; //선언할때만 한번 들어갈수 있게.

const createBlock = (blockData) => { //인자로 받는 blockData는 나중에 포스트맨에서 쏴주는 req.body.data를 사용한다.
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000; //밀리세컨드니까 1000으로 나눠서 초
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash);
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash);

    if(isValidNewBlock(newBlock, previousBlock)) {
        blocks.push(newBlock);
        return newBlock;
    }
     //중요한 부분이다.
    console.log("fail to create new block");
    return null;
}
// blocks.push(newBlock); 이거 여기다가 두면 안됨
// 블록의 무결성 검증
/* 
    블록의 인덱스 이전 블록인덱스보다 1 크다.
    블록의 previousHash 가 이전 블록의 hash이다.
    블록의 구조가 일치해야한다.
*/

const isValidBlockStructure = (newBlock) => { //블럭 구조가 클래스와 동일한지 확인
    if(typeof (newBlock.index) === 'number' 
            &&typeof (newBlock.data) ==='string'
            &&typeof (newBlock.timestamp) === 'number'
            &&typeof (newBlock.hash) === 'string'
            &&typeof (newBlock.previousHash) === 'string') {
                return true;
            }
            return false;
}

const isValidNewBlock = (newBlock, previousBlock) => { //새로운 블록이 맞는 블록인지 확인
    if(newBlock.index != previousBlock.index + 1){
        console.log('invalid index')
        return false;
    } else if(newBlock.previousHash !== previousBlock.hash) {
        console.lpg('invalid previoushash')
        return false;
    } else if(isValidBlockStructure(newBlock) == false) {
        console.log('invalid block strurcture');
        return false;
    }
    return true;
}

export { getBlocks, createBlock }

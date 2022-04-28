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

const createGenesisBlock = () => {

    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', new Date().getTime() / 1000, 0, 0);

    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash);

    return genesisBlock;
}

const blocks = [createGenesisBlock()]; //선언할때만 한번 들어갈수 있게.

const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000; //밀리세컨드니까 1000으로 나눠서 초
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash);
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash);


    blocks.push(newBlock); //중요한 부분이다.
    return newBlock;
}

// blocks.push(newBlock); 이거 여기다가 두면 안됨

export { getBlocks, createBlock }

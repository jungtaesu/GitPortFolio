const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = "gray";
const context = canvas.getContext("2d");

let TileWidth = 30;
let TileHeight = 30;
let tiles = [];
let heroWidth = 20;
let heroHeight = 20;
let myHero;
let heroPsxLeft = 30;
let heroPsxTop = 30;
let heroMoveDirX = 1;
let heroMoveDirY = 1;
let heroHp = 5;
let heroMoney = 0;

class Hero {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.color = "blue";
    }
    draw() {
        if (true) {
            context.rect(this.left, this.top, heroWidth, heroHeight);
            context.fillStyle = this.color;
            context.fill();
        }
    }
}

class Tile {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.color = "green";
        this.isExit = false;
    }
    draw() {
        if (true) {
            context.rect(this.left, this.top, TileWidth, TileHeight);
            context.fillStyle = this.color;
            context.fill();
         } //else if(tileTypeNum == 1) {
        //     context.rect(this.left, this.top, TileWidth, TileHeight);
        //     context.fillStyle = "yellow";
        //     context.fill();
        // }
    }
}

function setHero() {

    myHero = new Hero(
        heroPsxLeft,
        heroPsxTop,
        heroPsxLeft + heroWidth, // draw할때 this.top인데 this.right이라 해서 ㅇ ㅣ값 추가해주면 y로 커짐.
        heroPsxTop + heroHeight
    )
    console.log(myHero);
}

document.addEventListener('keydown', keyDownEventHandler);

function keyDownEventHandler(e) {

    if (e.key == 'ArrowRight') {
        if (heroPsxLeft + heroWidth < 365) {
            heroMoveDirX = 35;
            showMonster()
            heroPsxLeft += heroMoveDirX;
            myHero.left = heroPsxLeft;
            // console.log(myHero);
        }
        else if (heroPsxLeft + heroWidth >= 365) {
            console.log("15x추가불가")
            heroMoveDirX = 0;
        }
    }
    else if (e.key == 'ArrowLeft') {
        if (heroPsxLeft > 30) {
            showMonster()
            // console.log("15x다운")
            heroMoveDirX = -35;
            heroPsxLeft += heroMoveDirX;
            myHero.left = heroPsxLeft; //myHero.left에 값을 넣어줘야 움직이네
        }
    }
    if (e.key == 'ArrowUp') {
        console.log("화살 위");
        if (heroPsxTop > 30) {
            showMonster()
            heroMoveDirY = -35;
            heroPsxTop += heroMoveDirY;
            myHero.top = heroPsxTop;
        }
    }
    else if (e.key == 'ArrowDown') {

        if (heroPsxTop + 20 < 360) {
            console.log("화살아래")
            showMonster()
            heroMoveDirY = 35;
            heroPsxTop += heroMoveDirY;
            myHero.top = heroPsxTop;
            // console.log(myHero);
        }
    }
    if (e.key == 'ArrowDown' ||
        e.key == 'ArrowUp' ||
        e.key == 'ArrowLeft' ||
        e.key == 'ArrowRight') {
        pcNum = Math.floor(Math.random() * 2);
        huntMoney = Math.floor(Math.random() * 10) + 15;
        metMarket();
        // console.log("밖에서 hp찍자", heroHp);

            // console.log(pcNum);
    }
}

let pcNum;
let huntMoney;
console.log("huntmoney: " , huntMoney);

function Scissor() {
    console.log("가위")
    myNum = 0;
    if(pcNum == 2) {
        console.log("내가 이김")
        heroMoney += huntMoney
        alert("내가 이김")
    } else if(pcNum == 1) {
        console.log("내가 짐");
        alert("내가 짐")
        heroHp -= 1
     
    } else if(pcNum == 0) {
        console.log("무승부");
        alert("무승부")
    }
    console.log(heroHp);
    return heroHp;
}

function Rock() {
    console.log("바위")
    myNum = 1;
    if(pcNum == 0) {
        console.log("내가 이김")
        heroMoney += huntMoney
    -+--------    alert("내가 이김")
    } else if(pcNum == 2) {
        console.log("내가 짐");
        alert("내가 짐")
        heroHp -= 1
      
    } else if(pcNum == 1) {
        console.log("무승부");
        alert("무승부")
    }
    console.log(heroHp);
    return heroHp;
}

function Paper() {
    console.log("보")
    myNum = 2;
    if(pcNum == 0) {
        console.log("내가 짐")
        alert("내가 짐")
        heroHp -= 1
       
    } else if(pcNum == 1) {
        console.log("내가 이김");
        heroMoney += huntMoney
        alert("내가 이김")
    } else if(pcNum == 2) {
        console.log("무승부");
        alert("무승부")
    }
    console.log(heroHp);
    return heroHp;
}




function showMonster() {

    const playdiv = document.getElementById("play");

    let monsterNum = Math.floor(Math.random() * 10);
    // console.log(monsterNum);

    if (monsterNum < 1) {
        alert("몹을 만나다");
        playdiv.style.visibility = "visible";
    } else {
        playdiv.style.visibility = "hidden";
    }

    document.getElementById("hHp").innerHTML = `HP: ${heroHp}`
    document.getElementById("hMoney").innerHTML = `money: ${heroMoney}`
}

let randomI = Math.floor(Math.random() * 10);
let randomJ = Math.floor(Math.random() * 10);



// function MetMonster() {
//     if (myHero.left - 5 == 25 + randomMonsterI * (TileWidth + 5) && myHero.top - 5 == 25 + randomMonsterJ * (TileHeight + 5)) {
//             console.log("가위바위보");
//     }
// }

function gameClear() {
    if (myHero.left - 5 == 25 + randomI * (TileWidth + 5) && myHero.top - 5 == 25 + randomJ * (TileHeight + 5)) {
        setTimeout(() => {
            window.location.reload(true);
            alert("Game Clear");
        }, 100);
    }
}

function gameFail() {
    if(heroHp == 0) {
        window.location.reload(true);
        alert("Game Over");
    }
}

let randomMonsterI = Math.floor(Math.random() * 10);
let randomMonsterJ = Math.floor(Math.random() * 10);
let tileTypeNum;


function setTiles() {
    tiles = [];

    for (let i = 0; i < 10; i++) {
        tiles[i] = []; //음 이유가 뭐지
        for (let j = 0; j < 10; j++) {
            tileTypeNum = Math.floor(Math.random() * 3); //각 타일마다 난수생성
            tiles[i][j] = new Tile(
                25 + i * (TileWidth + 5),
                25 + j * (TileHeight + 5),
                55 + i * (TileWidth + 5),
                55 + j * (TileHeight + 5) ,
            )
            // console.log(tiles[i][j], "TypeNum is ", tileTypeNum) //각 타일별 난수생성

            if(tileTypeNum == 0) {
                tiles[i][j].color = "yellow"; //모래
            }else if(tileTypeNum == 1) {
                tiles[i][j].color = "green"; //숲
            } else if(tileTypeNum == 2) {
                tiles[i][j].color = "purple"; //독
            }
        }
    }
    //출구
    tiles[randomI][randomJ].isExit = true; // 9,9좌표에 exit인지 주기
    tiles[randomI][randomJ].color = "black"; // 좌표에 색깔값

    tiles[randomMonsterI][randomMonsterJ].color = "red";
}

function metMarket() {
   if(myHero.left - 5 == 25 + randomMonsterI * (TileWidth + 5) && myHero.top - 5 == 25 + randomMonsterJ * (TileHeight + 5)) {
        let mart = prompt("마켓이다. hp 1 회복 = 50원 어쩔겨?", "");
            console.log("내가 선택한 hp회복할 수량 :", mart);
            if(mart > 0 && heroMoney > mart * 50) {
                heroHp += parseInt(mart);
                heroMoney -= mart * 50
            } else if(mart == NaN || mart == 0 || mart == null) {
                alert("바쁜데 뻘짓하지말고 꺼져라");
            } else if(heroMoney < mart * 50) {
                alert("거지새끼가;;;;");
            } else alert("바쁜데 뻘짓하지말고 꺼져라");
   }
   console.log(heroHp);
    return heroHp;

}

function drawTiles() { //타일마다 다르게 그려주기

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            context.beginPath(); // 검은 벽 하나 그리기위해 포문 안에

            tiles[i][j].draw();

            context.closePath(); //얘네를 포문 밖에 두니까 한방에 그리고 마는 거임.
        }
    }
}

function drawHero() {
    context.beginPath();

    myHero.draw();

    context.closePath();
}

function drawBackGround() {
    context.beginPath();
    context.rect(0, 0, 400, 400);
    context.fillStyle = 'gray';
    context.fill();
    context.closePath();
}

function drawAll() {
    gameClear();
    gameFail();

    drawBackGround();
    drawTiles();
    drawHero();
}

setHero();
setTiles();
setInterval(drawAll, 100); 
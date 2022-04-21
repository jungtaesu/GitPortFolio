/*
    클래스

    함수 생성자
    
*/

//벽돌 left, top, bottom 등 값을 가지고 있음. + 움직이는 기능도 추가하고 싶은 상황
//
// let brick = {
//     left:0, right:0, top:0, bottom:0,
//     column:0, row:0, 
// }

// function Brick(left, top, right, bottom) {
//     this.left = left,
//     this.top = top,
//     this.right = right,
//     this.bottom = bottom
//     // this.movingAction = function() {console.log("내가 움직이고 있다니")};
// }
// //프로토타입이란 시연작품 개선하기위한 따라서 클래스에서 만드련 함수를 20개나 만들어야하는데
// // 여기서 만들면 하나만 만들고 메모리 세이브
// Brick.prototype.movingAction = function() { this.left++; console.log("내가 움직이고 있다니") }

// for(let i = 0; i < 20; i++) {
//     let tempBrick = new Brick(0, 0, 10, 10);
//     tempBrick.movingAction(); //객체의 기능을 호출    
// }

// class Brick {
//     constructor(left, top, right, bottom){
//         this.left = left;
//         this.top = top;
//         this.right = right;
//         this.bottom = bottom;
//     } //속성에 해당

//     // movingAction() { //자동으로 프로토타입에 들어온것임.
//     //     this.left++; console.log("내가 움직이고 있다니")
// }

// class MovingBrick extends Brick {
//     //여기에 상속받아서 위에 속성 갖고있는것과 같다

//      movingAction() { //자동으로 프로토타입에 들어온것임.
//          this.left++; console.log("내가 움직이고 있다니")
//     }
// }


let testArray = [1, 2, 3, 4, 5];
let testArray2 = new Array(5);

testArray[0] = 100;

for (let i = 0; i < testArray.length; i++) {
    testArray[i];
}

testArray.unshift(300);
testArray.forEach(function (number, index, arr) {
    console.log("4. number:", number, "index", index, "arr:", arr);
})

testArray.shift();
testArray.forEach(function (number, index, arr) {
    console.log("5. number:", number, "index", index, "arr:", arr);
})

let arrayMultiple = testArray.map(x => x * 2); //배열의 요소들을 x에 담아서 하ㅏ하나 다 곱해준다.
arrayMultiple.forEach(function (number, index, arr) {
    console.log("6. number:", number, "index", index, "arr:", arr);
})

arrayMultiple.forEach(x => console.log(x));


///↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 배열 공부 pop과 다르게 맨 앞 배열 인덱스에 붙이는 함수이기때문에 메모리가 많이 든다.
const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = "gray";
const context = canvas.getContext("2d");

let arcPosX = canvas.width / 2;
let arcPosY = canvas.height / 1.1; //공 시작위치 내리기 값이 커질수록 내려감
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpd = 3;
let rectMoveDirX = 1;
const barWidth = 100;
const barHeight = 20;
const arcRadius = 20;
let barPosX = canvas.width / 2 - barWidth / 2; //막대바 왼쪽끝
let barPosY = canvas.height - barHeight; //막대바 위 표면

//벽돌관련
let brickMoveDirX = 1;
const brickWidth = 50; //간격은 10
const brickHeight = 25; // 간격 5
let brickColumn = 5; //열
let brickRow = 4; //행
// let bricks = []; // 클래스 때문에 주석 처리합니다.
let bricks; // 클래스 때문에 주석 처리합니다.

let brokenbrickcount = 0;


// function printName() {
//     const row1 = document.getElementById('row').value;
//     document.getElementById("result").innerText = row1;
//     // console.log(row1);
//     // return row1;
// }

function printName1() {
    const column1 = document.getElementById('column').value;
    document.getElementById("result1").innerText = column1;
    console.log(column1);
    
    // return column1;
}

let ball = {
    left: 0, right: 0, top: 0, bottom: 0,
};

let paddle = {
    left: 0, right: 0, top: 0, bottom: 0,
};

class Brick {
    constructor(left, top, right, bottom){
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.isAlive = true;
        this.color = "green";
    } //속성에 해당
    draw(){
        if(this.isAlive) {
        context.rect(this.left, this.top, brickWidth, brickHeight);
        context.fillStyle = this.color;
        context.fill();
        }
    }
}

class MovingBrick extends Brick {
    //여기에 상속받아서 위에 속성 갖고있는것과 같다
    drawblack(){
        if(this.isAlive) {
        context.rect(this.left, this.bottom, brickWidth, brickHeight); //그림은 잘나옴.
        context.fillStyle = "black";
        context.fill();
        }
    }
    isCollisionWithBall(rectA, rectB){
        if (rectA.left > rectB.right ||
            rectA.right < rectB.left ||
            rectA.top > rectB.bottom ||
            rectA.bottom < rectB.top) {
            return false;
        } //안겹친다
        return true; // 겹친다
    }
    blackMove() { //좌우로만
        if (this.left - 25 < 0) {
            brickMoveDirX = 1;
        } else if (this.left + 50 > canvas.width) {
            brickMoveDirX = -1;
        }
        this.left += brickMoveDirX;
    }
}
let blackBrickPosX = canvas.width /2;
let blackBrickPosY = canvas.height / 2;
let blackBrick = new MovingBrick(blackBrickPosX-25, blackBrickPosY, blackBrickPosX + 25, blackBrickPosY + 20);
// blackBrick.movingAction();

// function drawBlackBrick() {
//     context.beginPath();
//     context.rect(blackBrick.left, blackBrick.top, blackBrick.right, blackBrick.bottom);
//     context.fillStyle = 'black';
//     context.fill();
//     context.closePath();
// }


//키 함수 추가
document.addEventListener('keydown', keyDownEventHandler);
// document.addEventListener('keyup', keyUpEventHandler);

function setBricks() {

    let row1 = document.getElementById('row').value;
    document.getElementById("result").innerText = row1;
    console.log(row1);

    let column1 = document.getElementById('column').value;
    document.getElementById("result1").innerText = column1;
    console.log(column1);

    brickRow = row1;
    brickColumn = column1;

    console.log("row inpt:", brickRow);
    console.log("col inpt:", brickColumn);
    
    //class

    bricks = [];

    //class

    for (let i = 0; i < brickRow; i++) { //위에서부터 5줄
        bricks[i] = []; //이거 중요하네 
        for (let j = 0; j < brickColumn; j++) {  //가로로 4개

            // bricks[i][j] = {//todo: right = left+ 50
            //     left: 55 + j * (brickWidth + 10),
            //     right: 55 + j * (brickWidth + 10) + 50, //this.left로 된다.
            //     top: 30 + i * (brickHeight + 5),
            //     bottom: 30 + i * (brickHeight + 5) + 25,
            //     column: i, row: j,
            //     isAlive: true, //벽돌 생존 확인
            //     nothingToBreak: false
            // };

            bricks[i][j] = new Brick(
                55 + j * (brickWidth + 10),
                30 + i * (brickHeight + 5),
                55 + j * (brickWidth + 10) + 45,
                30 + i * (brickHeight + 5) + 25,
                "red"
                )
        }
    }
}

function drawBricks() {
    context.beginPath();
    for (let i = 0; i < brickRow; i++) { //위에서부터 4줄
        for (let j = 0; j < brickColumn; j++) {  //가로로 5개
            if (bricks[i][j].isAlive) { //살아있는 것만 그리기
               bricks[i][j].draw();
            }
        }
    }
    context.closePath();
}



function keyDownEventHandler(e) {
    if (e.key == 'ArrowRight') { // && 조건문안에 이렇게 줬었는데 그냥 이중 if를 사용하자...
        if (barPosX + 100 < canvas.width) {
            rectMoveDirX = 20;
        } else if (barPosX + 100 >= canvas.width) {
            rectMoveDirX = 0;
        }
    }
    else if (e.key == 'ArrowLeft') {
        if (barPosX > 0) {
            rectMoveDirX = -20;
        } else if (barPosX <= 0) { // 여기선 +100을 안해준다. rect의 끝을 생각했을 때
            rectMoveDirX = 0;
        }
    }
    else if(e.key == " ") {
        setInterval(update, 10);
    }
    barPosX += rectMoveDirX;

    paddle.left = barPosX;
    paddle.right = barPosX + barWidth;
    paddle.top = barPosY;
    paddle.bottom = barPosY + barHeight;
}

//실습. 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동

context.clearRect(0, 0, canvas.width, canvas.height) //화면을 네모난 모양

function update() {
    //arcposx는 원의 중심이다.
    //여기는 캔버스의 끝과 닿으면 반대로 튕기는 코드
    // blackBrick.blackMove();

    if (arcPosX - arcRadius < 0) {
        arcMoveDirX = 1;
    } else if (arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1;
    }

    if (arcPosY - arcRadius < 0) {
        arcMoveDirY = 1;
    } else if (arcPosY + arcRadius > canvas.height) {
        arcMoveDirY = -1;
    }

    arcPosX += arcMoveDirX * arcMoveSpd;
    arcPosY += arcMoveDirY * arcMoveSpd;
    // arcPosX = arcPosX + arcMoveDir + arcMoveSpd;

    ball.left = arcPosX - arcRadius;
    ball.right = arcPosX + arcRadius;
    ball.top = arcPosY - arcRadius;
    ball.bottom = arcPosY + arcRadius;

    //충돌확인
    // console.log("paddle:", paddle);
    if (isCollisionRectToRect(ball, paddle)) {
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }

    // console.log("blackBrick: ", blackBrick);
    
    if(isCollisionRectToRect(ball, blackBrick)) {
        arcMoveDirY = -1;
        // arcPosY += 1;
    }

    blackBrick.blackMove();

    // 벽돌과 공 충돌확인
    for (let i = 0; i < brickRow; i++) {
        for (let j = 0; j < brickColumn; j++) {
            if (bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j])) { //벽돌이 살아있고 충돌이 일어날때
                //벽돌 안보이게, 위치를 바뀌던지 볼 방향변경
                // console.log("i: ", i, "j:", j);-
                bricks[i][j].isAlive = false;
                arcMoveDirY *= -1;
                brokenbrickcount++;

            }
        }
    }

    checkToWin();

    gameOver();

}

function gameOver() {
    if (arcPosY > 360) {
        window.location.reload(true);
        alert("game over");
    }
}

function checkToWin() {
   
        //1.bricks 배열에 있는 정보
        
        // let flatBricks = bricks.flat();
        // console.log(flatBricks);
        //flat을 해준 상태에서 

        let deadBricks = bricks.flat().filter(brick => brick.isAlive == false); //조건을 확인해서 만족하는 요소들로만 배열을 새로 만든다.
        console.log(bricks);
        if(deadBricks.length == brickColumn * brickRow){
            window.location.reload(true);
            alert("겜 클")
        }

}

function isCollisionRectToRect(rectA, rectB) {
    //a의 왼쪽과 b의 오른쪽
    //aㅁ의 ㅇ른쪽과 b의 왼쪽
    //a의 아래쪽과 b의 위
    //a의 위와 b의 아래
    if (rectA.left > rectB.right ||
        rectA.right < rectB.left ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top) {
        return false;
    } //안겹친다

    return true; // 겹친다
}

function draw() {
    //화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height) //이거 안하면 공 움직이는 모습이 안지워짐
    // drawBlackBrick();
    
    blackBrick.drawblack();
    
    console.log("blackbrick:", blackBrick);
    if(blackBrick.isCollisionWithBall(ball, blackBrick)) {
        console.log("터치 확인");
        arcMoveDirX = -1;
    }
    
    drawRect();
    drawArc();
    drawBricks();
}

function drawRect() {
    context.beginPath();
    context.rect(barPosX, barPosY, barWidth, barHeight);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}

function drawArc() {

    context.beginPath();
    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
}

function wantToStart() {
    alert("겜 할꺼여?");
}

// printName();
// printName1();

wantToStart();
setBricks();

// function keyDownEventHandler(e) {
//     if(e.key == " "){
//         setInterval(update, 10);
//     }
// }


setInterval(draw, 10);
// printName(); //에러가 생기긴함. value 못찾겠다고
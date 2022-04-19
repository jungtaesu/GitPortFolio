/*
    캔버스 설정
    document
    context
*/

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext("2d");

let arcPosX = canvas.width / 2 + 40;
let arcPosY = canvas.height / 2;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpd = 10;
let rectPosX = canvas.width / 2 - 50;
let rectPosY = canvas.height - 20;
let rectMoveDirX = 1;
const barWidth = 100;
const barHeight = 20;
const arcRadius = 20;
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;


let ball = {
    left:0, right:0, top:0, bottom:0,  
};

let paddle = {
    left:0, right:0, top:0, bottom:0,
};

document.addEventListener('keydown', keyDownEventHandler);
document.addEventListener('keyup', keyUpEventHandler);

function keyDownEventHandler(e) {
    if(e.key == 'ArrowRight') { // && 조건문안에 이렇게 줬었는데 그냥 이중 if를 사용하자...
        if(barPosX + 100 < canvas.width) {
            rectMoveDirX = 10;
        } else if (barPosX + 100 >= canvas.width) {
            rectMoveDirX = 0;
        }
    }
    else if(e.key == 'ArrowLeft') {
        if(barPosX> 0){
            rectMoveDirX = -10;
        } else if (barPosX <= 0) { // 여기선 +100을 안해준다. rect의 끝을 생각했을 때
            rectMoveDirX = 0;
        }
    }
    barPosX += rectMoveDirX;

    paddle.left = barPosX;
    paddle.right = barPosX + barWidth;
    paddle.top = barPosY;
    paddle.bottom = barPosY + barHeight;
}


function keyUpEventHandler(e) {

}
//실습. 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동


context.clearRect(0, 0, canvas.width, canvas.height) //화면을 네모난 모양


function update() {
//arcposx는 원의 중심이다.
    if(arcPosX - arcRadius < 0) {
        arcMoveDirX = 1;
    } else if(arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1;
    }

    if(arcPosY - arcRadius < 0) {
        arcMoveDirY = 1;
    } else if(arcPosY + arcRadius > canvas.height) {
        arcMoveDirY = -1;
    }

    arcPosX += arcMoveDirX * arcMoveSpd;
    arcPosY += arcMoveDirY * arcMoveSpd;
    // arcPosX = arcPosX + arcMoveDir + arcMoveSpd;

    ball.left = arcPosX -arcRadius;
    ball.right = arcPosX +arcRadius;
    ball.top = arcPosY - arcRadius;
    ball.bottom = arcPosY +arcRadius;

    //충돌확인
    if(isCollisionRectToRect(ball, paddle)) {
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
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
    context.clearRect(0, 0, canvas.width, canvas.height) //사각형 지우기
    drawRect();
    drawArc();
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


setInterval(update, 10);
setInterval(draw, 10);
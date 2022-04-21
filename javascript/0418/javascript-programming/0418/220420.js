/*
  배열

*/

let testArray = [1, 2, 3, 4, 5];
let testArray2 = new Array(5);

testArray[0] = 100;

for (let i = 0; i < testArray.length; i++) {
    testArray[i];
}

// testArray.push(30);

// testArray.forEach(function(number, index, arr){
//     console.log("2. n:" , number, "i",  index, "a:", arr);
// })

// testArray.pop();

// testArray.forEach(function(number, index, arr){
//     console.log("3. n:" , number, "i",  index, "a:", arr);
// })

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
const brickWidth = 50; //간격은 10
const brickHeight = 25; // 간격 5
let brickColumn = 5; //열
let brickRow = 4; //행
let bricks = [];
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

// let brick = {
//     left:0, right:0, top:0, bottom:0,
//     column:0, row:0, 
// }

let paddle = {
    left: 0, right: 0, top: 0, bottom: 0,
};


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

    for (let i = 0; i < brickRow; i++) { //위에서부터 5줄
        bricks[i] = [];
        for (let j = 0; j < brickColumn; j++) {  //가로로 4개
            bricks[i][j] = {//todo: right = left+ 50
                left: 55 + j * (brickWidth + 10),
                right: 55 + j * (brickWidth + 10) + 50, //this.left로 된다.
                top: 30 + i * (brickHeight + 5),
                bottom: 30 + i * (brickHeight + 5) + 25,
                column: i, row: j,
                isAlive: true, //벽돌 생존 확인
                nothingToBreak: false
            };
        }
    }
}

function drawBricks() {
    context.beginPath();
    for (let i = 0; i < brickRow; i++) { //위에서부터 4줄
        for (let j = 0; j < brickColumn; j++) {  //가로로 5개
            if (bricks[i][j].isAlive) { //살아있는 것만 그리기

                context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight);
                context.fillStyle = 'green';
                context.fill();

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
    if (isCollisionRectToRect(ball, paddle)) {
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }

    // console.log(arcPosY);

    // 벽돌과 공 충돌확인
    for (let i = 0; i < brickRow; i++) {
        for (let j = 0; j < brickColumn; j++) {
            if (bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j])) { //벽돌이 살아있고 충돌이 일어날때
                //벽돌 안보이게, 위치를 바뀌던지 볼 방향변경
                console.log("i: ", i, "j:", j);
                bricks[i][j].isAlive = false;
                arcMoveDirY *= -1;
                brokenbrickcount++;
                // console.log(brokenbrickcount);

                // break;
            } //else { 충돌이 안일어날때도 콘솔이 뜸.
            //     console.log("you win!");
            // }
        }
    }

    noMoreBricks(brickRow,brickColumn); //벽돌없어
    //바닥에 떨어지면/ 패들보다 낮게 떨어지면
    gameOver();

}

function gameOver() {
    if (arcPosY > 360) {
        window.location.reload(true);
        alert("game over");
    }
}


function noMoreBricks(num1, num2) {
    if (brokenbrickcount == num1 * num2) {
        window.location.reload(true);
        alert("game clear")
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

// function isCollisionArctoBrick(arc, bricks){

//     for(let i = 0; i < brickRow; i++){
//         for(let j = 0; j < brickColumn; j++){
//             if(bricks[i][j].left > arc.right ||
//                 bricks[i][j].right < arc.left ||
//                 bricks[i][j].top > arc.bottom ||
//                 bricks[i][j].bottom < arc.top) {

//                     // console.log(bricks[i][j]);
//                 return false;
//                 } else{
//                 arcMoveDirY = -1;
//                 console.log(bricks[i][j]);
//                 // console.log("얘랑 터치", bricks[i][j])
//                 bricks[i][j]="";
//                 // console.log(bricks[i][j]);

//                 }

//          }   
//         }
//     }


function draw() {
    //화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height) //이거 안하면 공 움직이는 모습이 안지워짐
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
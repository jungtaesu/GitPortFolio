const canvas = document.getElementById("soccer");
canvas.style.backgroundColor = "gray";
const context = canvas.getContext("2d"); // canvas의 드로잉 컨텍스트에 접근하는 법

context.clearRect(0, 0, canvas.width, canvas.height)

let arcPosX = canvas.width / 2;
let arcPosY = canvas.height / 1.12;

const barWidth = 100;
const barHeight = 20;
const arcRadius = 20;

let barPosX = (canvas.width / 2) - (barWidth/2);
let barPosY = canvas.height - barHeight;

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
    barPosX += rectMoveDirX;
}


function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
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

setInterval(draw, 100);
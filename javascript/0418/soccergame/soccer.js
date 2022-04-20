const canvas = document.getElementById("soccer");
const context = canvas.getContext("2d"); // canvas의 드로잉 컨텍스트에 접근하는 법

context.clearRect(0, 0, canvas.width, canvas.height)

function draw() {

    context.clearRect(0, 0, canvas.width, canvas.height)
    drawRect();
}

function drawRect() {
    context.beginPath();
    context.rect(100, 100, 40, 50);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}

setInterval(draw, 100);
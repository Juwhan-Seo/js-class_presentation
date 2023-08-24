var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

document.getElementById('generate').addEventListener('click', generateArt);
document.getElementById('clear').addEventListener('click', clearArt);
document.getElementById('colorPalette').addEventListener('input', changeCanvasColor);

function drawRandomShape() {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var size = Math.random() * 100 + 10;
    var color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;

    ctx.fillStyle = color;
    ctx.beginPath();
    if (Math.random() > 0.5) {
        ctx.arc(x, y, size, 0, 2 * Math.PI);
    } else {
        ctx.rect(x, y, size, size);
    }
    ctx.fill();
}

function generateArt() {
    var interval = setInterval(drawRandomShape, 100);
    setTimeout(function () {
        clearInterval(interval);
    }, 5000);
}

function clearArt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function changeCanvasColor() {
    var color = document.getElementById('colorPalette').value;
    canvas.style.backgroundColor = color;
}

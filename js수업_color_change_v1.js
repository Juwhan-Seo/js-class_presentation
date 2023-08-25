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
document.getElementById('changeColor').addEventListener('click', function() {
  changeColor();
});

function changeColor() {
  const colorTransitionDuration = 1000; // 색상 변화 지속 시간 (밀리초)
  const startTime = Date.now();
  const initialColors = shapes.map(shape => shape.color);

  function animateColorTransition() {
    const elapsedTime = Date.now() - startTime;
    const ratio = elapsedTime / colorTransitionDuration;

    if (ratio < 1) {
      shapes.forEach((shape, index) => {
        const [r1, g1, b1] = getColorComponents(initialColors[index]);
        const [r2, g2, b2] = getColorComponents(getRandomColor());
        const r = Math.floor(r1 + (r2 - r1) * ratio);
        const g = Math.floor(g1 + (g2 - g1) * ratio);
        const b = Math.floor(b1 + (b2 - b1) * ratio);
        shape.color = `rgb(${r}, ${g}, ${b})`;
      });
      drawShapes();
      requestAnimationFrame(animateColorTransition);
    }
  }

  animateColorTransition();
}

function getColorComponents(color) {
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : [0, 0, 0];
}

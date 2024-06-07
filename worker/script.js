const canvas = document.getElementById('mandelbrotCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

let maxIterations = 100;
let zoom = 300;
const offsetX = -width / 2;
const offsetY = -height / 2;

const worker = new Worker('worker.js');

worker.onmessage = function(event) {
    const { imageData, width, height } = event.data;
    const imageDataObj = new ImageData(new Uint8ClampedArray(imageData), width, height);
    ctx.putImageData(imageDataObj, 0, 0);
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    document.getElementById('elapsedTime').textContent = `Elapsed Time: ${elapsedTime.toFixed(2)} ms`;
};

let startTime;

function drawMandelbrot() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
    startTime = performance.now();
    worker.postMessage({ width, height, maxIterations, zoom, offsetX, offsetY });
}

document.getElementById('generateButton').addEventListener('click', function() {
    updateMandelbrot();
});

// Toggle button functionality
const toggleButton = document.getElementById('toggleButton');
const additionalContent = document.getElementById('additionalContent');

toggleButton.addEventListener('click', function() {
    if (toggleButton.textContent === 'What Does This Prove?') {
        additionalContent.classList.toggle('active');
        toggleButton.textContent = 'close';
    }
    else {
        additionalContent.classList.toggle('active');
        toggleButton.textContent = 'What Does This Prove?';
    }


});

// Answer button functionality
const answer = document.querySelector('.answer');
const main = document.querySelector('.Mandelbrot');
const answered = document.querySelector('.answer-para');
answered.textContent = "The Mandelbrot set is the set of complex numbers 'c' for which the function f(z) = z^2 + c does not diverge when iterated from z = 0. In other words, the Mandelbrot set is the set of points in the complex plane that remain bounded under repeated iterations of the function. The boundary of the Mandelbrot set is a fractal shape with intricate and beautiful patterns, making it a popular subject for mathematical exploration and visualization.";
answered.style.display = 'none';  // Hide it initially
main.appendChild(answered);

answer.addEventListener('click', function() {
    if (answered.style.display === 'none') {
        answered.style.display = 'block';
        answered.style.fontSize = '0.8rem';
        answer.textContent = 'close';
    } else {
        answered.style.display = 'none';
        answer.textContent = 'answer';
    }
});

// Function to update parameters and redraw Mandelbrot Set
function updateMandelbrot() {
    maxIterations = parseInt(document.getElementById('maxIterationsInput').value);
    zoom = parseInt(document.getElementById('zoomInput').value);
    drawMandelbrot();
}

// Update maxIterations value display
document.getElementById('maxIterationsInput').addEventListener('input', function() {
    document.getElementById('maxIterationsValue').textContent = this.value;
});

// Update zoom value display
document.getElementById('zoomInput').addEventListener('input', function() {
    document.getElementById('zoomValue').textContent = this.value;
});

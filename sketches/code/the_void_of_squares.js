
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

let i = 0;
let j = 270;
function draw() {
  translate(width / 2, height / 2);
  scale(sin(j) + 1);
  for (let x = 0; x <= width; x += 1) {
    rotate(sin(x + i * 2) * 360);
    square(x, noise(x / 50 + i) * 500, 20);    
  }
  i += 0.003;
  j++;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  background(0);
  colI = floor(random(3));
  col = [128 + random(128), 128 + random(128), 128 + random(128)];
  size = 20;
}

let col, colI;
let size;
function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(0.2);
  for (let x = - width; x <= width; x += size) {
    push();
    rotate(sin(90 + x / 4 + frameCount / 4) * 180);
    col[colI] = sin(x / 4 + frameCount) * 255;
    fill(col[0], col[1], col[2], sin(x / 4 + frameCount / 8) * 255);
    rect(x, 0, size, size * x);
    // rect(0, x, size * x, size);
    pop();
  }
}
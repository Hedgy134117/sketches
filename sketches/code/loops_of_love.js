function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  colI = floor(random(3));
  col = [128 + random(128), 128 + random(128), 128 + random(128)];
  size = 10;
}

let col, colI;
let size;
function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(0.5);
  for (let x = - width * 2; x <= width * 2; x += size) {
    push();
    rotate(sin(180 + x / 4 + frameCount / 2) * 360);
    col[colI] = sin(x / 4 + frameCount / 2) * 255;
    fill(col[0], col[1], col[2]);
    rect(x, 0, size, size);
    pop();
  }
}
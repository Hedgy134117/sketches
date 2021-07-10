function setup() {
  createCanvas(windowWidth, windowHeight);
}

let x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0, x4 = 0, y4 = 0;
let off = 0;
let iters = 10;
let c = false;
function draw() {
  noFill();
  stroke(255 * noise(off), 20);
  beginShape();
  for (let i = 0; i < iters; i++) {
    curveVertex(width * noise(off + pow(2, i)), height * noise(off + pow(2, i + 1)));
  }
  endShape();
  off += 1 / 512;
}

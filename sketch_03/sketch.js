let i = 0;
function drawCurve() {
  let middleY = height / 2;
  let range = 75;
  noFill();
  stroke(0, 0, 0, 40);
  beginShape();
  curveVertex(0, middleY);
  curveVertex(0, middleY);
  curveVertex(width / 4, middleY + Math.random() * range);
  curveVertex(3 * width / 4, middleY - Math.random() * range);
  curveVertex(width, middleY);
  curveVertex(width, middleY);
  endShape();
  i++;
}

function setup() {
  createCanvas(400, 400);
}

let drawer = setInterval(drawCurve, 40);
let times = 75;

function draw() {
  if (i >= times) {
    clearInterval(drawer);
  }
}
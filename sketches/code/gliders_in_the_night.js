function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeWeight(5);
  background(0);
  
  let isTanFirst = random() >= 0.5;
  let isSin = random() >= 0.5;
  if (isTanFirst) {
    f1 = tan
    if (isSin) {
      f2 = sin;
    }
    else {
      f2 = cos;
    }
  }
  else {
    f2 = tan
    if (isSin) {
      f1 = sin;
    }
    else {
      f1 = cos;
    }
  }
}

let a = 0;
let size = 10;
let f1, f2;
function draw() {
  if (frameCount % 5 == 0) {
    blendMode(DIFFERENCE);
    background(1);
    blendMode(BLEND);  
  }
  translate(width / 2, height / 2);
  scale(0.5);
  for (let i = - width / 2; i < width / 2; i += size) {
    push();
    stroke(
      128 + noise(2 + frameCount * 0.003) * 128, 
      128 + noise(4 + frameCount * 0.003) * 128, 
      128 + noise(6 + frameCount * 0.003) * 128,
      noise(8 + frameCount * 0.003) * 255
    );
    translate(
      f1(i + frameCount * 0.3) * width / 2, 
      f2(i + frameCount * 0.3) * height / 2
    );
    line(i, i + sin(frameCount) * size, i + size, i + cos(frameCount) * size);
    pop();
  }
}

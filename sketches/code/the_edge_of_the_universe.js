function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  blendMode(DIFFERENCE);
  background(1);
  blendMode(BLEND);
  translate(0, height / 2);
  for (let i = 25; i <= width + 120; i += 10) {
    beginShape();
    stroke(noise((i + frameCount) * 0.02) * 255);
    for (let j = 0; j <= 360; j += 10) {
      let x =
        width / 2 +
        (sin(noise((i + j + frameCount / 2) * 0.003, j * 0.003) * 360) *
          width) /
          2;
      vertex(sin(j) * i + x, cos(j) * i);
    }
    endShape();
  }
}

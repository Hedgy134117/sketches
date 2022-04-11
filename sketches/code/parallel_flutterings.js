function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  stroke("#b5c99a")
  noFill();
}

let step = 50;
let distScale = 0.03
let timeScale = 0.003
function draw() {
  // background(255, 32);
  background("#718355");
  for (let x = 0; x <= width + step; x += step) {
    for (let y = 0; y <= height + step; y += step) {
      push();
      translate(x, y);
      // let pn = noise((x / step) * distScale + (frameCount - 1) * timeScale, (y / step) * distScale + (frameCount - 1) * timeScale)
      let n = noise((x / step) * distScale + frameCount * timeScale, (y / step) * distScale + frameCount * timeScale)
      rotate(n * 720);
      // let vel = abs(n * 1000 - pn * 1000);
      // strokeWeight(max(vel * 10, 2));
      rect(0, 0, sin(y / step * 20 + frameCount) * step, sin(x / step * 20 + frameCount) * step);
      pop();
    }
  }
}
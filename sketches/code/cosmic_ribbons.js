function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(0);
  angleMode(DEGREES);
}

function draw() {
  blendMode(DIFFERENCE);
  background(1, 1, 1);
  blendMode(BLEND);
  for (let i = 0; i < 100; i++) {
    let n2 = noise(i + 2 + frameCount / 250) + 1;
    let n3 = noise(i + 4 + frameCount / 250);
    let n4 = noise(i + 6 + frameCount / 250);
    let n5 = noise(i + 8 + frameCount / 250);
    let n6 = noise(i + 10 + frameCount / 250);
    let n7 = noise(i + 12 + frameCount / 500);
    let n8 = noise(i + 14 + frameCount / 500);
    stroke(n3 * 255, n4 * 255, n5 * 255, n2 * 20)
    bezier(
      0, (1 + cos(90 + n7 * frameCount)) * height / 2,
      n3 * width, n4 * height,
      n5 * width, n6 * height,
      width, (1 + cos(90 + n8 * frameCount)) * height / 2
    );
  }
}

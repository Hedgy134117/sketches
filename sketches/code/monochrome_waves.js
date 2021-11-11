function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0)
}

function draw() {
  for (let x = 0; x <= width; x += 20) {
    for (let y = 0; y <= height; y += 100) {
      push();
      let col = map(x, 0, width, 0, 128);
      fill(sin(frameCount + x + y) * 128 + col);
      rotate(sin(frameCount + x) * sin(frameCount / 10) * 20);
      square(x, y, 5);
      pop();  
    }
  }
}

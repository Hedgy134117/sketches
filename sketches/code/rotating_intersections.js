let offInc = 1 / 256;

class Flow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.off = random(1000);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.div = random(30, 90);
  }

  display() {
    stroke(this.r, this.g, this.b);
    line(
      sin(frameCount / this.div) * 100 + this.x,
      cos(frameCount / this.div) * 100 + this.y,
      width * noise(this.off),
      height * noise(this.off + 10)
    );
    this.off += offInc;
  }
}


let f = [];
let steps = 200;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width; i += steps) {
    f.push(new Flow(i, random(0, height)));
  }
}

function draw() {
  blendMode(ADD);
  background(255, 255, 255, 255 / 200);
  blendMode(BLEND);
  for (let i = 0; i < f.length; i++) {
    f[i].display();
  }
}

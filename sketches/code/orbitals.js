class Orb {
  constructor(x, y, mult, off, col) {
    this.x = x;
    this.y = y;
    this.cx = width / 2;
    this.cy = height / 2;
    this.px = this.cx;
    this.py = this.cy;
    this.mult = mult;
    this.off = off || random(360);
    this.col = col || [255];
    this.weight = random(1, 3);
  }
  
  display() {
    stroke(...this.col);
    fill(...this.col);
    this.cx = this.x + sin(this.x + frameCount) * noise((this.x + frameCount) * 0.003) * cos(this.off + frameCount) * this.mult;
    this.cy = this.y + cos(this.y + frameCount) * noise((this.y + frameCount) * 0.003) * sin(this.off + frameCount) * this.mult;
    strokeWeight(this.weight);
    line(
      this.px,
      this.py,
      this.cx,
      this.cy
    );
    this.px = this.cx;
    this.py = this.cy;
  }
}

let orbs = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  strokeWeight(2);
  for (let x = 0; x <= width; x += 5) {
    col = [random(200, 255), random(200, 255), random(200, 255)];
    for (let i = 0; i < 2; i++) {
      orbs.push(new Orb(x, height / 2, random(height - 200, height), x, col));
    }
  }
}

function draw() {
  blendMode(DIFFERENCE);
  background(5);
  blendMode(BLEND);
  for (let orb of orbs) {
    orb.display();
  }
}

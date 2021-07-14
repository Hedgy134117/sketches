let orbs = [];
let fromC, toC;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(4);
  stroke(255);
  angleMode(DEGREES);
  fromC = color("#540054");
  toC = color("#bf4193");
  for (let i = 1; i <= 100; i += 0.1) {
    orbs.push(new Orb(i));
  }

}

class Orb {
  constructor(off) {
    this.x = width / 2;
    this.y = width / 2;
    this.off = off;
    this.moff = random(1000);
    this.px = this.x;
    this.py = this.y;
    this.neg = random(2) > 1 ? -1 : 1;
    this.col = lerpColor(fromC, toC, off / 100);
  }

  display() {
    stroke(this.col);
    line(this.px, this.py, this.x, this.y);
    this.update();
  }

  update() {
    this.px = this.x;
    this.py = this.y;
    this.x = width / 2 + sin(this.moff + frameCount) * width / this.off;
    this.y = height / 2 + cos(this.moff + frameCount) * height / this.off;
  }
}

let off = 0;
let x, y;
let px, py;
function draw() {
  blendMode(DIFFERENCE);
  background(2);
  blendMode(BLEND);

  for (let orb of orbs) {
    orb.display();
  }
}
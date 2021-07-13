let c = [];

let fromL, toL;
let fromR, toR;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  angleMode(DEGREES);

  background(0);

  fromL = color("#2B2F77");
  toL = color("#483475");

  for (let j = 0; j < 5; j++) {
    for (let i = -20; i <= height; i += 20) {
      c.push(new Circle(
        floor(random(-1000, 0)),
        i,
        (i + 20) / height
      ));
    }
  }
}

class Circle {
  constructor(xOff, yOff, colInd) {
    this.x = xOff;
    this.y = yOff;
    this.px = this.x;
    this.py = this.y;
    this.off = floor(random(0, 360));
    this.xOff = xOff;
    this.yOff = yOff;
    this.xInc = 5;

    this.colInd = colInd;
    this.col = lerpColor(fromL, toL, colInd);

    this.switched = false;

    this.height = floor(random(10, 40));
    this.heightSpeed = floor(random(4, 8));
  }

  display() {
    stroke(this.col);
    line(this.px, this.py, this.x, this.y);
    this.px = this.x;
    this.py = this.y;
    this.update();
  }

  update() {
    this.x += this.xInc;
    this.y = sin(this.off + frameCount * this.heightSpeed) * this.height + this.yOff;
    if (this.x > width) {
      this.xInc *= -1;
      this.switched = true;
    }
    else if (this.switched && this.x < this.xOff) {
      this.col = lerpColor(fromL, toL, this.colInd);
      this.xInc *= -1;
    }
  }
}

function draw() {
  blendMode(DIFFERENCE);
  background(1, 1, 1);
  blendMode(BLEND);
  for (let circ of c) {
    circ.display();
  }
}
let circs = [];
let hw, hh;
let colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  hw = width / 2;
  hh = height / 2;
  angleMode(DEGREES);


  let mode = ['s', 'c', 't']
  let modeX = mode[floor(random(0, mode.length))];
  let modeY = mode[floor(random(0, mode.length))];
  console.log(modeX, modeY);
  let steps = 300;
  for (let i = 1; i < steps; i++) {
    let xoff, yoff;
    xoff = calculateOff(i, modeX) * hw / 4;
    yoff = calculateOff(i, modeY) * hh / 4;
    circs.push(new Circ(
      xoff,
      yoff,
      true, true, 0, i / 20, 20
    ));
  }
  // for (let i = 1; i < 100; i++) {
  //   circs.push(new Circ(i / 2, i / 2, true, true, 0, i / 10, 20));    
  // }
}

function calculateOff(i, m) {
  switch (m) {
    case 's':
      return sin(i);
    case 'c':
      return cos(i);
    case 't':
      return tan(i);
  }
}

class Circ {
  constructor(xoff, yoff, xp, yp, i, speed, size) {
    this.i = i;
    this.x = hw + sin(this.i * this.speed) * hw;
    this.y = hh + cos(this.i * this.speed) * hh;
    this.px = this.x;
    this.py = this.y;
    this.xoff = xoff;
    this.yoff = yoff;
    this.speed = speed;
    this.size = size;
    this.xfunc = xp ? this.calcXPlu : this.calcXMin;
    this.yfunc = yp ? this.calcYPlu : this.calcYMin;
    this.col = colors[floor(random(0, colors.length))];
  }

  display() {
    strokeWeight(this.size);
    stroke(this.col);
    line(this.x, this.y, this.px, this.py);
  }

  update() {
    this.px = this.x;
    this.py = this.y;
    this.xfunc();
    this.yfunc();
    this.i += 0.5;
  }

  calcXPlu() {
    this.x = hw + this.xoff - sin(this.i * this.speed) * (hw - this.xoff - this.size / 2);
  }

  calcXMin() {
    this.x = hw - this.xoff - sin(this.i * this.speed) * (hw - this.xoff - this.size / 2);
  }

  calcYPlu() {
    this.y = hh + this.yoff + cos(this.i * this.speed) * (hh - this.yoff - this.size / 2);
  }

  calcYMin() {
    this.y = hh - this.yoff - cos(this.i * this.speed) * (hh - this.yoff - this.size / 2);
  }
}

function draw() {
  blendMode(ADD);
  background(255, 50);
  blendMode(BLEND);
  for (let circ of circs) {
    circ.display();
    circ.update();
  }
}

let rains = [];
let cols = ["#001244", "#005086", "#318fb5", "#b0cac7"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  for (let i = 0; i < 200; i++) {
    rains.push(generateNewRain());
  }
}

function generateNewRain() {
  return new Rain(random(width), random(-height, -200), random(10, 100), random(255));
}

class Rain {
  constructor(x, y, length, opacity) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.opacity = opacity;
    this.vel = 0;
    this.acc = 1 / random(10, 30);
    this.wind = 1 / random(-10, 10);
    this.col = cols[floor(random(cols.length))];
  }

  display() {
    stroke(this.col);
    line(this.x, this.y, this.x + this.wind, this.y + this.length);
    this.vel += this.acc;
    this.y += (sin(this.vel) + 1) * 5;
    this.x += this.wind;
    if (this.y >= height || this.x >= width || this.x <= 0) {
      rains[rains.indexOf(this)] = generateNewRain();
    }
  }
}

function draw() {
  background("#f7d6bf");
  for (let i = 0; i < rains.length; i++) {
    rains[i].display();
  }
}
let hw, hh;
let p, g;
function setup() {
  createCanvas(windowWidth, windowHeight);
  hw = width / 2;
  hh = height / 2;
  g = new Grid(20);
  p = []
  background(0);
  g.draw();
  for (let i = 0; i < 500; i++) {
    p.push(new Particle());
  }
}

class Grid {
  constructor(spacing) {
    this.spacing = spacing;
    this.grid = {}
  
    let i = 0;
    let j = 0;
    for (let y = 0; y <= height; y += this.spacing) {
      for (let x = 0; x <= width; x += this.spacing) {
        let noiseVal = noise(x * 0.005, y * 0.005);
        noiseVal = map(noiseVal, 0, 1, 0, 360);
        this.grid[[x, y]] = noiseVal;
      }
    }
  }

  draw() {
    angleMode(DEGREES);
    for (let y = 0; y <= height; y += this.spacing) {
      for (let x = 0; x <= width; x += this.spacing) {
        let n = this.grid[[x, y]];
        strokeWeight(1);
        stroke(255);
        let xp = (x + this.spacing / 2) + (sin(n) * this.spacing)
        let yp = (y + this.spacing / 2) + (cos(n) * this.spacing)
        line(
          x + this.spacing / 2, 
          y + this.spacing / 2, 
          xp, 
          yp
        );
        stroke(255, 128, 128);
        strokeWeight(3);
        point(xp, yp);
      }
    }
  }
  
  getQuad(xPos, yPos) {
    for (let y = 0; y <= height; y += this.spacing) {
      for (let x = 0; x <= width; x += this.spacing) {
        if (xPos == x & yPos == y) {
          return this.grid[[x, y]];
        }
        else if (
          xPos < x + this.spacing &&
          xPos > x &&
          yPos < y + this.spacing && 
          yPos > y
        ) {
          return this.grid[[x, y]];
        }
      }
    }
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = random(3, 5);
    let colMap = map(this.speed, 3, 5, 0, 255);
    this.col = color(colMap, colMap, colMap);
    this.velX = 0;
    this.velY = 0;
  }
  
  display() {
    strokeWeight(10);
    stroke(this.col);
    point(this.x, this.y);
    this.update();
  }
  
  update() {
    this.x += this.velX;
    this.y += this.velY;
    this.wrap();
    this.changeVel();
  }
  
  changeVel() {
    let n = g.getQuad(this.x, this.y);
    if (n !== undefined) {
      this.velX = sin(n) * this.speed;
      this.velY = cos(n) * this.speed;
    }
  }
  
  wrap() {
    if (this.x >= width) { // right
      this.x = random(width);
      this.y = random(height);
    }
    else if (this.x < 0) { // left
      this.x = random(width);
      this.y = random(height);
    }
    else if (this.y >= height) { // bottom
      this.x = random(width);
      this.y = random(height);
    }
    else if (this.y < 0) { // top
      this.x = random(width);
      this.y = random(height);
    }
  }
}

function draw() {
  background(0);
  if (keyIsPressed) {
    g.draw();    
  }
  for (let part of p) {
    part.display();
  }
}

let hw, hh;
let p, g;
let cols = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  hw = width / 2;
  hh = height / 2;
  g = new Grid(25);
  p = []
  for (let i = 0; i < 400; i++) {
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
        // let noiseVal = noise(x * 0.03, y * 0.03);
        let noiseVal = noise(i, j);
        this.grid[[x, y]] = noiseVal;
      	i += 0.005;
      }
      j += 0.003;
    }
  }

  draw() {
    noStroke();
    for (let y = 0; y <= height; y += this.spacing) {
      for (let x = 0; x <= width; x += this.spacing) {
        let n = this.grid[[x, y]];
        if (n >= 0.6) {
          fill(255, 64, 64)
        }
        else if (n >= 0.5) {
          fill(255, 128, 128)
        }
        else if (n >= 0.4) {
          fill(64, 255, 64)
        }
        else {
          fill(128, 255, 128)
        }
        rect(x, y, this.spacing, this.spacing);
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
    this.x = random(0, width);
    this.y = random(0, height);
    this.velX = random(-5, 5);
    this.velY = random(-5, 5);
		this.col = cols[0];
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
    this.bounceIfOut();
    this.changeVel();
  }
  
  changeVel() {
    let n = g.getQuad(this.x, this.y);
    if (n >= 0.6) {
      this.velX -= 0.5;
			this.col = cols[0];
    }
    else if (n >= 0.5) {
      this.velX -= 0.1;
			this.col = cols[1];
    }
    else if (n >= 0.4) {
      this.velX += 0.5;
			this.col = cols[3];
    }
    else if (n >= 0) {
      this.velX += 0.1;
			this.col = cols[4];
    }
  }
  
  bounceIfOut() {
    if (this.x >= width) { // right
      this.velX = -5;
    }
    else if (this.x < 0) { // left
      this.velX = 5;
    }
    else if (this.y >= height) { // bottom
      this.velY = -5;
    }
    else if (this.y < 0) { // top
      this.velY = 5;
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

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(10);
}

let angle = 0;
let step = 5;
let crandom;
let prandom;
let iters = [];

class Iteration {
  constructor(points, r, g, b) {
    this.points = points;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = 255;
  }
  
  display() {
    stroke(this.r, this.g, this.b, this.a);
    for (let i = 0; i < this.points.length - 1; i++) {
      line(
        this.points[i].x, this.points[i].y,
        this.points[i + 1].x, this.points[i + 1].y
      );
      this.points[i].y -= 4;
      this.points[i + 1].y -= 4;
    }
    
    this.a -= 20;
    
    if (this.a <= 0) {
      iters.splice(iters.indexOf(this), 1);
    }
  }
}

function draw() {
  background(0);
  for (let iter of iters) {
    iter.display();
  }
  
  
  let s1 = 128 + noise(angle) * 128;
  let s2 = 128;
  let s3 = 128;
  stroke(s1, s2, s3);
  
  let curIter = new Iteration([], s1, s2, s3);
  for (let x = -step; x < width - step; x += step) {
    crandom = noise(angle, x / 200); // spikiness
    
    let prevX = x;
    let prevY = height * prandom;
    let curX = x + step;
    let curY = height * crandom;
    line(prevX, prevY, curX, curY);
    
    curIter.points.push({
      'x': prevX,
      'y': prevY
    });
    curIter.points.push({
      'x': curX,
      'y': curY
    });
    
    prandom = crandom;
    angle += 1 / 50000; // speed
  }
  iters.push(curIter);
}

class Line {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.randomize();
  }
  
  display() {
    if (this.isNeg) {
      line(this.x, this.y, this.x + this.length, this.y + this.length);
    }
    else {
      line(this.x, this.y + this.length, this.x + this.length, this.y);
    }
  }
  
  randomize() {
    this.isNeg = Math.random() >= .5;
  }
  
  flip() {
    this.isNeg = !this.isNeg;
  }
}

let size = 50;

function createLines() {
  lines = [];
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      let line = new Line(x, y, size);
      lines.push(line);      
    }
  }
}

let i = 0;
function display() {
  if (i >= lines.length) {
    return;
  }
  lines[i].display();
  i++;
}

function setup() {
  createCanvas(400, 400);
  createLines();
  setInterval(display, 10);
}
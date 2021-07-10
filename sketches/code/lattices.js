class L {
  constructor(x, y, col) {
    this.px = x;
    this.py = y;
    this.x = x;
    this.y = y;
    this.dx = random(5, 50);
    this.dy = random(5, 50);
    this.col = col;
  }

  display() {
    strokeWeight(5);
    stroke(this.col);
    line(this.px, this.py, this.x, this.y);
    this.px = this.x;
    this.py = this.y;
    this.x += (sin(frameCount / this.dx) / PI) * 10;
    this.y += (cos(frameCount / this.dy) / PI) * 10;
    this.dx += 0;
  }
}

let a;
let ls = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  let steps = 200;
  let colors = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
  let prevCol = '';
  for (let i = 0; i < width; i += steps) {
    for (let j = 0; j < height; j += steps) {
      let col = Math.floor(random(0, 5));
      while (col == prevCol) {
        col = Math.floor(random(0, 5));
      }
      ls.push(new L(i, j, colors[col]));
      prevCol = col;
    }
  }
}

function draw() {
  // blendMode(LIGHTEST);
  // background('rgba(200, 200, 200, 0.01)');
  // blendMode(BLEND);
  for (let l of ls) {
    l.display();
  }
}

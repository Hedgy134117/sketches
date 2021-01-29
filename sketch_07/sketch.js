const randRange = (min, max) => Math.random() * (max - min) + min;

let clusters = [];
function setup() {
  createCanvas(400, 400);
  strokeWeight(0)
  for (let i = 0; i < Math.floor(randRange(1, 8)); i++) {
    let newCluster = new Cluster(randRange(0, 400), randRange(0, 400));
    clusters.push(newCluster);
  }
}

class Cluster {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.i = 0;
    this.j = 0;
    this.h = 0;
  }
  
  update() {
    let x = this.h * cos(this.j) + this.x + randRange(-10, 10);
    let y = this.h * sin(this.i) + this.y + randRange(-10, 10);
    ellipse(x, y, 10, 10);
    this.h = randRange(1, 20);
    fill(randRange(200, 255), randRange(200, 255), randRange(200, 255));
    this.i += randRange(-0.01, 0.1);
    this.j += randRange(-0.01, 0.1);
    
    this.x += randRange(-10, 10);
    this.y += randRange(-10, 10);
    
    this.reset();
  }
  
  reset() {
    if (this.x < 0 || this.x > 400 || this.y < 0 || this.y > 400) {
      this.x = randRange(0, 400);
      this.y = randRange(0, 400);
    }
  }
}

function draw() {  
  for (let i = 0; i < clusters.length; i++) {
    clusters[i].update();
  }
}

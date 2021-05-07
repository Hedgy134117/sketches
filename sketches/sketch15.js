class Thing {
  constructor(cx, cy) {
    this.cx = cx;
    this.cy = cy;
    this.r = random(50, 200);
    this.za = Math.floor(random(1, 8));
    this.zb = Math.floor(random(1, 8));
    this.off = random(0, 1000);
    this.inc = 1 / random([150, 200, 256, 512]);
  }
  
  display() {
    let n = noise(this.off);
    let n2 = noise(this.off + 2);
    let n3 = noise(this.off + 4);
    noFill();
    stroke(100 + n * 128, 100 + n2 * 128, 100 + n3 * 128, 10);
    for (let i = 0; i < 100; i++) {
      line(this.cx + cos(i) * this.r + n * this.r, 
            this.cy + sin(i) * this.r + n2 * this.r,
            this.cx + cos(i + this.za) * this.r + n * this.r, 
            this.cy + sin(i + this.zb) * this.r + n2 * this.r
           );  
    }
    this.za += n / 100;
    this.zb += n2 / 100;
    this.off += this.inc;
  }
  
  update() {
    
  }
}

let t = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
	let steps = 100;
  for (let i = 0; i < width; i += steps) {
    t.push(new Thing(
      random(0, width), random(0, height)
    ));
  }
}

let r = 100;
function draw() {
  for (let i = 0; i < t.length; i++) {
    t[i].display();
  }
}

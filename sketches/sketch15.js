class Thing {
  constructor(cx, cy) {
    this.cx = cx;
    this.cy = cy;
    this.r = 100;
    this.za = Math.floor(random(1, 8));
    this.zb = Math.floor(random(1, 8));
    this.off = random(0, 1000);
    this.inc = 1 / random([256, 512]);
  }
  
  display() {
    let n = noise(this.off);
    let n2 = noise(this.off + 2);
    let n3 = noise(this.off + 4);
    noFill();
    stroke(n * 256, n2 * 256, n3 * 256, 128);
    for (let i = 0; i < 100; i++) {
      line(this.cx + cos(i) * r + n * r, 
            this.cy + sin(i) * r + n2 * r,
            this.cx + cos(i + this.za) * r + n * r, 
            this.cy + sin(i + this.zb) * r + n2 * r
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
  let steps = 100;
  for (let i = 0; i < width; i += steps) {
    t.push(new Thing(
      random(0, width), random(0, height)
    ));
  }
}

let r = 100;
function draw() {
  blendMode(ADD);
  background(255, 255, 255, 1);
  blendMode(BLEND);
  for (let i = 0; i < t.length; i++) {
    t[i].display();
  }
}

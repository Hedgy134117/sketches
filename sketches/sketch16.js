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
    stroke(n * 256, n2 * 256, n3 * 256, 255);
    for (let i = 0; i < 100; i++) {
      line(this.cx + cos(i) * this.r,
        this.cy + sin(i) * this.r,
        this.cx + cos(i + this.za) * this.r,
        this.cy + sin(i + this.zb) * this.r
      );
    }
    this.za += n / 100;
    this.zb += n2 / 100;
    this.off += this.inc;
  }

  update() {

  }
}

let t;
function setup() {
  createCanvas(windowWidth, windowHeight);
  t = new Thing(
    width / 2, height / 2
  );
  t.r = width / 2.2;
}

function draw() {
  blendMode(ADD);
  background(255, 255, 255, 1);
  blendMode(BLEND);
  t.display();
}

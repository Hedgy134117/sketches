let hw, hh;
let p = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	noFill();
	angleMode(DEGREES);
	hw = width / 2;
	hh = height / 2;
	let ponds = 10;
	let offset = 0;
	for (let i = 0; i < ponds; i++) {
		offset = i * 100;
		let q = random(width);
		let q2 = random(height);
		for (let x = 0; x <= width; x += 50) {
			let po = new Point(x, hh);
			po.off = offset + sin(x);
			po.col = color(noise(offset / 750) * 255, noise(offset / 750 + 2) * 255, noise(offset / 750 + 4) * 255);
			po.quad = q;
			po.quad2 = q2;
			p.push(po);
		}
	}
}

class Point {
	constructor(x, y) {
		this.off = random(10000);
		this.x = x;
		this.y = y;
	}

	display() {
		this.update();
		strokeWeight(4);
		stroke(this.col);
		point(this.x, this.y);
	}

	update() {
		this.x = this.quad / 2 + noise(this.off) * this.quad / 2;
		this.y = this.quad2 / 2 + noise(this.off + 2) * this.quad2 / 2;
		this.off += 0.003
	}
}

let circs = 2;
let offs = 0;
function draw() {
	blendMode(ADD);
	background(255, 5);
	blendMode(BLEND);
	for (let po of p) {
		po.display();
	}
}

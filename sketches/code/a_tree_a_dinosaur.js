let orbs = [];
let boundsX;
function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	noFill();
	stroke(251, 195, 74);
	strokeWeight(5);
	background(0);
	if (width > height) {
		boundsX = [width / 2 - height / 2, width / 2 + height / 2];		
	}
	else {
		boundsX = [0, width];
	}
}

class Orb {
	constructor(theta) {
		this.theta = theta;
		this.life = 500;
		this.col = color(255, 255, 255);
		// this.x = height / 2 + sin(theta) * width / 2;
		// this.y = height / 2 + sin(theta) * height / 2;
		this.x = width / 2;
		this.y = 3 * height / 4;
		this.vel = createVector(cos(theta) * 2, sin(theta) * 2);
		// this.acc = createVector((0.5 - noise(this.theta * 0.03)) * 2, (0.5 - noise(this.theta * 0.03)) * 2);
		this.acc = createVector(0, 0);
	}
	
	display() {
		// stroke(this.col);
		strokeWeight(lerp(0, 5, this.life / 500));
		point(this.x, this.y);
		this.x += this.vel.x;
		this.y += this.vel.y;
		this.update();
	}
	
	update() {
		this.vel.x += this.acc.x;
		this.vel.y += this.acc.y;
		if (this.x > boundsX[1] || this.x < boundsX[0]) {
			this.vel.x *= -1;
		}
		if (this.y > height || this.y < 0) {
			this.vel.y *= -1;
		}
		this.life -= 1;
		if (this.life <= 0) {
			orbs.splice(this, 1);
		}
	}
}

function draw() {
	if (frameCount % 2 == 0) {
		orbs.push(new Orb(sin(noise(frameCount * 0.001) * 360) * 360));
		orbs.push(new Orb(180 + sin(noise(frameCount * 0.001) * 360) * 360));	
	}
	// orbs.push(new Orb(noise(frameCount * 0.003) * 360));
	background(64, 62, 68, 10);
	for (let i = 0; i < orbs.length; i++) {
		orbs[i].display();
	}
	copy(20, 20, width - 20 * 2, height - 20 * 2, 0, 0, width - 0 * 2, height - 0 * 2);
	// copy(
	// 	40 + floor(boundsX[0]), 
	// 	40, 
	// 	height - 40 * 2, 
	// 	height - 40 * 2, 
	// 	floor(boundsX[0]), 
	// 	0, 
	// 	height - 0 * 2, 
	// 	height - 0 * 2
	// );
}
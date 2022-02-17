let squares = [];
let start = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// rectMode(CENTER);
	angleMode(DEGREES);
	start = random(360);
	start = 0;
	background(0);
	noStroke();
}

function draw() {
	if (frameCount < 180) {
		let velX = tan(start + frameCount * 2) * 2;
		if (abs(velX) > 5) {
			if (velX > 0) {
				velX = 5;
			}
			else {
				velX = -5;
			}
		}
		squares.push({
			"x": width / 2,
			"y": height / 2,
			// "vel": createVector(random(-5, 5), random(-5, 5))
			// "vel": createVector(sin(start + frameCount * 2) * 2, cos(start + frameCount * 2) * 2)
			"vel": createVector(velX, sin(start + frameCount * 2))
			// "vel": createVector((0.5 - noise(frameCount * 0.03)) * 4, (0.5 - noise(0, frameCount * 0.03)) * 4)
		});
	}
	background(0, 10);
	for (let i = 0; i < squares.length; i++) {
		let s = squares[i];
		push();
		translate(s.x ,s.y);
		fill(
			noise(s.x * 0.001, s.y * 0.001) * 255, 
			noise(1 + s.x * 0.001, s.y * 0.001) * 255,
			noise(s.x * 0.001, 1 + s.y * 0.001) * 255
		);
		// scale((0.5 - noise(s.x * 0.003, s.y * 0.003)) * 10); // ??????
		// rotate(s.x);
		rotate(sin(s.x) * 360);
		square(0, 0, 10);
		s.x += s.vel.x;
		// s.vel.x += (0.5 - noise(s.x * 0.003))
		// if (s.x >= width / 2 + height / 2 || s.x < width / 2 - height / 2) {
		if (s.x >= width || s.x < 0) {
			s.vel.x *= -1;
		}
		s.y += s.vel.y;
		// s.vel.y += (0.5 - noise(0, s.x * 0.003))
		if (s.y >= height || s.y < 0) {
			s.vel.y *= -1;
		}
		pop();
	}
	// copy(sin(frameCount) * 20, cos(frameCount) * 20, width - cos(frameCount) * 40, height - sin(frameCount) * 40, 0, 0, width - 0 * 2, height - 0 * 2);
	// copy(20, 20, width - 20 * 2, height - 20 * 2, 0, 0, width - 0 * 2, height - 0 * 2);
}

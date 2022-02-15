let points = [];
let r = 100;
function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	points.push({"x": width / 2, "y": height / 2, "r": 10, "s": 1});
	for (let i = 0; i < 5; i++) {
		points.push({
			// "x": noise(i * 0.03) * width,
			"x": width / 2 + random(-width / 4, width / 4),
			"y": height / 2 + random(-height / 4, height / 4),
			"r": random(25, 100),
			"s": random(1, 3),
		});
	}
	background(0);
	noFill();
}

function draw() {
	if (frameCount % 2 == 0) {
		blendMode(DIFFERENCE);
		background(1, 1, 1);
		blendMode(BLEND);
	}
	background(11, 19, 84, 1);
	stroke(247, 101, 163, 48);
	beginShape();
	vertex(points[0].x + cos(frameCount * points[0].s) * points[0].r, points[0].y + sin(frameCount * points[0].s) * points[0].r);
	for (let p of points) {
		curveVertex(p.x + cos(frameCount * p.s) * p.r, p.y + sin(frameCount * p.s) * p.r)
	}
	vertex(points[0].x + cos(frameCount * points[0].s) * points[0].r, points[0].y + sin(frameCount * points[0].s) * points[0].r);
	vertex(points[0].x + cos(frameCount * points[0].s) * points[0].r, points[0].y + sin(frameCount * points[0].s) * points[0].r);
	endShape();
}
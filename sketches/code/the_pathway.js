let m = 20;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	angleMode(DEGREES);
}

let n = 10;
let s = 5;
function draw() {
	background(74, 98, 116, 10);
	noFill();
	stroke("f9ddd2")
	strokeWeight(3);
	copy(m, m, width - m * 2, height - m * 2, 0, 0, width, height);
	beginShape();
	vertex(0, height / 3);
	for (let i = 0; i <= n; i++) {
		curveVertex(
			lerp(0, width, i / n), 
			height / 3 + sin(noise(i) * 360 + frameCount / 2) * s
		);
	}
	vertex(width, height / 3);
	endShape();
	beginShape();
	vertex(0, height * 2 / 3);
	for (let i = 0; i <= n; i++) {
		curveVertex(
			lerp(0, width, i / n), 
			height * 2 / 3 + sin(noise(n + i) * 360 + frameCount / 2) * s
		);
	}
	vertex(width, height * 2 / 3);
	endShape();
	fill("f9ddd2");
	for (let x = -width; x <= width; x += 20) {
		circle(x + sin(frameCount / 8) * width / 2, height / 2 + cos(x / 2 + frameCount * 2) * 10, 20);		
	}
}
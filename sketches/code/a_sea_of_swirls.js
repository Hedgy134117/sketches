let s = 20;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// rectMode(CENTER);
	noFill();
	// strokeWeight(5);
	stroke(255);
}

function draw() {
	blendMode(DIFFERENCE);
	background(5);
	blendMode(BLEND);
	for (let x = width / 2 - height / 2; x <= width / 2 + height / 2 + s; x += s * 2) {
	// for (let x = 0; x <= width + s; x += s * 2) {
		for (let y = 0; y <= height + s; y += s * 2) {
			push();
			translate(x, y);
			rotate(
				noise(x * 0.0005 + frameCount * 0.001, y * 0.0005 + frameCount * 0.001) * 180
			);
			// rotate(
			// 	noise(x * 0.00005, y * 0.00005) * 360
			// );
			stroke(
				noise(x * 0.0005 + frameCount * 0.005, y * 0.0005 + frameCount * 0.005, 1) * 255,
				noise(x * 0.0005 + frameCount * 0.005, y * 0.0005 + frameCount * 0.005, 2) * 255,
				noise(x * 0.0005 + frameCount * 0.005, y * 0.0005 + frameCount * 0.005, 3) * 255
			);
			// scale(noise(x * 0.005 + frameCount * 0.008, y * 0.005 + frameCount * 0.001));
			square(0, 0, s);
			pop();
		}
	}
}
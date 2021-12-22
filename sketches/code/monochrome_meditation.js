function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	noFill();
	angleMode(DEGREES);
}

function draw() {
	if (frameCount < 255) {
		background(255, 255 - frameCount);
	}
	translate(width / 2, height / 2);
	scale(2);
	for (let i = height; i > 0; i -= 5) {
		push();
		stroke(noise(1, (i + frameCount) * 0.008) * 255);
		rotate(noise((i + frameCount) * 0.003) * 360);
		square(0, 0, i);
		pop();
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	noFill();
	rectMode(CENTER);
	stroke(0, 50);
}

function draw() {
	background(50);
	// let m = round(noise(frameCount * 0.003) * 100);
	// let m = min(frameCount / 5, 50);
	let m = 100;
	for (let i = 0; i < m; i++) {
		push();
		// translate(
		// 	noise(i * 0.02+ frameCount * 0.003) * width , 
		// 	height / 2
		// );
		translate(
			lerp(width, 0, i / m),
			noise(i * 0.02 + frameCount * 0.003) * height
		);
		// translate(
		// 	noise(2 + i * 0.02 + frameCount * 0.003) * width,
		// 	noise(i * 0.02 + frameCount * 0.003) * height
		// );
		scale(lerp(0, 3, i / m));
		// scale(noise(i * 0.03, frameCount * 0.005) * 3);
		rotate(i / m * 360 + frameCount);
		// rotate(noise(i * 0.005 + frameCount * 0.001) * 4 * i * 45);
		// rotate(noise(i * 0.05, frameCount * 0.005) * 360);
		stroke(
			noise(i * 0.005, frameCount * 0.001) * 255, 
			noise(1 + i * 0.005, frameCount * 0.001) * 255, 
			noise(2 + i * 0.005, frameCount * 0.001) * 255,
			lerp(128, 255, i / m)
		);
		rect(0, 0, 50);
		pop();
	}
}
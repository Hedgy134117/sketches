let hw, hh;
function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	noFill();
	hw = width / 2;
	hh = height / 2;
	stroke(255, 69, 0, 10);
	background("#FAEBD7");
}

function draw() {
	beginShape();
	for (let i = 0; i < 10; i++) {
		curveVertex(
			hw + cos(noise(i) * 360 + frameCount / 2) * hh, 
			hh + sin(noise(100 + i) * 360 + frameCount / 2) * hh
		);
	}
	endShape();
}
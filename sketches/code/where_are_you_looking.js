function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background("#d5bdaf");
	stroke("#edede9");
	noFill();
	// fill(255, 10);
}

let step = 20;
let distScale = 0.1
let timeScale = 0.005
let wScale = 5
function draw() {
	background(213, 189, 175, 10);
	for (let x = 0; x <= width + step * 2; x += step * 2) {
		for (let y = 0; y <= height + step * 2; y += step * 2) {
			wScale = noise(x / step * distScale + frameCount * timeScale, y / step * distScale + frameCount * timeScale);
			wScale *= 50;
			beginShape();
			vertex(x + sin(x / step * 5 + frameCount) * wScale, y + cos(y / step * 10 + frameCount) * wScale);
			vertex(x - step + cos(x / step * 5 + frameCount) * wScale, y + sin(y / step * 10 + frameCount) * wScale);
			vertex(x - step + sin(x / step * 5 + frameCount) * wScale, y - step + cos(y / step * 10 + frameCount) * wScale);
			vertex(x + cos(x / step * 5 + frameCount) * wScale, y - step + sin(y / step * 10 + frameCount) * wScale);
			vertex(x + sin(x / step * 5 + frameCount) * wScale, y + cos(y / step * 10 + frameCount) * wScale);
			endShape();
		}
	}
}
let tileSize = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  for (let x = -tileSize; x <= width + tileSize; x += tileSize) {
    for (let y = -tileSize; y <= height + tileSize; y += tileSize) {
      tile(x, y);
    }
  }
}

function tile(x, y) {
  let lines = floor(random(30, 50));
  let lineStep = 25;
  let noiseScale = 0.008;
  let colorScale = 0.001;
  for (let y1 = y; y1 <= y + tileSize; y1 += (tileSize / lines)) {
    stroke(
      255,
      128 + noise(x * colorScale + 1, y1 * colorScale + 1) * 128,
      128 + noise(x * colorScale + 2, y1 * colorScale + 2) * 128
    );
    beginShape();
    for (let x1 = x; x1 <= x + tileSize; x1 += lineStep) {
      vertex(
        noise(x1 * noiseScale, y1 * noiseScale) * 50 + x1, 
        noise(x1 * noiseScale + 1, y1 * noiseScale + 1) * 50 + y1
      );
    }
    endShape();
  }
}

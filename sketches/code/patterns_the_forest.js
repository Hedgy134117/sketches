let size = 10;
let cols = ["#D3E4CD", "#ADC2A9", "#99A799"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  ellipseMode(CORNER);
  background("#FEF5ED");
  for (let x = 0; x <= width; x += size) { 
    for (let y = 0; y <= height; y += size) {
      tile(x, y);
    }
  }
}

function tile(x, y) {
  let r = floor(random(3));
  let col = floor(noise(x * 0.005, y * 0.005) * 3);
  fill(cols[col]);
  switch(r) {
    case 0:
      square(x, y, size);
      break;
    case 1:
      circle(x, y, size);
      break;
    case 2:
      triangle(x, y + size, x + size / 2, y, x + size, y + size);
      break;
  }
}

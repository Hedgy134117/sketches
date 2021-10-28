let tileSize = 20;
let elSize = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x <= width; x += tileSize) {
    for (let y = 0; y <= height; y += tileSize) {
      tile(x, y);      
    }
  }
}

function tile(x, y) {
  stroke(
    noise(x * 0.003, y * 0.003) * 255,
    noise(1 + x * 0.003, 1 + y * 0.003) * 255,
    noise(2 + x * 0.003, 2 + y * 0.003) * 255
  );
  strokeWeight(4);
  let r = floor(random(3));
  
  switch(r) {
    case 0:
      for (let y2 = y; y2 <= y + tileSize; y2 += elSize) {
        line(x, y2, x + tileSize, y2);
      }
      break;
    case 1:
      for (let x2 = x; x2 <= x + tileSize; x2 += elSize) {
        line(x2, y, x2, y + tileSize);
      }
      break;
    case 2:
      for (let x2 = x; x2 <= x + tileSize - elSize; x2 += elSize) {
        for (let y2 = y; y2 <= y + tileSize - elSize; y2 += elSize) {
          line(x2, y2, x2 + elSize, y2 + elSize);
        }
      }
      break;
  }
}

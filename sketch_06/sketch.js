const randRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
}

let corner = {'x': 0, 'y': 0};
let color = {'r': 255, 'g': 255, 'b': 255};
function s() {
  if (corner.x > 400 || corner.x < 0 || corner.y > 400 || corner.y < 0) {
    corner.x = randRange(0, 400);
    corner.y = randRange(0, 400);
    color.r = randRange(128, 256);
    color.g = randRange(128, 256);
    color.b = randRange(128, 256);
  }
  
  fill(...Object.values(color));
  let width = randRange(10, 50);
  let height = randRange(10, 50);
  rect(corner.x, corner.y, width, height);
  
  let rand = Math.round(Math.random() * 10);
  if (rand >= 0 && rand < 1) {
    corner.x += width;
    corner.y += height;  
  }
  else if (rand >= 1 && rand < 2) {
    corner.x += width;
  }  
  else if (rand >= 2 && rand < 3) {
    corner.y -= height;
  }
  else if (rand >= 3 && rand < 4) {
    corner.x -= width;
  }
}

let generator = setInterval(s, 20);

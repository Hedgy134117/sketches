const randRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(1);
}

let corner = { 'x': 0, 'y': 0 };
let color = { 'r': 255, 'g': 255, 'b': 255 };
function s() {
    if (corner.x > width || corner.x < 0 || corner.y > height || corner.y < 0) {
        corner.x = randRange(0, width);
        corner.y = randRange(0, height);
        color.r = randRange(128, 256);
        color.g = randRange(128, 256);
        color.b = randRange(128, 256);
    }

    fill(...Object.values(color));
    let w = randRange(10, 50);
    let h = randRange(10, 50);
    rect(corner.x, corner.y, w, h);

    let rand = Math.round(Math.random() * 10);
    if (rand >= 0 && rand < 1) {
        corner.x += w;
        corner.y += h;
    }
    else if (rand >= 1 && rand < 2) {
        corner.x += w;
    }
    else if (rand >= 2 && rand < 3) {
        corner.y -= h;
    }
    else if (rand >= 3 && rand < 4) {
        corner.x -= w;
    }
}

let generator = setInterval(s, 20);

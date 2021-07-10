function setup() {
  createCanvas(windowWidth, windowHeight);
  amp = height / 4;
}

let j = 0;
let k = 0;
let k2 = 100;
let amp = 32;
function draw() {
  blendMode(ADD);
  background(255, 3);
  blendMode(BLEND);
  noFill();
  for (let i = 0; i < width; i += 20) {
    stroke(noise(k) * 256, noise(k + 5) * 256, noise(k + 10) * 256);
    circle(i, height / 2 + sin(lerp(j, 1, i / width)) * amp, 16);
    j += 0.0005;
    k += 0.0001;
  }
  for (let i = 0; i < height; i += 20) {
    stroke(noise(k2) * 256, noise(k2 + 5) * 256, noise(k2 + 10) * 256);
    circle(width / 2 + sin(lerp(j, 1, i / height)) * amp,
      i,
      16);
    j += 0.0005;
    k2 += 0.0001;
  }
}

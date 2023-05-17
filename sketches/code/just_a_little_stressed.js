function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    angleMode(DEGREES);
    stroke(255, 247, 212, 5);
    background(76, 61, 61);
    strokeWeight(2);
  }
  
  function draw() {
    translate(width / 2, height / 2);
    scale(lerp(0, 1, frameCount / 1000));
    rotate(frameCount)
    stroke(255, 247, 212, tan(random(frameCount)));
    beginShape();
    for (let i = 0; i <= 360; i++) {
      vertex(
        cos(i + noise(cos(i + frameCount)) * 360) * height / 2, 
        sin(i + noise(sin(i + frameCount)) * 360) * height / 2
      );
    }
    endShape();
  }
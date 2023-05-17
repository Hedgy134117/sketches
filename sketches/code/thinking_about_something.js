function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(0);
    stroke(93, 63, 211, 5); // iris
    // stroke(255, 255, 255, 10);
    noFill();
  }
  
  let s = 3;
  function draw() {
    if (frameCount % 3 == 0) {
      blendMode(DIFFERENCE);
      background(1);
      blendMode(BLEND);
    }
    // for (let i = 0; i < 10; i++) {
    //   line(
    //     width / 2 + cos(frameCount / 2) * width / 4, 
    //     height / 2 + sin(frameCount / 2) * width / 4,
    //     width / 2 + cos(frameCount / 2) * width / 4 + sin(noise(i + frameCount * 0.001) * 360) * i * 30, 
    //     height / 2 + sin(frameCount / 2) * width / 4 + sin(noise(10 + i + frameCount * 0.001) * 360) * i * 30
    //   );
    // }
    
    let count = 50;
    for (let i = 0; i < count; i++) {
      let off = i * (360 / count);
      beginShape();
      vertex(
        width / 2 + cos(off + frameCount / 2) * height / s,
        height / 2 + sin(off + frameCount / 2) * height / s,
      );
      vertex(
        width / 2 + sin(noise(i + frameCount * 0.001) * 360) * height / s,
        height / 2 + cos(noise(i + frameCount * 0.001) * 360) * height / s
      );
      vertex(
        width / 2 + cos(off + 180 + frameCount / 2) * height / s,
        height / 2 + sin(off + 180 + frameCount / 2) * height / s
      );
      endShape();
    }
  }
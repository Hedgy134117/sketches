function drawCurve(x, y) {
    let l = 50;
    let x2 = x + l;
    let y2 = y + l;
    
    let top = (x + x2) / 2 - 5;
    let bottom = (x + x2) / 2 + 5; 
    top += Math.random() * (Math.random() < 0.5 ? -1 : 1) * 15;
    bottom += Math.random() * (Math.random() < 0.5 ? -1 : 1) * 7;
    
    noFill();
    stroke(Math.random() * 365, Math.random() * 365, Math.random() * 365, 100);
    beginShape();
    curveVertex(x, y);
    curveVertex(x, y);
    
    curveVertex(top, y2 - 40);
    curveVertex(bottom, y2 - 10);
    
    curveVertex(x2, y2);
    curveVertex(x2, y2);
    endShape();
  }
  
  function curvey() {
    for (let x = 0; x < width; x += size) {
      for (let y = 0; y < height; y += size) {
        drawCurve(x, y);
      }
    }
    timesIndex++;
  }
  
  let size = 50;
  let times = 50;
  let timesIndex = 0;
  let generator = setInterval(curvey, 100);
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    if (timesIndex >= times) {
      clearInterval(generator);
    }
  }
  
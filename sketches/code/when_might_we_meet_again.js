class Spinner {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.angVel = random([-1, 1]) * random(2, 10);
      this.xVel = random(-5, 5);
      this.yVel = random(-5, 5);
    }
    
    display() {
      line(this.x, this.y,
           this.x + cos(frameCount * this.angVel) * this.r, 
           this.y + sin(frameCount * this.angVel) * this.r
          );
      if (this.angVel > 0) {
        this.angVel -= 0.01;
      } else if (this.angVel < 0) {
        this.angVel += 0.01;
      }
      
      if (frameCount % 180 == 0) {
        this.angVel = random([-1, 1]) * random(2, 10);
      }
      
      this.x += this.xVel;
      this.y += this.yVel;
      if (this.x > width || this.x < 0) {
        this.xVel *= -1;
      }
      if (this.y > height || this.y < 0) {
        this.yVel *= -1
      }
      
      if (this.xVel > 0) {
        this.xVel -= 0.001;
      } else {
        this.xVel += 0.001;
      }
      
      if (this.yVel > 0) {
        this.yVel -= 0.001;
      } else {
        this.yVel += 0.001;
      }
    }
  }
  
  let spinners = [];
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(232, 222, 209);
    angleMode(DEGREES);
    stroke(124, 144, 112, 10);
    for (let i = 0; i < 10; i++) {
      spinners.push(new Spinner(random(width), random(height), random(15, 100)));
    }
  }
  
  function draw() {
    for (let i = 0; i < spinners.length; i++) {
      spinners[i].display();
    }
  }
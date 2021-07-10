const randRange = (min, max) => Math.random() * (max - min) + min;

class lerpedLine {
    constructor(x1, x2, y) {
        this.x1 = x1;
        this.x2 = x2;
        this.y = y;
        this.i = 0;
        this.inc = randRange(0.01, 0.05);
    }

    lerp() {
        if (this.i >= 1) {
            this.i = 0;
        }

        point(lerp(this.x1, this.x2, this.i), this.y);

        this.i += this.inc;
        this.y += randRange(-20, 20);
    }
}

let lines = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(10);
    for (let i = 0; i < randRange(3, 7); i++) {
        // let x1 = randRange(0, 400);
        // let x2 = 400 - i;
        let x1 = 0;
        let x2 = width;
        let y = randRange(50, 350);
        lines.push(new lerpedLine(x1, x2, y));
    }
}

let l = new lerpedLine(100, 300, 200);
let steps = 0;
let maxSteps = 500;

function draw() {
    // stroke(randRange(128, 255), randRange(128, 255), randRange(128, 255));
    stroke(randRange(128, 255), 0, randRange(128, 255));
    // stroke(0, randRange(0, 255), randRange(0, 255));
    // stroke(randRange(0, 255), randRange(0, 255), 0);
    for (let i = 0; i < lines.length; i++) {
        lines[i].lerp();
    }
    steps++;
    if (steps >= maxSteps) {
        noLoop();
    }
}

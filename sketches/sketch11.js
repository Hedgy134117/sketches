const randRange = (min, max) => Math.random() * (max - min) + min;

let strands = [];

class Strand {
    constructor(x, y, r, g, b) {
        this.x = x;
        this.y = y;
        this.startingX = x;
        this.startingY = y;
        this.velX = randRange(-10, 10);
        this.velY = randRange(-5, 5);
        this.isPos = this.velX <= 0;
        this.r = r || Math.floor(randRange(0, 256));
        this.g = g || Math.floor(randRange(0, 256));
        this.b = b || Math.floor(randRange(0, 256));
    }

    display() {
        stroke(this.r, this.g, this.b);
        strokeWeight(5);
        point(this.x, this.y);
        this.update();
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;
        if (this.isPos) {
            this.velX += 0.1;
        }
        else {
            this.velX -= 0.1;
        }

        if (this.x > windowWidth || this.x < 0 || this.y > windowHeight || this.y < 0) {
            strands = strands.filter(stand => stand != this);
            // strands.push(new Strand(this.startingX + randRange(-100, 100), this.startingY + randRange(-100, 100)));
            strands.push(new Strand(this.x, this.y, this.r, this.g, this.b));
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    let max = 250;
    for (let i = 0; i < max; i++) {
        strands.push(
            new Strand(
                windowWidth / 2, windowHeight / 2,
            )
        )
    }
}

let i = 120;
function draw() {
    background('rgba(255, 255, 255, 0.1)')
    for (let i = 0; i < strands.length; i++) {
        strands[i].display();
    }
}
const randRange = (min, max) => Math.random() * (max - min) + min;

let branches = [];
class Branch {
    constructor(x, y, r, g, b) {
        this.x = x
        this.startingX = x;
        this.y = y;
        this.startingY = y;
        this.velX = randRange(-10, 10);
        this.velY = randRange(-10, 10);
        this.r = r || Math.floor(randRange(0, 256));
        this.g = g || Math.floor(randRange(0, 256));
        this.b = b || Math.floor(randRange(0, 256));
    }

    display() {
        strokeWeight(10);
        stroke(this.r, this.g, this.b);
        point(this.x, this.y);
        this.update();
    }

    update() {
        if (this.y < 0 || this.y > windowHeight || this.x > windowWidth || this.x < 0) {
            branches = branches.filter(branch => branch != this);
            if (
                (this.x + this.startingX) / 2 <= 0 ||
                (this.x + this.startingX) / 2 >= windowWidth ||
                (this.y + this.startingY) / 2 <= 0 ||
                (this.y + this.startingY) / 2 >= windowHeight) {
                branches.push(new Branch(
                    windowWidth / 2, windowHeight / 2,
                    this.r, this.g, this.b
                ));
            }
            else {
                branches.push(new Branch(
                    (this.x + this.startingX) / 2, (this.y + this.startingY) / 2,
                    this.r, this.g, this.b
                ));
            }
        }
        this.x += this.velX;
        this.y += this.velY;
        this.velY += sin(frameCount / this.velX);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    let max = 40;
    for (let i = 0; i < max; i++) {
        branches.push(new Branch(
            windowWidth / 2, windowHeight / 2
        ));
    }
}

function draw() {
    for (let i = 0; i < branches.length; i++) {
        branches[i].display();
    }
}
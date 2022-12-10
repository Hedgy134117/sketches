class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = random(-10, 10);

        this.accY = random(0.1, 0.5);
        this.col = random(["#fccc81", "#fcbc5c", "#f4e0a0", "#e46414"]);
        this.weight = floor(random(2, 5));
    }

    update() {
        // let px = this.x;
        // let py = this.y;
        this.x += this.velX;
        this.y += this.velY;
        stroke(this.col);
        fill(this.col);
        strokeWeight(this.weight);
        // line(px, py, this.x, this.y);
        push();
        translate(this.x, this.y);
        rotate(sin(this.velY) * 360);
        rect(0, 0, 10, 10);
        pop();
        this.velY += this.accY;
    }
}

class Burst {
    constructor(x, y, n) {
        this.x = x;
        this.y = y;
        this.particles = [];
        for (let i = 0; i < n; i++) {
            let part = new Particle(x, y);
            // part.velY = cos((i/n)*360) * i;
            // part.velX = sin((i / n) * 360) * i / 2;
            part.velY = -i;
            this.particles.push(part);
        }
    }

    update() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            if (this.particles[i].x >= width || this.particles[i].x <= 0 || this.particles[i].y >= height) {
                this.particles.splice(i, 1);
                i--;
                this.n--;
            }
        }
    }
}

let a = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    strokeWeight(2);
    background("#8c3c24");
    a.push(new Burst(width / 2, height / 2, 50));
}

function draw() {
    // blendMode(DIFFERENCE);
    background(140, 60, 36, 10);
    // blendMode(BLEND);
    if (frameCount % 30 == 0) {
        a.push(new Burst(random(width / 4, 3 * width / 4), random(height / 4, 3 * height / 4), random(5, 100)));
    }
    for (let i = 0; i < a.length; i++) {
        a[i].update();
        if (a[i].particles.every(e => e == null)) {
            a.splice(i, 1);
            i--;
        }
    }
}
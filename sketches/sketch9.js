const randRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randRangeDec = (min, max) => Math.random() * (max - min) + min;

const r = 10;

class Particle {
    constructor() {
        this.col = {
            'r': 0,
            'g': 0,
            'b': 0
        };
        this.vel = {
            'x': 0,
            'y': 0
        }
        this.pos = {
            'x': randRange(0, width),
            'y': randRange(0, height)
        };
    }

    display(others) {
        fill(this.col.r, this.col.g, this.col.b);
        ellipse(this.pos.x, this.pos.y, r);
        this.update(others);
    }

    update(others) {
        this.changeX();
        this.changeY();

        for (let i = 0; i < others.length; i++) {
            if (this.intersects(others[i])) {
                // this.vel.x = randRange(-3, 3);
                // this.vel.y = randRange(-3, 3);
                this.vel.x *= -0.5;
                others[i].vel.x *= -1.25;
                // this.vel.y *= -0.5;
                // others[i].vel.y *= -0.5;
            }
        }
    }

    changeX() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
        if (this.vel.x < 0) {
            this.vel.x = Math.max(-3, this.vel.x - 0.1);
        }
        else {
            this.vel.x = Math.min(3, this.vel.x + 0.1);
        }
        this.pos.x += this.vel.x;
    }

    changeY() {
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
        }
        if (this.vel.y < 0) {
            this.vel.y = Math.max(-3, this.vel.y - 0.1);
        }
        else {
            this.vel.y = Math.min(3, this.vel.y + 0.1);
        }
        this.pos.y += this.vel.y;
    }

    intersects(other) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < r) {
            return true;
        }
        return false;
    }
}

let l = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    let j = 0;
    let rChance = Math.floor(Math.random() * 2) == 1;
    let gChance = Math.floor(Math.random() * 2) == 1;
    let bChance = Math.floor(Math.random() * 2) == 1;
    let chances = {
        'r': rChance,
        'g': gChance,
        'b': bChance
    };
    let max = 50;
    for (let i = 0; i < max; i++) {
        let p = createParticle(j, chances);
        j += 1 / max;
        l.push(p);
    }
}

function createParticle(j, chances) {
    let p = new Particle();
    if (chances.r) {
        p.col.r = lerp(0, 255, j);
    }
    if (chances.g) {
        p.col.g = lerp(0, 255, j);
    }
    if (chances.b) {
        p.col.b = lerp(0, 255, j);
    }
    return p;
}

function draw() {
    // background(220);
    for (let i = 0; i < l.length; i++) {
        let others = [];
        for (let j = 0; j < l.length; j++) {
            if (j != i) {
                others.push(l[j]);
            }
        }
        l[i].display(others);
    }
}
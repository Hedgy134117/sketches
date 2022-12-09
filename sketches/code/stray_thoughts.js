class Burst {
    constructor(x, y, n, s) {
        this.x = x;
        this.y = y;
        this.n = n;
        this.s = s;
        this.a = [];
        for (let i = 0; i < n; i++) {
            this.a.push({ "x": x, "y": y });
        }
    }

    update() {
        for (let i = 0; i < this.n; i++) {
            let px = this.a[i].x;
            let py = this.a[i].y;
            this.a[i].x += cos(i * 360 / this.n) * this.s;
            this.a[i].y += sin(i * 360 / this.n) * this.s;
            strokeWeight((1 + sin(this.x + this.a[i].x)) * 5);
            stroke((1 + cos(this.y + this.a[i].y)) * 255, 10);
            line(px, py, this.a[i].x, this.a[i].y);
            if (this.a[i].x >= width || this.a[i].x <= 0 || this.a[i].y >= height || this.a[i].y <= 0) {
                this.a.splice(i, 1);
                i--;
                this.n--;
            }
        }
    }
}

let bursts = []
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(20);
    // let n = 45;
    // for (let i = 0; i < n; i++) {
    // 	bursts.push(
    // 		// new Burst(cos(i * 360/n) * 50 + width / 2, sin(i * 360/n) * 50 + height / 2, random(10, 30), random(1, 5))
    // 		new Burst(map(i, 0, n, 0, width), sin(i * 360/n) * 100 + height / 2, random(10, 30), random(1, 5))
    // 	);
    // }
}

function draw() {
    if (frameCount % 10 == 0) {
        bursts.push(
            // new Burst(cos(i * 360/n) * 50 + width / 2, sin(i * 360/n) * 50 + height / 2, random(10, 30), random(3, 5))
            new Burst(
                -cos(frameCount) * width / 8 + width / 2,
                sin(frameCount) * height / 4 + height / 2,
                random(10, 30), random(3, 5)
            )
        );
    }
    for (let i = 0; i < bursts.length; i++) {
        bursts[i].update();
        if (bursts[i].a.every(e => e == null)) {
            bursts.splice(i, 1);
            i--;
        }
    }
}
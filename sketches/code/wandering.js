let lines = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    for (let side = 0; side < 4; side++) {
        let x = 0;
        let y = 0;
        switch (side) {
            case 0: // top
                x = width / 2;
                y = 0;
                break;
            case 1: // right
                x = width;
                y = height / 2;
                break;
            case 2: // bottom
                x = width / 2;
                y = height;
                break;
            case 3: // left
                x = 0;
                y = height / 2;
                break;
        }
        for (let i = 0; i < 50; i++) {
            lines.push({
                "x": x,
                "y": y,
                "w": 50,
                "rot": 0,
                "rotVel": random(-5, 5),
                "vel": createVector(
                    (0.5 - noise(side, 8 + i * 0.008)) * 10,
                    (0.5 - noise(side, 10 + i * 0.008)) * 10
                ),
                "col": [
                    noise(side, i * 0.003) * 255,
                    noise(side, 2 + i * 0.003) * 255,
                    noise(side, 4 + i * 0.003) * 255
                ]
            })
        }
    }
}

function draw() {
    blendMode(DIFFERENCE);
    background(1);
    blendMode(BLEND);
    for (let l of lines) {
        stroke(...l.col, 128);

        push();
        translate(l.x, l.y);
        rotate(l.rot);
        rect(0, 0, l.w, 0);
        pop();

        l.x += l.vel.x;
        l.y += l.vel.y;
        l.rot += l.rotVel;

        if (l.x > width || l.x < 0) {
            l.vel.x *= -1;
        }
        if (l.y > height || l.y < 0) {
            l.vel.y *= -1;
        }
    }
}
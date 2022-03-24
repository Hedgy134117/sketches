let particles = [];
let border = 20;
function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	noStroke();
	let m = 0;
	let ss = random(360, 1800)
	for (let i = 0; i < m; i++) {
		particles.push({
			// pos: createVector(random(width), random(height)),
			pos: createVector(width / 2, height / 2),
			// pos: createVector(i > 2 == 0 ? width : 0, height / 2),
			// pos: createVector(width / 2 + cos(i / m * 360) * height / 2, height / 2 + sin(i / m * 360) * height / 2),
			// pos: createVector(lerp(0, width, i / m), height / 2 + sin(i / m * ss) * height / 2),
			vel: createVector(0, 0),
			// drag: createVector(random(-1, 1), random(-1, 1)),
			// drag: createVector(random(-1, 1), random(-1, 1)),
			// drag: createVector(random(-3, 3), random(-3, 3)),
			// drag: createVector(0),
            drag: createVector(cos(i / m * 360), sin(i / m * 360)),
			col: [0, 0, 0]
		});
	}
}

function draw() {
	blendMode(DIFFERENCE);
	background(2);
	blendMode(BLEND);
    if (frameCount < 180) {
      particles.push({
        // pos: createVector(random(width), random(height)),
        pos: createVector(width / 2, height / 2),
        // pos: createVector(i > 2 == 0 ? width : 0, height / 2),
        // pos: createVector(width / 2 + cos(i / m * 360) * height / 2, height / 2 + sin(i / m * 360) * height / 2),
        // pos: createVector(lerp(0, width, i / m), height / 2 + sin(i / m * ss) * height / 2),
        vel: createVector(0, 0),
        // drag: createVector(random(-1, 1), random(-1, 1)),
        // drag: createVector(random(-1, 1), random(-1, 1)),
        // drag: createVector(random(-3, 3), random(-3, 3)),
        // drag: createVector(0),
        drag: createVector(cos(frameCount * 2), sin(frameCount * 2)),
        col: [0, 0, 0]
      }); 
    }
  
	particles.forEach(p => {
		p.col = [noise(p.pos.x * 0.003, p.pos.y * 0.003, 2) * 255, noise(p.pos.x * 0.003, p.pos.y * 0.003, 3) * 255, noise(p.pos.x * 0.003, p.pos.y * 0.003, 4) * 255];
		fill([...p.col])
		circle(p.pos.x, p.pos.y, 10);
		p.pos.x += p.vel.x
		p.vel.x = tan(noise(p.pos.x * 0.003, p.pos.y * 0.003) * 360);
		p.pos.x += p.drag.x
		p.pos.y += p.vel.y
		p.vel.y = sin(noise(p.pos.x * 0.003, p.pos.y * 0.003) * 360);
		p.pos.y += p.drag.y
		if (p.pos.x > width + border) {
			p.pos.x = border;
			p.vel.x = 5;
		}
		else if (p.pos.x < -border) {
			p.pos.x = width - border;
			p.vel.x = -5;
		}
		else if (p.pos.y > height + border) {
			p.pos.y = border;
			p.vel.y = 5;
		}
		else if (p.pos.y < -border) {
			p.pos.y = height - border;
			p.vel.y = -5;
		}
	});
}
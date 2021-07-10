class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display(nextPoint) {
        if (nextPoint != null) {
            line(this.x, this.y, nextPoint.x, nextPoint.y);
        }
    }
}

function createPoints() {
    let points = [];
    for (let y = 0; y < height; y += 50) {
        let currentPoints = [];
        for (let x = 0; x < width; x += 2) {
            // Math.random() * x / 50
            currentPoints.push(new Point(x, y + Math.random() * x / 25));
        }
        points.push(currentPoints);
    }
    return points;
}

function createPointsSingle(y) {
    let points = [];
    for (let x = 0; x < width; x += 2) {
        points.push(new Point(x, y + Math.random() * x / 25));
    }
    return points;
}

let i = 0;
let j = 0;
function displayPoints(points) {
    if (i >= points.length) {
        return;
    }
    points[i][j].display(points[i][j + 1]);
    j++;
    if (j >= points[i].length) {
        j = 0;
        i++;
    }
}

let k = 0;
function displayPointsSingle(points) {
    if (k >= points.length) {
        return;
    }
    points[k].display(points[k + 1]);
    k++;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    let points = createPoints();
    setInterval(displayPoints, 1, points);
}
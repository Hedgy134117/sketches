function setup() {
    createCanvas(windowWidth, windowHeight);

    const circleMin = 10;
    const circleMax = 30;

    const claustMin = 10;
    const claustMax = 15;
    const claustrophobia = Math.floor(Math.random() * (claustMax - claustMax) + claustMin);

    let x = 0;
    let y = 0;
    while (y < height) {
        x = 0;
        while (x < width) {
            let r;
            if (width - x > circleMax) {
                r = Math.floor(Math.random() * (circleMax - circleMin) + circleMin);
            }
            else {
                r = (width - x) / 2;
            }
            circle(x + r, y + r, r * 2);
            x += r * 2;
        }
        y += claustrophobia;
    }
}
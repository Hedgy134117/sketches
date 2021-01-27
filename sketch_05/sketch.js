function setup() {
    createCanvas(400, 400);

    const circleMin = 10;
    const circleMax = 30;

    const claustMin = 10;
    const claustMax = 15;
    const claustrophobia = Math.floor(Math.random() * (claustMax - claustMax) + claustMin);

    let x = 0;
    let y = 0;
    while (y < 400) {
        x = 0;
        while (x < 400) {
            let r;
            if (400 - x > circleMax) {
                r = Math.floor(Math.random() * (circleMax - circleMin) + circleMin);
            }
            else {
                r = (400 - x) / 2;
            }
            circle(x + r, y + r, r * 2);
            x += r * 2;
        }
        y += claustrophobia;
    }
}
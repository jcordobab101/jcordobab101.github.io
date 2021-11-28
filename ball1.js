let counterx = 0;
const makingApainting = () => {
    let objectSize = data.length;
    while (counterx < objectSize) {
        ball = data[counterx];
        create(ball.x, ball.y, ball.color);
        counterx ++;
    }


}

makingApainting();

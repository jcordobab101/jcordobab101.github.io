let list = [];
const creatingColorBalls = () => {
    let counter = 0;
    while (counter < 15000){
        list.push(create());
        counter++;
    }
}


const randomMoves = () => {
    let i = 0;
    let listSize = list.length;
    while (i < listSize) {
        let ball = list[i];
        color(ball, 255, 254, 169);
        size(ball, 10,10);
        colorRandom(ball);
        i++;
    }

}

const runFunction = () => {
    let createBalls = creatingColorBalls();
    let ballsRandom = randomMoves();

}

runFunction();

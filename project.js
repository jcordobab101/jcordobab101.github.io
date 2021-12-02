
//GLOBAL VARIABLES
var laps = 5;

//player1
var velocity = Math.floor(Math.random() * 8 + 1);
var posXball = 0;
var posYball = 0;
var reverse = false;


//player2
var velocity1 = Math.floor(Math.random() * 8 + 1);
var posXball1 = 0;
var posYball1 = 0;
var reverse1 = false;


//player3
var velocity2 = Math.floor(Math.random() * 8 + 1);
var posXball2 = 0;
var posYball2 = 0;
var reverse2 = false;

//player4
var velocity3 = Math.floor(Math.random() * 8 + 1);
var posXball3 = 0;
var posYball3 = 0;
var reverse3 = false;

//Increase velocity from objects if matching initial speed



// var reverse = false;

//Draw a circle in the web page
var ball = document.getElementById('ball');
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');

// Speed logic
// ----------------
//ball


//Fixed Axis X > left to right and bounce at the edge



//Move forward - bi-directional using reverse global variable


//Ball #1
const moveInTimeball = () => {
    var Xmin = 0;
    var Xmax = 1900;
    var count = 0;

    if (posXball === Xmax && posXball === Xmin) {
        count++;
    }

    //Velocity vs velocity1
    if (velocity === velocity1) {
        if (velocity1 === velocity) {
           velocity1++;
        } else {
           velocity++;
        }
    }
    //velocity vs velocity2
    if (velocity === velocity2) {
        if (velocity2 === velocity) {
           velocity2++;
        } else {
           velocity++;
        }
    }

    //velocity vs velocity3
    if (velocity === velocity3) {
        if (velocity3 === velocity) {
           velocity3++;
        } else {
           velocity++;
        }
    }





    if(reverse) {
        posXball -= velocity;
        ball.style.left = posXball + 'px';

    } else {
        posXball += velocity;
        ball.style.left = posXball + 'px';
    }

    if (posXball > Xmax || posXball === Xmin) {
        reverse = !reverse;
    }



}
////Ball #2
const moveInTimeball1 = () => {
    var Xmin1 = 0;
    var Xmax1 = 1900;


    //Velocity1 vs velocity2
    if (velocity1 === velocity2) {
        if (velocity2 === velocity1) {
           velocity2++;
        } else {
           velocity1++;
        }
    }
    //velocity1 vs velocity3
    if (velocity1 === velocity3) {
        if (velocity3 === velocity1) {
           velocity3++;
        } else {
           velocity1++;
        }
    }


    if (reverse1) {
        posXball1 -= velocity1;
        ball1.style.left = posXball1 + 'px';

    } else {
        posXball1 += velocity1;
        ball1.style.left = posXball1 + 'px';
    }

    if (posXball1 > Xmax1 || posXball1 === Xmin1) {
        reverse1 = !reverse1;
    }




}
//Ball#3
const moveInTimeball2 = () => {
    var Xmin2 = 0;
    var Xmax2 = 1900;

    //Velocity2 vs velocity
    if (velocity2 === velocity) {
        if (velocity === velocity2) {
           velocity++;
        } else {
           velocity2++;
        }
    }
    //velocity2 vs velocity3
    if (velocity2 === velocity3) {
        if (velocity3 === velocity2) {
           velocity3++;
        } else {
           velocity2++;
        }
    }


    if (reverse2) {
        posXball2 -= velocity2;
        ball2.style.left = posXball2 + 'px';

    } else {
        posXball2 += velocity2;
        ball2.style.left = posXball2 + 'px';
    }

    if (posXball2 > Xmax2 || posXball2 === Xmin2) {
        reverse2 = !reverse2;
    }


}
//Ball #4
const moveInTimeball3 = () => {
    var Xmin3 = 0;
    var Xmax3 = 1900;



    if (reverse3) {
        posXball3 -= velocity3;
        ball3.style.left = posXball3 + 'px';

    } else {
        posXball3 += velocity3;
        ball3.style.left = posXball3 + 'px';
    }

    if (posXball3 > Xmax3 || posXball3 === Xmin3) {
        reverse3 = !reverse3;
    }

}

//Execution function
const moveInTime = () => {
    var player1 = moveInTimeball();
    var computer1 = moveInTimeball1();
    var computer2 = moveInTimeball2();
    var computer3 = moveInTimeball3();
}
//Interval

setInterval(moveInTime,10);

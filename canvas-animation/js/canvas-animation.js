//get canvas item

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");


// object position
let xPosition = 0;
let yPosition = 0;
let xDirection = 2;
//rect hor
function moveHor() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);
    //draw rect at current position
    ctx.fillRect(xPosition, 0, 50, 50, );
    ctx.fillStyle = "red";
    //move the x position over by x pixels
    xPosition += 1;
    //did i hit the wall? if so wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}

//rect moving vertically then wrapping around


function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(0, yPosition, 50, 50);
    yPosition += 1;
    if (yPosition >= 500) {
        yPosition = 0
    }
}


//rect bouncing horizontally

function bounceHor() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 50, 50, );
    ctx.fillStyle = "red";
    xPosition = xPosition + xDirection;
    if (xPosition > 500 | xPosition < 0) {
        xDirection = -xDirection;
    }
}


//ball bouncing horizontally


setInterval(bounceHor, 10);
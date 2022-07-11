    //start myCanvas

var myCanvas = document.getElementById("myCanvas");
// Get the 2d context of the canvas
var ctx = myCanvas.getContext("2d");
//squareCanvas=400;
var squareCanvas=400;
//variables for canvas size 400x400
var canvasWidth = squareCanvas;
var canvasHeight = squareCanvas;
//set canvas size
myCanvas.width = canvasWidth;
myCanvas.height = canvasHeight;
//set canvas background color
function setCanvasBackgroundColor(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

//location of the square
let x = 0;
let y = 0;


//selectSquareSize = squareCanvas/8;
var selectSquareSize = squareCanvas/8;
// draw a stroke square size of selectSquare
function selectSquare(x, y, color){ 

    //beginPath();
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, selectSquareSize, selectSquareSize); 
    
}


//directions for the square
function moveSquareUp(){
    y -= selectSquareSize;
    
}
function moveSquareDown(){
    y += selectSquareSize;
}
function moveSquareLeft(){
    x -= selectSquareSize;
}
function moveSquareRight(){
    x += selectSquareSize;
}

// chess board
function chessBoard(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if((i + j) % 2 == 0){
                ctx.fillStyle = "black";
            }
            else{
                ctx.fillStyle = "white";
            }
            ctx.fillRect(i * selectSquareSize, j * selectSquareSize, selectSquareSize, selectSquareSize);

        }
    }
}

   



//load all the functions
setInterval(loadCanvas, 500);

function loadCanvas(){
chessBoard();
    selectSquare(x,y,"red");
}


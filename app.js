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
function selectSquare(x, y){ 

    //randomize the color of the square rgb(0,0,0) to rgb(255,255,255)
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";

    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, selectSquareSize, selectSquareSize); 
    
}


//directions for the square
function moveSquareUp(){
    y -= selectSquareSize;
    selectSquare(x,y,"white");
    
}
function moveSquareDown(){
    y += selectSquareSize;
    selectSquare(x,y,"black");
}
function moveSquareLeft(){
    x -= selectSquareSize;
    selectSquare(x,y,"");
}
function moveSquareRight(){
    x += selectSquareSize;
}

// chess board
function chessBoard(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if((i + j) % 2 == 0){
                ctx.fillStyle = "white";
                
            }
            else{
                ctx.fillStyle = "black";
                
            }
            ctx.fillRect(i * selectSquareSize, j * selectSquareSize, selectSquareSize, selectSquareSize);

        }
    }
}

function selectPc(xx, yy, color){

    ctx.fillStyle = color;
    ctx.fillRect(xx, yy, selectSquareSize, selectSquareSize);
} 



function startGame(){
    x=0;
    y=0;
    chessBoard();
    selectSquare(x,y,);
    
}


//choose whwere to go, move the square
setInterval(loadCanvas, 500);
function loadCanvas(){

     selectSquare(x,y,);
    
}

function startMove(){
    selectPc(x,y,"green");

}

function submitMove(){
    
    selectPc(x,y,"yellow");
}



// save the canvas enter file name
function saveCanvas(){
    let fileName = document.getElementById("fileName").value;
    let link = document.createElement('a');
    link.download = fileName;
    link.href = myCanvas.toDataURL("image/png");
    link.click();
}




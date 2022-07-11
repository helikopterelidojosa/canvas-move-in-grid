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

//location of the selector-square
let x;
let y;

//number of the moves to make file name
let moveCount = 0;
let gameName;
var fileName;

let ifItMoves = false;

//to register the move 
//and draw a clear chess squares after move
//start of the move coordinates
let LastMovex;
let LastMovey;
//end of the move coordinates
let LastMovexx;
let LastMoveyy;


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
    if(ifItMoves == true){
        document.getElementById("btn-submit").style.display = "block";
    }
    
    
}
function moveSquareDown(){
    y += selectSquareSize;
    selectSquare(x,y,"black");
    if(ifItMoves == true){
        document.getElementById("btn-submit").style.display = "block";
    }
}
function moveSquareLeft(){
    x -= selectSquareSize;
    selectSquare(x,y,"");
    if(ifItMoves == true){
        document.getElementById("btn-submit").style.display = "block";
    }
}
function moveSquareRight(){
    x += selectSquareSize;
    if(ifItMoves == true){
        document.getElementById("btn-submit").style.display = "block";
    }

}

// chess board
function chessBoard(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if((i + j) % 2 == 0){
                ctx.fillStyle = "white";
                
            }
            else{
                ctx.fillStyle = "grey";
                
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
    // main display:block
    document.getElementById("main").style.display = "flex";
    document.getElementById("btn-start").style.display = "none";
    document.querySelector("h1").style.display = "none";
    chessBoard();
   //chessPieces();
    x=200;
    y=300;
    selectSquare(x,y,);
    var randomString = function(length) {
        var text = "Chess-";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    //filename
    gameName = randomString(6);
    fileName = gameName + "-move-" + moveCount + ".png";
    saveCanvas(fileName);
   


    
    



    
}


//choose whwere to go, move the square
setInterval(loadCanvas, 500);
function loadCanvas(){

     selectSquare(x,y,);
    
}

function startMove(){
    document.getElementById("btn-start-move").style.display = "none";
    ifItMoves = true;
    selectPc(x,y,"yellow");
    LastMovexx = x;
    LastMoveyy = y;

}

function submitMove(){
    document.getElementById("btn-submit").style.display = "none";
    document.getElementById("btn-new-move").style.display = "block";

    selectPc(x,y,"yellow");

    
    
    LastMovex = x;
    LastMovey = y;



    
    moveCount++;
    fileName = gameName + "-move-" + moveCount + ".png";
    saveCanvas(fileName);
    
}

function    newMove(){
    document.getElementById("btn-new-move").style.display = "none";
    document.getElementById("btn-submit").style.display = "none";
    document.getElementById("btn-start-move").style.display = "block";
    ifItMoves = false;

    if((LastMovex+100)%100 == 0 && (LastMovey+100)%100 == 0){
        selectPc(LastMovex,LastMovey,"white");}
    else{selectPc(LastMovex,LastMovey,"grey");}

    if((LastMovexx+100)%100 == 0 && (LastMoveyy+100)%100 == 0){
        selectPc(LastMovexx,LastMoveyy,"white");}
    else{selectPc(LastMovexx,LastMoveyy,"grey");}

}



// save the canvas enter file name
function saveCanvas(name){
    let fileName = name;
    let link = document.createElement('a');
    link.download = fileName;
    link.href = myCanvas.toDataURL("image/png");
    link.click();
}


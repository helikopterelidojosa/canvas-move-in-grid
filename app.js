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

var pieces = {
    white_Pawn_A: {
        img:"white-pawn-a",
        x:0,
        y:300
        
    },
    white_Pawn_B: {
        img:"white-pawn-b",
        x:50,
        y:300 
    },
    white_Pawn_C: {
        img:"white-pawn-c",
        x:100,
        y:300
    },
    white_Pawn_D: {
        img:"white-pawn-d",
        x:150,
        y:300
    },
    white_Pawn_E: {
        img:"white-pawn-e",
        x:200,
        y:300
    },
    white_Pawn_F: {
        img:"white-pawn-f",
        x:250,
        y:300
    },
    white_Pawn_G: {
        img:"white-pawn-g",
        x:300,
        y:300
    },
    white_Pawn_H: {
        img:"white-pawn-h",
        x:350,
        y:300
    },
    white_Rook_A: {
        img:"white-rook-a",
        x:0,
        y:350
    },
    white_Rook_H: {
        img:"white-rook-h",
        x:350,
        y:350
    },
    white_Knight_B: {
        img:"white-knight-b",
        x:50,
        y:350
    },
    white_Knight_G: {
        img:"white-knight-g",
        x:300,
        y:350
    },
    white_Bishop_C: {
        img:"white-bishop-c",
        x:100,
        y:350
    },
    white_Bishop_F: {
        img:"white-bishop-f",
        x:250,
        y:350
    },
    white_Queen: {
        img:"white-queen",
        x:150,
        y:350
    },
    white_King: {
        img:"white-king",
        x:200,
        y:350
    },
    //black pieces

    black_Pawn_A: {
        img:"black-pawn-a",
        x:0,
        y:50
    },
    black_Pawn_B: {
        img:"black-pawn-b",
        x:50,
        y:50
    },
    black_Pawn_C: {
        img:"black-pawn-c",
        x:100,
        y:50
    },
    black_Pawn_D: {
        img:"black-pawn-d",
        x:150,
        y:50
    },
    black_Pawn_E: {

        img:"black-pawn-e",
        x:200,
        y:50
    },
    black_Pawn_F: {
        img:"black-pawn-f",
        x:250,
        y:50
    },
    black_Pawn_G: {
        img:"black-pawn-g",
        x:300,
        y:50
    },
    black_Pawn_H: {
        img:"black-pawn-h",
        x:350,
        y:50
    },
    black_Rook_A: {
        img:"black-rook-a",
        x:0,
        y:0
    },
    black_Rook_H: {
        img:"black-rook-h",
        x:350,
        y:0
    },
    black_Knight_B: {
        img:"black-knight-b",
        x:50,
        y:0
    },
    black_Knight_G: {
        img:"black-knight-g",
        x:300,
        y:0
    },

    black_Bishop_C: {
        img:"black-bishop-c",
        x:100,
        y:0
    },
    black_Bishop_F: {
        img:"black-bishop-f",
        x:250,
        y:0
    },
    black_Queen: {
        img:"black-queen",
        x:150,
        y:0
    },
    black_King: {
        img:"black-king",
        x:200,
        y:0
    }






};

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
     chessPieces(pieces.white_Pawn_A.img, pieces.white_Pawn_A.x, pieces.white_Pawn_A.y);
        chessPieces(pieces.white_Pawn_B.img, pieces.white_Pawn_B.x, pieces.white_Pawn_B.y);
        chessPieces(pieces.white_Pawn_C.img, pieces.white_Pawn_C.x, pieces.white_Pawn_C.y);
        chessPieces(pieces.white_Pawn_D.img, pieces.white_Pawn_D.x, pieces.white_Pawn_D.y);
        chessPieces(pieces.white_Pawn_E.img, pieces.white_Pawn_E.x, pieces.white_Pawn_E.y);
        chessPieces(pieces.white_Pawn_F.img, pieces.white_Pawn_F.x, pieces.white_Pawn_F.y);
        chessPieces(pieces.white_Pawn_G.img, pieces.white_Pawn_G.x, pieces.white_Pawn_G.y);
        chessPieces(pieces.white_Pawn_H.img, pieces.white_Pawn_H.x, pieces.white_Pawn_H.y);
        chessPieces(pieces.white_Rook_A.img, pieces.white_Rook_A.x, pieces.white_Rook_A.y);
        chessPieces(pieces.white_Rook_H.img, pieces.white_Rook_H.x, pieces.white_Rook_H.y);
        chessPieces(pieces.white_Knight_B.img, pieces.white_Knight_B.x, pieces.white_Knight_B.y);
        chessPieces(pieces.white_Knight_G.img, pieces.white_Knight_G.x, pieces.white_Knight_G.y);
        chessPieces(pieces.white_Bishop_C.img, pieces.white_Bishop_C.x, pieces.white_Bishop_C.y);
        chessPieces(pieces.white_Bishop_F.img, pieces.white_Bishop_F.x, pieces.white_Bishop_F.y);
        chessPieces(pieces.white_Queen.img, pieces.white_Queen.x, pieces.white_Queen.y);
        chessPieces(pieces.white_King.img, pieces.white_King.x, pieces.white_King.y);
        chessPieces(pieces.black_Pawn_A.img, pieces.black_Pawn_A.x, pieces.black_Pawn_A.y);

        chessPieces(pieces.black_Pawn_B.img, pieces.black_Pawn_B.x, pieces.black_Pawn_B.y);
        chessPieces(pieces.black_Pawn_C.img, pieces.black_Pawn_C.x, pieces.black_Pawn_C.y);
        chessPieces(pieces.black_Pawn_D.img, pieces.black_Pawn_D.x, pieces.black_Pawn_D.y);

        chessPieces(pieces.black_Pawn_E.img, pieces.black_Pawn_E.x, pieces.black_Pawn_E.y);
        chessPieces(pieces.black_Pawn_F.img, pieces.black_Pawn_F.x, pieces.black_Pawn_F.y);
        chessPieces(pieces.black_Pawn_G.img, pieces.black_Pawn_G.x, pieces.black_Pawn_G.y);
        chessPieces(pieces.black_Pawn_H.img, pieces.black_Pawn_H.x, pieces.black_Pawn_H.y);
        chessPieces(pieces.black_Rook_A.img, pieces.black_Rook_A.x, pieces.black_Rook_A.y);
        chessPieces(pieces.black_Rook_H.img, pieces.black_Rook_H.x, pieces.black_Rook_H.y);
        chessPieces(pieces.black_Knight_B.img, pieces.black_Knight_B.x, pieces.black_Knight_B.y);
        chessPieces(pieces.black_Knight_G.img, pieces.black_Knight_G.x, pieces.black_Knight_G.y);
        chessPieces(pieces.black_Bishop_C.img, pieces.black_Bishop_C.x, pieces.black_Bishop_C.y);
        chessPieces(pieces.black_Bishop_F.img, pieces.black_Bishop_F.x, pieces.black_Bishop_F.y);
        chessPieces(pieces.black_Queen.img, pieces.black_Queen.x, pieces.black_Queen.y);
        chessPieces(pieces.black_King.img, pieces.black_King.x, pieces.black_King.y);
        

     
    
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

//chess pieces
function chessPieces(id, x, y){
    var img= document.getElementById(id);
    ctx.drawImage(img, x, y);
}



    


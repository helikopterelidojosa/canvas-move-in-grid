//start myCcanvas

var myCanvas = document.getElementById("myCanvas");
// Get the 2d context of the canvas
var ctx = myCanvas.getContext("2d");
//variables for canvas size 400x400
var canvasWidth = 400;
var canvasHeight = 400;
//set canvas size
myCanvas.width = canvasWidth;
myCanvas.height = canvasHeight;
//set canvas background color
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

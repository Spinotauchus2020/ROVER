canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
rover_width = 100 ;
rover_height = 100;
roverX = 10;
roverY = 10;
background_image = "mars.jpg";
rover_image = "rover.png";
function add(){
    background_imageTag = new Image();
background_imageTag.onload = uploadbackground;
background_imageTag.src = background_image;

rover_imageTag = new Image();
rover_imageTag.onload = uploadrover;
rover_imageTag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imageTag , 0 , 0 , canvas.width , canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imageTag , roverX , roverY , rover_width , rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log (keypressed);
    if (keypressed == "38"){
        console.log ("up arrow key is pressed");
        up();
    }
    if(keypressed == "40"){
        console.log("down arrow key is pressed");
        down();
    }
    if(keypressed == "37"){
        console.log ("left arrow key is pressed");
        left();
    }
    if(keypressed == "39"){
        console.log("right arrow key is pressed");
        right();
    }
}

function up(){
    if(roverY >= 0){
        roverY = roverY-10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(roverY <= 500){
        roverY = roverY+10;
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(roverX >= 0){
        roverX = roverX-10;
        uploadbackground();
        uploadrover();}
}

function right(){
    if(roverX <= 700){
        roverX = roverX+10;
        uploadbackground();
        uploadrover();}
}
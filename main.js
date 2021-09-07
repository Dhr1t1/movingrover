canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
nasa_mars_images_array=["photo_1.jpg","photo_2.jpg","photo_3.jpg","photo_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_img="rover.png";
background_img=nasa_mars_images_array[random_number];
console.log("backgroundimages"+background_img);

rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=Uploadbackground;
    background_imgTag.src=background_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=Uploadrover;
    rover_imgTag.src=rover_img;
}

function Uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function Uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='38'){
        up();
        console.log("up");
    }if(keypressed=='39'){
        right();
        console.log("right");
    }if(keypressed=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x= "+rover_x+",y= "+rover_y);
        Uploadbackground();
        Uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x= "+rover_x+",y= "+rover_y);
        Uploadbackground();
        Uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x= "+rover_x+",y= "+rover_y);
        Uploadbackground();
        Uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x= "+rover_x+",y= "+rover_y);
        Uploadbackground();
        Uploadrover();
    }
}
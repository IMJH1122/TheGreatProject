// Before I am learning JavaScript, I had no idea about front end work,
// because I only did some programming competition questions. Before doing
// this project, we are learning the visual stuff. So I would like to try 
// something new, just like audio, set/play music in a program.  In fact, 
// half the time I spent on this project was figuring out how to add music.
// In terms of visual, primary interaction. This project was inspired by the
// mini game cookie cliker. When you click on the cookie, you will see the 
// number in the middle of the center add one. Even though nothing more because
// of the time. The canva was too empty, so I added the little pig from the 
// previous exam. And a circle goes from the upper right corner along the edge
// to the bottom of the canvas as a startup animation. To prevent the previous
// circle from being overwritten by the background, I use Arrays to save 
// previous circles, and keep them. 



let song;
let songTwo;
let songButtonOn;
let cookie;
let x;// cookie x value
let y;// cookie y value
let x2;// cookie x2 value
let y2;// cookie y2 value
let numberOfCookies;

var bgcolor;// the background color

let circleX; // will be used in circle start
let circleY;
let circles = []; // the array save previous circle

function preload() {
    soundFormats('mp3');
    song = loadSound('BGM1');
    songTwo = loadSound('BGM2');
    
    // song = loadSound('bellRing'); // this is the test sound file

    songButtonOn = loadImage('audioTurnOn.png');
    cookie = loadImage('cookie.png');
}

function setup(){
    // a canva that is 16:10
    createCanvas(1040, 650);

    imageMode(CENTER);

    x = 520;// the x axis of cookie
    y = 325;// the y axis of cookie

    circleX = 35;
    circleY = 100;

    numberOfCookies = 0; // it will increase when you click on the cookie

    bgcolor = color(185, 180, 157); // initially background color
}


function cookieClicker(){
    x2 = random(100);
    y2 = random(100);

    image(cookie, x, y, x2, y2);

    // how many times you click on the cookie
    textAlign(CENTER); 
    fill(255, 0, 0);
    textSize(48);
    textFont('font');
    text(numberOfCookies, 520, 325);   
    

    // Move logic， move like a rectangle 
    if(y === 150 && x < 740){
        x += 1;
    }
    else if(x === 740 && y < 500){
        y += 1;
    }
    else if(y === 500 && x > 250){
        x -= 1;
    }
    else{
        y -= 1;
    } 
}


function keyPressed() { 
    // color changing button
    if(keyCode === 79) {  // key "O"
        bgcolor = color(185, 180, 157);
    }
    else if(keyCode === 73) { // key "i"
        bgcolor = color(250, 250, 255);
    }
    else if(keyCode === 85){ // key "U"
        bgcolor = color(0, 0, 0);
    }
}

function interfaceColor(){
    textAlign(CENTER); // Font alignment and center

    // interface choose button area background
    noStroke();
    fill(0, 0, 255);
    rect(870, 0, 170, 60);

    // create a interface Color button, oringinal color
    stroke(0);
    fill(185, 180, 157);
    rect(985, 5, 40, 20);

    // create a interface Color button, white color
    fill(250, 250, 255); // little different than white to seperate the canvas and outside
    rect(935, 5, 40, 20);

    // create a interface Color button, black color
    fill(0, 0, 0);
    rect(885, 5, 40, 20);

    // the Hint of color changeing
    fill(255, 255, 255);
    textSize(14);
    textFont('font');
    text("U         I         O", 955, 40);
    textSize(12);
    text("Change Color", 955, 52);

    // the hint of selecting music
    fill(255, 0, 0);
    textSize(16);
    text("1 to select first Music", 175, 20);
    text("2 to select second Music", 175, 40);
}

function mousePressed(){

    // press 1 then click the play button play the first music
    // press 2 then click the play button play the second music
    if (mouseX > 0 && mouseY > 0 && mouseX < 50 && mouseY < 50){
        if(keyCode === 49){
            if(song.isPlaying()) {
                song.pause();
            } 
            else if(!song.isPlaying()){
                song.play();
            }
        }
        else if(keyCode === 50){
            if(songTwo.isPlaying()){
                songTwo.pause();
            }
            else if(!songTwo.isPlaying()){
                songTwo.play();
            }
        }
    }

    // if pressed on the cookie, value number of Cookie add 1
    if (mouseX > x-40 && mouseY > y-40 && mouseX < x+40 && mouseY < y+40){
        numberOfCookies += 1;
    }
} 

function thePig(){
    strokeWeight(4);
    fill(255, 192, 203);

    // legs
    rect(825, 530, 25, 125);
    rect(950, 530, 25, 125);

    fill(0, 0, 0);
    rect(825, 630, 25, 25);
    rect(950, 630, 25, 25);

    // body
    fill(255, 192, 203);
    ellipse(900, 480, 225, 200);

    // ears
    ellipse(860, 430, 24, 45);
    ellipse(940, 430, 24, 45);

    // face
    ellipse(900, 480, 120, 130);

    // left eye
    fill(255, 255, 255);
    circle(875, 455, 29);
    fill(0, 0, 0);
    circle(875, 455, 15);

    // right eye
    fill(255, 255, 255);
    circle(925, 455, 29);
    fill(0, 0, 0);
    circle(925, 455, 15);

    // nose
    fill(255, 192, 203);
    ellipse(900, 492, 42, 22);
    fill(0, 0, 0);
    circle(892, 492, 10);
    circle(908, 492, 10);

    // mouth
    noFill();
    angleMode(DEGREES);
    arc(900, 508, 45, 45, 45, 135, OPEN);
}

function circleStart(){
    // circle 
    // X = 35, Y = 100
    strokeWeight(2);

    // create many circles, every "length" in array is a circle
    circles.push({ x: 35, y: 100 });// saves the current settings
    for (let i = 0; i < circles.length; i++) {
        let c = circles[i]; // the length will add up whatever you want
        fill(random(255), random(255), random(255));
        ellipse(c.x, c.y, 50); // create a new ellipse 
        if(c.y < 615){
            c.y += 5; 
        }
        else if(c.y === 615 && c.x < 650){
            c.x += 5;
        }
    }
}

function draw(){
    background(bgcolor); 
    strokeWeight(1);

    cookieClicker(); // run cookieCliker
    interfaceColor(); // run interfaceColor
    image(songButtonOn, 25, 25, 50, 50); // play the image
    thePig(); // show the pig

    circleStart(); // show the start animation
}

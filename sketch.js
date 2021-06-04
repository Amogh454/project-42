var start, startImage;
var play, playImage;
var bg;

var spaceShip, spaceShipImage;
var dock, dockingImage;
var dock1, docking1Image;
var dock2, docking2Image;
var dock3, docking3Image;
var dock4, docking4Image;
var invisibleSprite;

function preload(){
  startImage = loadImage("images/start.jpeg");
  playImage = loadImage("images/play.png");
  bg = loadImage("images/spacebg.jpg")
  spaceShipImage = loadImage("images/iss.png");
  docking1Image = loadImage("images/spacecraft1.png")
  docking2Image = loadImage("images/spacecraft2.png")
  docking3Image = loadImage("images/spacecraft3.png")
  docking4Image = loadImage("images/spacecraft4.png")
 
}
function setup() {
  createCanvas(displayWidth, displayHeight);


  spaceShip = createSprite(width/2-100, height/2-10, 10, 10);
  spaceShip.addImage(spaceShipImage);

  dock1 = createSprite(width/2+300, height/2+150, 30, 30);
  dock1.addImage(docking1Image)
  dock1.visible = true;
  dock1.scale = 0.3;

  dock2 = createSprite(width/2+300, height/2+150, 30, 30);
  dock2.addImage(docking2Image)
  dock2.scale = 0.3;
  dock2.visible = false;

  dock3 = createSprite(width/2+300, height/2+150, 30, 30);
  dock3.addImage(docking3Image)
  dock3.scale = 0.3;
  dock3.visible = false;

  dock4 = createSprite(width/2+300, height/2+150, 30, 30);
  dock4.addImage(docking4Image)
  dock4.scale = 0.3;
  dock4.visible = false;

  invisibleSprite = createSprite(width/2-160, height/2-10, 5, 5)
 invisibleSprite.visible = false;

 start = createSprite(width/2, height/2, 20, 20);
 start.addImage(startImage);
 start.scale = 1.1
 play1 = createSprite(width/2, height/2+250, 20, 20);
 play1.addImage(playImage);


}

function draw() {
  background(bg);  

  dock1.velocityY = 0;
  dock1.velocityX = 0;

  dock2.velocityY = 0;
  dock2.velocityX = 0;

  dock3.velocityY = 0;
  dock3.velocityX = 0;

  dock4.velocityY = 0;
  dock4.velocityX = 0;

 
 
 if(keyDown("up")){

   dock1.velocityY = -4
   dock2.velocityY = -4
   dock3.velocityY = -4
   dock4.velocityY = -4

   dock1.visible = true;
   dock2.visible = false;
   dock3.visible = false;
   dock4.visible = false;

 }
 if(keyDown("down")){
  dock1.velocityY = 4
  dock2.velocityY = 4
  dock3.velocityY = 4
  dock4.velocityY = 4

  dock1.visible = false;
  dock2.visible = true;
  dock3.visible = false;
  dock4.visible = false;

}
if(keyDown("right")){
  dock1.velocityX = 4
  dock2.velocityX = 4
  dock3.velocityX = 4
  dock4.velocityX = 4

  dock1.visible = false;
  dock2.visible = false;
  dock3.visible = false;
  dock4.visible = true;

}
if(keyDown("left")){
  dock1.velocityX = -4
  dock2.velocityX = -4
  dock3.velocityX = -4
  dock4.velocityX = -4

  dock1.visible = false;
  dock2.visible = false;
  dock3.visible = true;
  dock4.visible = false;

}







  drawSprites();

  if(dock1.isTouching(invisibleSprite)){
    fill("white")
    textSize(30);
    text("Docking Successful", width/2, height/2+200);
    dock1.velocityY = 0;
    dock1.velocityX = 0;
  
    dock2.velocityY = 0;
    dock2.velocityX = 0;
  
    dock3.velocityY = 0;
    dock3.velocityX = 0;
  
    dock4.velocityY = 0;
    dock4.velocityX = 0;
    
  }

  
 
  





 
}

function mouseClicked(play){
  start.visible = false;
  play1.visible = false;
}


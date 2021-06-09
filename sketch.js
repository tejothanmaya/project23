var WIN = 1;
var PLAY = 0;
var player;
var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation,schoolAnimation;
var school;

function preload()
{
 carAnimation1 = loadAnimation("images/car1.png");
 carAnimation2 = loadAnimation("images/car2.png");
 playerAnimation = loadAnimation("images/Player-03.png");
 logAnimation = loadAnimation("images/log2.png");
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  player = new Player(width/2,height-25);
player.spt.addAnimation("player",playerAnimation);
player.spt.scale = 0.04;



  for(var i=0;i<6;i++){
var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
if(i%2 ===0){
 
var road = createSprite(683,height-50-(i*400)-grassHeight,width,300);
  road.shapeColor = "black";

}
bottomGrass1.shapeColor = "grey";

  }
  for(var i=0;i<40;i++){
cars = new Car(2);
carGroup1.add(cars.spt);
  }
  var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
  if(i%2 ===0){
  var log = createSprite(683,height-50-(i*400)-grassHeight,width,300);
    log.shapeColor = "black";
  }
  bottomGrass1.shapeColor = "grey";
  for(var i=0;i<40;i++){
    log = new Log(2);
    logGroup1.add(log.spt);
  }
  school=createSprite(width-150,height-320);
school.scale = 0.8;
school.shapeColor = "yellow";
school.addAnimation("images/Flag.png");

  
}

function keyPressed(){
  if(keyCode ==UP_ARROW){
    player.move(0,-2);
  }
 else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
  else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }
 else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }
  else if(keyDown("SPACE_KEY")){
    player.jump();
  }
}



function draw() {
  background("skyblue");
  translate(-player.spt.x+width-150,0);
 for(i=1;i<logGroup1.length;i++){
   if(logGroup1[i].x<0){
    logGroup1[i].x = width;
   }
 }
 for(i=1;i<carGroup1.length;i++){
  if(carGroup1[i].x<0){
    carGroup1[i].x = width;
  } 
}
if(carGroup1.isTouching(player.spt)){
player.spt.x = width/2;
player.spt.y = height-75;
}
if(logGroup1.isTouching(player.spt)){
  player.spt.x = player.spt.x-3;
}
else if((player.spt.y>height-1550 && player.spt.y<height-1300) ||
(player.spt.y<height-500 && player.spt.y>height-850) ||
(player.spt.y>height) ||
(player.spt.x<0)||
(player.spt.x>width)){
  player.spt.x = width/2;
  player.spt.y = height-75;
}
if(school.isTouching(player.spt)){
  gameState = WIN;
}
if(gameState==WIN)//WIN state
  { stroke("yellow");
  fill("yellow");
  textSize(40);
  text("YOU WON",500,200); 
  logGroup1.destroyEach();
  carGroup1.destroyEach();
  player.spt.pause();
  road.destroy();
  wall.destroy();
  background("green");
}
if(gameState==PLAY)//Play state
{  
  
  if(school.isTouching(player.spt)){
     gameState = WIN;
  }
  if(keyCode ==UP_ARROW){
    player.move(0,-2);
  }
 else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
  else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }
 else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }
  else if(keyDown("SPACE_KEY")){
    player.jump();
  }

 }

  drawSprites()
}



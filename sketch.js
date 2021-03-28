
var space
var lives=3
var gameState=1
var PLAY=1
var END=0
var score=0
function preload(){
ShImg=loadAnimation("1.png","2.png","3.png")
shImg1=loadImage("1.png")
bg=loadImage("ninjaBackgr.png")
son=loadSound("bgmp.mp3")
attack=loadAnimation("A5.png","A6.png")
bg1=loadImage("bg.gif");
enem=loadImage("en.png")
eneSnd=loadSound("tardis.wav")
liv=loadImage("life.png")
ovIm=loadImage("over.png")
snd=loadSound("bgmp.mp3")
}
function setup(){
    createCanvas(1000,500)
    gameState=PLAY

    background1 = createSprite(600,250,1000,1000);
    background1.addImage(bg);
    background1.scale = 1.5
    background1.velocityX+-5

    over=createSprite(150,150,50,50)
    over.addImage(ovIm)
    over.visible=false;
    over.scale=0.9
    over.x=200

space=createSprite(200,250,5000,100)
down=createSprite(0,305,5000,10)
down.visible=true;
down.shapeColor="white"


invaderGr=new Group();
}
function draw(){
background("pink");

if (background1.x <-1){
    background1.x=background1.width/2
    
  }

if(frameCount-1===0){
    snd.play();
}
if(gameState===PLAY){
    background(bg);
down.x=space.x
if(frameCount%200===0){
    eneSnd.play();
    spawn();
}

console.log(space.x)
space.velocityY=2
space.collide(down)


if(keyDown("left")){
    background1.velocityX=2
    space.changeAnimation("walk",shImg1)
}
else{
    
    
    
}
if(keyDown("space")){
    
    space.changeAnimation("w",attack)
    if(space.isTouching(invaderGr)){
        invaderGr.destroyEach();
        score+=1
    }
}
else{
    if(space.isTouching(invaderGr)){
     
     gameState=END  
    }
    space.addAnimation("w",attack)
    
}
if(lives===0){

}
if(space.x>3200){
 
}
if(space.y===1688){
    down.y=310
}
if(space.y===880||space.y>920){
    space.y=260
    down.y+=15

}
if(space.y>1100){
    down.velocityY=2
}
if(keyDown("down")){
    space.velocityY=2
    
}
if(space.x===1136||space.x>1136){
    down.y=315
}
if(space.x===1933||space.x>1933){
    down.y=320
}
if(space.x===2384||space.x>2384){
    down.y=325
}
if(space.x===2884||space.x>2884){
    down.y=330
}
if(space.x===3198||space.x>3198){
    space.x=200
}
else{
    if(keyDown("right")){
    background1.velocityX=-12
    space.changeAnimation("walk",shImg1)
}
else{
    
    space.addAnimation("walk",ShImg)
    space.velocityX=0
}}

}
if(gameState===END){
    space.visible=false;
    over.visible=true

    re();
}
drawSprites();
textSize(30)
fill("white")
text("Score:"+score,100,100)

}
function spawn(){
    car1 = createSprite(space.x+500,270,20,20);
    car1.velocityX = -12
    car1.scale=0.5
    car1.addImage(enem)
    invaderGr.add(car1)
}
function re(){
    if(keyDown("space")){
        over.visible=false
        space.visible=true
        gameState=PLAY
    }
}
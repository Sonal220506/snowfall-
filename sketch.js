var bgImg;
var snowflake, snowflake2;
var snowflakeImg, snowflake2Img;
var sound;

function preload() {
  bgImg = loadImage("snow2.jpg");
  snowflakeImg = loadImage("snow4.webp");
  snowflake2Img = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bgImg);  

  snowFlakes();
  snowFlakes2();

   

  drawSprites();
}

function snowFlakes (){
    if(frameCount%10===0){
    snowflake = createSprite(random(0,800), 0, 50, 50);
    snowflake.velocityX = -2;
    snowflake.velocityY = 4;
    snowflake.addImage(snowflakeImg);
    snowflake.scale = 0.1;
    }
}

function snowFlakes2 (){
  if (frameCount % 15 === 0){
    snowflake2 = createSprite(random(0,800), 0, 50, 50);
    snowflake2.velocityX = 1;
    snowflake2.velocityY = 3;
    snowflake2.addImage(snowflake2Img);
    snowflake2.scale = 0.1;
  }
}
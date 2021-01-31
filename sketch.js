

function preload(){
   //preload the images here
   star_img = loadImage('images/star.png');
   background_img = loadImage('images/starnight.png');
   fairy_img = loadImage('images/fairy1.png');

}

function setup() {
  createCanvas(800, 750);
  star = createSprite(700,100,10,10)
  fairy = createSprite(300,100,10,10)
  star.addImage(star_img);
  star.scale = 0.5;
  fairy.addImage(fairy_img);
  fairy.scale = 0.1;
}


function draw() {
  background(background_img);

  if(keyDown("d")){
    fairy.x = fairy.x+10
  }
  if(keyDown("a")){
    fairy.x = fairy.x-10
  }
  if(keyDown("s")){
    star.velocityY = 10
  }

  drawSprites();

}
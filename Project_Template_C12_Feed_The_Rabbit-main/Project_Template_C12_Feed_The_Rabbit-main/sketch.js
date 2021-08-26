var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orangeleaves;
var appleImg,orangeleavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  drawSprites();
}



function createApples(){
  if (frameCount % 80 === 0){
  apple = createSprite(10, 10);
  apple.addImage(apple.png);
  apple.x = Math.round(ramdom(5,350))
  apple.scale = 0.4;
  apple.velocityY = -1;
  }
}


function createorangeleaves(){
  if (frameCount % 80 === 0){
  orangeleaves = createSprite(10, 10);
  orangeleaves.addImage(orangeLeaf.png);
  orangeleaves.x = Math.round(ramdom(5,350))
  orangeleaves.scale = 0.4;
  orangeleaves.velocityY = -1;
  }
}
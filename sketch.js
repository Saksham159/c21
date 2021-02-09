var fixedRect, movingRect,pankaj,tripathi;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  pankaj=createSprite(900,400,50,80);
  pankaj.shapeColor="green";
  tripathi=createSprite(300,400,50,80);
  tripathi.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  isTouching(movingRect,fixedRect);
  isTouching(movingRect,pankaj);
  isTouching(movingRect,tripathi);

  drawSprites();
}
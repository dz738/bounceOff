var fixedRect, movingRect;
var a, b, c, d;

function setup() {
  createCanvas(1200, 800);

  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;

  movingRect = createSprite(600, 800, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.velocityY = -5;

  a = createSprite(100, 200, 50, 50);
  b = createSprite(200, 200, 50, 50);
  c = createSprite(300, 200, 50, 50);
  d = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  isTouching(movingRect, a);

  bounceOff(movingRect, fixedRect);

  drawSprites();
}
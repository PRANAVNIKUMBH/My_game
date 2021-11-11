function preload (){
  bgimg = loadImage('i/bg.png')
  bi = loadAnimation('0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  b = createSprite(50,height/2)
  b.addAnimation('b',bi)
}

function draw() {
  background(bgimg);  
  drawSprites();
}
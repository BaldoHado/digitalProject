drawSky();
drawGrass();
drawPond();
drawAllTrees();

function drawAllTrees(){
  for (var i = 0; i < 5; i++) {
    moveTo(randomNumber(0,320),260);
    turnTo(0);
    drawTree(randomNumber(5,20), randomNumber(7, 15));
  }
}

function drawSky(){
  penColor(rgb(165, 240, 231));
  penWidth(300);
  penUp();
  moveTo(0, 110);
  penDown();
  moveTo(320,110);
  penUp();
}

function drawGrass(){
  penRGB(48, 199, 106);
  penWidth(200);
  moveTo(0, 360);
  penDown();
  moveTo(320,360);
  penUp();
}

function drawPond(){
  penRGB(41, 179, 179);
  moveTo(50,360);
  penDown;
  dot(50);
  moveTo(120,360);
  dot(60);
  penUp();
}

function drawTree(radius,length){
  penWidth(20);
  penRGB(117, 78, randomNumber(0,30));
  penDown();
  arcLeft(30,radius);
    for(var i = 0; i < length; i++){
    arcRight(30,radius);
    arcLeft(28,radius);
  }
  penRGB(randomNumber(25,45), randomNumber(175,185), 47);
  dot(randomNumber(40,60));
  move(randomNumber(30,45), randomNumber(-40));
  dot(randomNumber(20,40));
  move(randomNumber(-40,-20), randomNumber(-30,-20));
  dot(randomNumber(35,45));
  penUp();
}
}

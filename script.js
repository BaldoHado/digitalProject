drawSky();
drawGrass();
drawPond();
drawAllTrees();
drawBench();

function drawAllTrees(){
  for (var i = 0; i < 7; i++) {
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
  penRGB(randomNumber(120,180), randomNumber(111,140), randomNumber(0,50));
  penDown();
  arcLeft(30,radius);
    for(var i = 0; i < length; i++){
    arcRight(30,radius);
    arcLeft(28,radius);
  }
  penRGB(randomNumber(20,80), randomNumber(140,185), randomNumber(20,50));
  dot(randomNumber(40,60));
  move(randomNumber(30,45), randomNumber(-40));
  penRGB(randomNumber(20,80), randomNumber(140,185), randomNumber(20,50));
  dot(randomNumber(20,40));
  move(randomNumber(-40,-20), randomNumber(-30,-20));
  penRGB(randomNumber(20,80), randomNumber(140,185), randomNumber(20,50));
  dot(randomNumber(35,45));
  penUp();
}
function drawBench() {
penUp();
moveTo(240,360);

turnTo(0);

penDown();
penWidth(2);
penColor("brown");
drawLine();
drawLine();
drawLine();
drawLine();
turnLeft(90);
moveForward(60);
drawLeg();
turnLeft(215);
moveForward(20);
drawLeg();
turnRight(90);
moveForward(60);
drawLeg();
turnLeft(35);
moveForward(20);
drawLeg();
penUp();
moveForward(30);
}

  



function drawLine () {
moveForward(25);
turnRight(90);
moveForward(15);
turnRight(90);
moveForward(25);
turnLeft(180);
}


function drawLeg() {
turnTo(180);
moveForward(20);
turnTo(0);
moveForward(20);
}

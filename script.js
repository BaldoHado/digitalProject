onEvent("beginButton", "click", function( ) {
  setScreen("gameScreen");
});

//draw background

drawSky();
drawGrass();
drawPond();

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
}

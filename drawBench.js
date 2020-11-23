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

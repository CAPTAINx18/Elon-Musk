var wall, car;

function setup() {
  createCanvas(800,400);
  wall = createSprite(200, 200, 20, 100);
  //wall.shapeColor = "teal";

  car = createSprite(720, 200, 50, 30);
  car.velocityX = -5;
  //car.shapeColor = "teal";
}

function draw() {
  background(255,255,255);  

//car.y = mouseY;
//car.x = mouseX;

  console.log(wall.y -  car.y);



 if(TouchSpace(wall, car)){
  wall.shapeColor = "red";
  car.shapeColor = "red";
 }

  else{
    wall.shapeColor = "turquoise";
    car.shapeColor = "turquoise";
  }

  
  //Bounceoff(wall, car);

  //combine(wall, car);
  
  Bounce(wall, car);


  drawSprites();
}


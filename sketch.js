var wall,car,thickennes;
var speed,wieght,deformation;
function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200, 20, 20);
  car.shapeColor="white"
  thickennes=random(22,83)
  wall=createSprite(1200,200,thickness,hieght/2);
  wall.shapeColor="white";
  speed=random(223,323);
  car.velocityX=speed;
  wieght=random(30,52);
  thickennes=random(22,83)
}

function draw() {
  background(0);
  deformation=0.5*wieght*speed*speed/(thickennes*thickennes*thickennes);
 if(car.isTouching(wall)){
   if(deformation>10){
     car.velocityX=0
     wall.shapeColor="red"
   }
   if(deformation<10){
    car.velocityX=0
    wall.shapeColor="green"
  }
  
 }
  drawSprites();
}
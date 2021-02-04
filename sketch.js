var wall,speed,weight
var bullet,thickness

function setup() {
  createCanvas(1600,400);
  speed=random(50,100)
  weight=random(400,1500)
  thinkness=random(22,85)
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
  bullet.shapeColor="orange"
  
  wall=createSprite(1500,200,60,150)
  wall.shapeColor="brown"
}

function draw() {
  background(0);  
 if(Collied(bullet,wall))
 {
   bullet.velocityX=0
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10)
{
  wall.shapeColor="blue"
}

if(damage<10)
{
  wall.shapeColor="red";
}



  }
  drawSprites();
}
function Collied(Ibullet,Iwall){
bulletRightEdge=Ibullet.x+Ibullet.width;
wallLeftEdge=Iwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}
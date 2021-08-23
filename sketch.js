const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,ball,myEngine,myWorld;
function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var ground_opt={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,200,20,ground_opt);
  World.add(myWorld,ground)
  
  var ball_opt={
    restitution:1
  }
  ball=Bodies.circle(200,380,20,ball_opt);
  World.add(myWorld,ball)
}

function draw() {
  background("cyan");
  Engine.update(myEngine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var wall1,wall2,ground
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Wall(400,680,800,40);
	wall1=new Wall(500,620,20,80)
	wall2=new Wall(650,620,20,80);

	var options={
		restitution:0.3,
		density:1
	}
  	ball=Bodies.circle(60,100,10,options);
	  World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();

  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,10,10)
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball,ball.position,{
			x:12,
			y:-10
		})
	}
}




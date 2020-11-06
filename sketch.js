
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,dustbin,ground,box1,box2

function preload()
{	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box(550,650,10,60);
	box2 = new Box(750,650,10,60);
	box3= new Box(650,675,200,10)
	ground = new Ground(200,height,1300,20)
	

paperObject=new Paper(100,400,25)








	//Create the Bodies Here.


	Engine.run(engine);
  
	

	
 	
}


function draw() {
  rectMode(CENTER);
 
  Engine.update(engine)

 background(0);
  


 


 box1.display()
box2.display()
box3.display()
paperObject.display()
ground.display()

  drawSprites();
 
}

function keyPressed() {

if (keyCode=== UP_ARROW) {

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:15,y:-38});

}

}




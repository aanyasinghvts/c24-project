
var ground,paper1,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);
	paper1 = new paper(400,400,10);
	side1 = new Dustbin(410,400,10,100);
	side2 =  new Dustbin(510,400,10,100);
	side3 = new Dustbin(470,400,400,10);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
   ground.display();
   paper1.display();
   side1.display();
   side2.display();
   side3.display();
   
}

function keypressed(){
	if (keycode === UP_ARROW){
		Matter.Body.applyforce(paper1.body, paper1.body.position,{x:85, y:-85})
	}
}




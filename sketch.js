
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobobject1,bobobject2,bobobject3,bobobject4;
var bobobject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobobject1 = new Bob(300,700);
	bobobject2 = new Bob(400,700);
	bobobject3 = new Bob(500,700);
	bobobject4 = new Bob(600,700);
	bobobject5 = new Bob(700,700);
    
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
 bobobject1.display();
 bobobject2.display();
 bobobject3.display();
 bobobject4.display();
 bobobject5.display();


  
  drawSprites();
 
}




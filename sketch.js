
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof(600,50,400,20);
	bob1=new Bob(500,450,50);
	bob2=new Bob(550,450,50);
	bob3=new Bob(600,450,50);
	bob4=new Bob(650,450,50);
	bob5=new Bob(700,450,50);
	rope1=new Rope(bob1.body,{x:435,y:50});
	rope2=new Rope(bob2.body,{x:520,y:50});
	rope3=new Rope(bob3.body,{x:615,y:50});
	rope4=new Rope(bob4.body,{x:700,y:50});
	rope5=new Rope(bob5.body,{x:775,y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-280,y:-280});
	  
	  }

  
	}




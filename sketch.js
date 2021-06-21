const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var con1,con2,con3,con4,con5;
var world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

   var options = {
	isStatic:true,
	frictionAir:0.01
   }

	bob1 = new Bob(320,380,20,options);
	bob2 = new Bob(360,380,20,options);
	bob3 = new Bob(400,380,20,options);
	bob4 = new Bob(440,380,20,options);
	bob5 = new Bob(480,380,20,options);
   
	con1=new Rope(bob1.body,roof,-80, 0)
	con2=new Rope(bob2.body,roof,-40, 0)
	con3=new Rope(bob3.body,roof,0, 0)
	con4=new Rope(bob4.body,roof,40, 0)
	con5=new Rope(bob5.body,roof,80, 0)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();

  //call display() to show ropes here
  con1.display();
  con2.display();
  con3.display();
  con4.display();
  con5.display();
  
  //create ellipse shape for multiple bobs here
  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:10,y:-45});
	}
}
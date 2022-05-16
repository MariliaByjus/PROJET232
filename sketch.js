
var plane , block1 , block2 , rotator1 , rotator2 , rotator3;

var angle2 = 90;
var angle3 = 70;
var angle = 60;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);

	rectMode(CENTER); 
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.


	Engine.run(engine);



	var plane_options = {
		isStatic: true
	}
	 var block1_options = {
		 isStatic: true
	 }
	 var block2_options = {
		 isStatic: true
	 }
    var rotator1_options = {
isStatic: true
	}
    
	 
	 

	 // criando chão
	 	plane = Bodies.rectangle(220,600,400,30,plane_options);
	 // adicionando ele ao mundo
	 	World.add(world,plane);

	 // criando block1
	block1 = Bodies.rectangle(130,375,200,10,block1_options);
	 // adicionando ao mundo
	World.add(world,block1);
	 // criando retangulo 2
   block2 = Bodies.rectangle(460,375,200,10,block2_options);
    // adicionando ele ao mundo
   World.add(world,block2);
// crindo rotator1
rotator1 = Bodies.rectangle(250,200,150,20,rotator1_options);
// adicionando ele no mundo
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,200,150,20,rotator1_options);
	World.add(world,rotator2)
	rotator3 = Bodies.rectangle(250,200,150,20,rotator1_options);
	World.add(world,rotator3);


}

function draw() {



 	 rectMode(CENTER);


  background("lightgreen");
	Engine.update(engine);
  drawSprites();
  rect(plane.position.x,plane.position.y,770,30);

  rect(block1.position.x,block1.position.y,200,20);
 
  rect(block2.position.x,block2.position.y,200,20);
 

  Body.rotate(rotator1,angle);
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle);
velocityX =1;
velocityY=1;
rect(0,0,150,20);
pop();
angle +=0.1;
}
Body.rotate(rotator2,angle);
push();
translate(rotator2.position.x,rotator1.position.y);
rotate(angle2);
velocityX =1;
velocityY=1;
rect(0,0,150,20);
pop();
angle +=0.1;

Body.rotate(rotator3angle);
push();
translate(rotator3.position.x,rotator1.position.y);
rotate(angle3);
velocityX =1;
velocityY=1;
rect(0,0,150,20);
pop();
angle +=0.1;









// Creating constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Creating variables.
var Paper1, Ground1, dustBin1, dustBin2, dustBin3;

// Creating function setup.
function setup() {
	createCanvas(1370, 650);


	engine = Engine.create();
	world = engine.world;

	Ground1 = new Ground(600,625,1540,50);
	invisibleWall = new Ground(1380,300,10,600)
	
	Paper1 = new Paper(100,600,40);
	dustBin1= new dustBin(1000,550,20,100);
	dustBin2=new dustBin(1105,590,190,20);
	dustBin3=new dustBin(1200,550,20,100);


	Engine.run(engine);
  
}

// Creating function draw.
function draw() {
  rectMode(CENTER);
  background(0);
  

  Ground1.display();  
  invisibleWall.display(); 
  Paper1.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();

  fill(124,252,0);
  textSize(40);
  textStyle(BOLD);
  textFont("segoe script");
  text("AKSHAY'S CRUMPLED BALLS - 1 2020",250,80);

  fill("WHITE");
  textSize(20);
  textStyle(BOLD);
  textFont("segoe script");
  text("PRESS UP-ARROW KEY TO THROW ",50,250);

  fill("WHITE");
  textSize(20);
  textStyle(BOLD);
  textFont("segoe script");
  text("THE WASTE IN THE TRASHBIN",50,290);

  drawSprites();
  
}

// Creating function keyPressed
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:90,y:-90});   
	 }
   }



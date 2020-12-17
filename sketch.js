

var ground;
var Box1,Box2,Box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// function preload()
// {
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    Box1=new Box(330,555,150,8)

    
    Box2=new Box(252,535,8,50)


    Box3=new Box(405,535,8,50)
	
	
	paper1=new Paper(40,200,10, 10)
    
	ground = new Ground(200,height,1200,20)
  
    World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }
  ground.display()
  drawSprites();
 
}




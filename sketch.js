
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var mango1, mango2, mango3, mango4, mango5;
var boy, boyimg;
var ground, tree;
var slingshot;

function preload()
{
	boyimg = loadImage('boy.png');
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	stone = new Stone();
	ground = new Ground();
  tree = new Tree();
  //slingshot = new Slingshot(stone.body,{x:50, y:470})
}


function draw() {
  background(255);
  Engine.update(engine);

  ground.display();
  tree.display();
  stone.display();
  image(boyimg,100,530,160,240);

text(mouseX+","+mouseY,mouseX,mouseY);
}

function mouseDragged(){
  Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.release();
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var mango1, mango2, mango3, mango4, mango5;
var mangotest1, mangotest2, mangotest3, mangotest4, mangotest5;
var boy, boyimg;
var ground, tree;
var slingshot;
var score, combo;

function preload()
{
	boyimg = loadImage('boy.png');
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  score = 0;
  combo = 0;
  mangotest1 = 1;
  mangotest2 = 1;
  mangotest3 = 1;
  mangotest4 = 1;
  mangotest5 = 1;

	stone = new Stone();
	ground = new Ground();
  tree = new Tree();
  slingshot = new Slingshot(stone.body,{x:150, y:470});
  mango1 = new Mango(550,300);
  mango2 = new Mango(600,370);
  mango3 = new Mango(700,370);
  mango4 = new Mango(480,360);
  mango5 = new Mango(630,300);
}


function draw() {
  background(255);
  Engine.update(engine);

  ground.display();
  tree.display();
  image(boyimg,200,530,160,240);
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);

  if(mango1.body.isStatic == false && mangotest1 == 1){
    combo+=1;
    score=score+(1*combo);
    mangotest1 = 0;
  }
  if(mango2.body.isStatic == false && mangotest2 == 1){
    combo+=1;
    score=score+(1*combo);
    mangotest2 = 0;
  }
  if(mango3.body.isStatic == false && mangotest3 == 1){
    combo+=1;
    score=score+(1*combo);
    mangotest3 = 0;
  }
  if(mango4.body.isStatic == false && mangotest4 == 1){
    combo+=1;
    score=score+(1*combo);
    mangotest4 = 0;
  }
  if(mango5.body.isStatic == false && mangotest5 == 1){
    combo+=1;
    score=score+(1*combo);
    mangotest5 = 0;
  }

  text("SCORE: "+score,30,30);
  if(combo>1){
  text("COMBO MULTIPLIER X"+combo,30,60);
  }
  text("PRESS SPACE FOR ANOTHER CHANCE!",30,90);

}

function mouseDragged(){
  Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.release();
}

function keyPressed() {
  if (keyCode == 32){
    Body.setPosition(stone.body,{x:250,y:390})
    combo = 0;
    slingshot.launcher();
  }
}

function detectCollision(mango, stone){
  var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y);
  if(distance<=sqrt(40*2)+44){
    Body.setStatic(mango.body,false);
  }
}

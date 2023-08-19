
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var plank;
var ground;
var higherground;
var con;
var con2;
var rope;
var ground;
var ball;
var ground;
var LEFT_ARROW;
var RIGHT_ARROW;

function preload(){
 
}
function setup() {
  createCanvas(400,400);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  //ground =new Ground(250,height-10,width,20);
  
  ground = createSprite(290,460,20,20);
  ground.addImage('gameground.jpeg')

  LEFT_ARROW = createImg('9-96643_red-right-arrow-png-left-red-arrow-symbol.png');
  LEFT_ARROW.position(0,0);
  LEFT_ARROW.size(100,60);

  RIGHT_ARROW = createImg('538-5386482_png-red-arrow-file-short-right-arrow-red.png');
  RIGHT_ARROW.position(110,0);
  RIGHT_ARROW.size(100,60);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  drawSprites()
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var platform;

function preload()
{
	
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;


    platform = new Ground(150, 305, 300, 170);

    //chain1 = new Chain(bird.body, log6.body, 1, 5)
    
    Engine.run(engine);


}

function draw(){
    background("purple")
    Engine.update(engine);
    console.log(platform)

    platform.display();

    //strokeWeight (3)
    //line (bird.body.position.x,bird.body.position.y,log6.body.position.x,log6.body.position.y)
}


const Engine = Matter.Engine;
const World  = Matter.World;
const Body   = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse      = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
function setup(){
canvas = createCanvas(700 ,400);
engine = Engine.create();
world = engine.world;

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
	mouse : canvasmouse
};
mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);

pendulum1 = new Pendulum(140,260,"#00b0ff");
pendulum2 = new Pendulum(200,260,"#00b0ff");
pendulum3 = new Pendulum(260,260,"#00b0ff");
pendulum4 = new Pendulum(320,260,"#00b0ff");
pendulum5 = new Pendulum(380,260,"#00b0ff");
sling1 = new Sling(pendulum1.body,{x : 140,y : 80})
sling2 = new Sling(pendulum2.body,{x : 200,y : 80})
sling3 = new Sling(pendulum3.body,{x : 260,y : 80})
sling4 = new Sling(pendulum4.body,{x : 320,y : 80})
sling5 = new Sling(pendulum5.body,{x : 380,y : 80})
}

function draw(){
background(220,180);
Engine.update(engine)
pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x : mouseX, y : mouseY})
}
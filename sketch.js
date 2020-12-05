var helicopterIMG, helicopterSprite, packageSprite,packageIMG
var packageBody,ground,box1,box2,box3
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
function preload(){
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}
function setup(){
createCanvas(1500,700)
box1=createSprite(650,600,20,100)
box2=createSprite(730,650,150,20)
box3=createSprite(800,600,20,100)
packageSprite=createSprite(width/2,100,20,20)
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2
helicopterSprite=createSprite(width/2,210,20,20)
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.8
groundSprite=createSprite(width/2,height-32,width,35)
groundSprite.shapeColor=color(255)
engine=Engine.create()
world=engine.world;
packageBody=Bodies.circle(width/2,210,6,{restitution:0.5,isStatic:false})
World.add(world,packageBody)
ground=Bodies.rectangle(width/2,645,width,11,{isStatic:true})
World.add(world,ground)
Engine.run(engine)
}
function draw(){
background(204)
packageSprite.x=packageBody.position.x 
packageSprite.y=packageBody.position.y 
box1.collide(packageSprite)
box2.collide(packageSprite)
box3.collide(packageSprite)
box1.collide(groundSprite)
box2.collide(groundSprite)
box3.collide(groundSprite)
drawSprites();
}

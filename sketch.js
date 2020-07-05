
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies ;
const Constraint=Matter.Constraint ;
var pc,npc;
var player2 , enemy2;
var ArrowGroup,npcGroup;
var pcarrowimg;
var backimg , count=0;
var Arrow;
var score=0;
var blue,red;
var pcbow,npcbow;
var npcb,pcb ;
var relsound,kilsound,scoresound;
var direction=-45;
var playx,playy;

function preload(){
 backimg=loadImage("bg.jpg");
 player2=loadImage("player.png");
 enemy2=loadImage("enemy.png");
 pcarrowimg=loadImage("player arrow.png");
 pcbow=loadImage("playerbow.png");
 npcbow=loadImage("enemybow.png");
 relsound=loadSound("relea.mp3");
 kilsound=loadSound("kil.mp3");
 scoresound=loadSound("scor.mp3");

 ArrowGroup =new Group();
 npcGroup=new Group();
 blue=createSprite(680,80,50,50);
 red=createSprite(630,80,50,50);
 

}


function setup() {
 engine=Engine.create();
 world=engine.world ;
  createCanvas(1350,750);
  pc = createSprite(280,640,10,10);
  pc.addImage(player2);
  pc.scale=1.3;
  pcb=createSprite(pc.x,pc.y);
  
  pcb.addImage(pcbow);
  pcb.scale=1.3;
  
  pcb.direction-=1;


 
}

function draw() {
 background(backimg);
 backimg.scale=0.9;

 //console.log(npc.depth)
 
 // image(backimg, 0, -displayHeight*4,displayWidth,displayHeight*5);
  
  Engine.update(engine); 

 blue.shapeColor="blue";
 red.shapeColor="red";
 textSize(36);
 fill("black");
 text(" 0" + score, width-770, 100);
 createnpc();
 
 if(keyIsDown(32)){
   //console.log("kill");
   createArrow(playx+20,playy);
   relsound.play();

   //npc.depth=Arrow.depth ;
  // Arrow.depth;
   //console.log(Arrow.depth);
 }
 if (keyDown(UP_ARROW)){
      pcb.rotation-=10;
      playx=pcb.x;
      playy=pcb.y;
 }
 if (keyDown(DOWN_ARROW)){
   pcb.rotation=+50;
   playy=pcb.y;
   playx=pcb.x;
 }
 console.log(pcb.rotation);
// console.log(playx);
  
 


 if(ArrowGroup.isTouching(npcGroup))
  {
    console.log("tag");
  count=count+1 ;
  if (count===2){
    npc.remove();
    kilsound.play();
    npcb.remove();
    score=score+1 ;
    scoresound.play();
  }
  scoresound.play();
  }
 
 //console.log(count);
 
   

 //pcb.y=mouseY;
 

 if(score===30){
   pc.remove();
   npc.remove();
   textSize(72);
   text("You Win",675,275);
   
 }
  


  drawSprites();
  textSize(36);
 fill("black");
 text( score, width-760, 100);
  textSize(36)
  fill("black");
  text("30",660,100);
  //console.log (npc.debug);
}
function createArrow(x,y){
  Arrow=createSprite(x,y,10,10);
  Arrow.addImage(pcarrowimg);
  Arrow.velocityX=5;
 // Arrow.depth=pc.depth ;
  Arrow.velocityY=-5;
  Arrow.scale=0.1;
  Arrow.rotation=pcb.rotation ;

  ArrowGroup.add(Arrow);

  direction=2;
  Arrow.setSpeed(3,direction);

 //console.log(Arrow);
}

function createnpc(){

  if(frameCount % 200 === 0 ){
    npc=createSprite(1000,340,100,100);
    //npc.x=Math.round(random(200,1150));
    npc.y=Math.round(random(280,650));
    npcb=createSprite(npc.x,npc.y,10,10);
    npcb.addImage(npcbow);
    npcb.scale=1.5;
    npc.addImage(enemy2);
    npc.scale=1.3;
    npcGroup.add(npc);
  }
  

  

  
}


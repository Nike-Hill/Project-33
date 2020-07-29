const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var score = 0;
var turn = 0;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight= 300;
var gameState = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
  fill(255,0,0);
  text("Score: " + score, 380, 450)
  text("500", 27,600)
  text("500", 107,600)
  text("500", 187,600)
  text("500", 267,600)
  text("200", 347,600)
  text("200", 427,600)
  text("200", 507,600)
  text("100", 587,600)
  text("100", 667,600)
  text("100", 747,600)

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     turn++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
   if(particles != null)
   {
     particles.display();

     if(particle.body.position.y > 760){
          if(particle.body.position.x < 300){
            score += 500;
            particle = null;
            if(count >= 5) {
              gameState = "end";
          }
          }
          if(particle.body.position.x < 600){
            score += 200;
            particle = null;
            if(count >= 5) {
              gameState = "end";
          }
        }
          if(particle.body.position.x < 900){
            score += 500;
            particle = null;
            if(count >= 5) {
              gameState = "end";
          }
      }
   }
   }
  }


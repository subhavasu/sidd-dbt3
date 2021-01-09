
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p16,p17,p18,p19,p20;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
//var plinkos=[];
function preload()
{
	
}


function setup() {
	createCanvas(600,1200);


	engine = Engine.create();
	world = engine.world;
//8
/*p1= new Plinko (100,200,14)
p2= new Plinko (150,200,14)
p3= new Plinko (200,200,14)
p4= new Plinko (250,200,14)
p5= new Plinko (300,200,14)
p6= new Plinko (350,200,14)
p7= new Plinko (400,200,14)
p8= new Plinko (450,200,14)
//7
p9= new Plinko (125,250,14)
p10= new Plinko (175,250,14)
p11= new Plinko (225,250,14)
p12= new Plinko (275,250,14)
p13= new Plinko (325,250,14)
p14= new Plinko (375,250,14)
p15= new Plinko (425,250,14)

p16= new Plinko (100,300,14)
p17= new Plinko (150,300,14)
p18= new Plinko (200,300,14)
p19= new Plinko (250,300,14)
p20= new Plinko (300,300,14)
p21= new Plinko (350,300,14)
p22= new Plinko (400,300,14)
p23= new Plinko (450,300,14)

p24= new Plinko (125,350,14)
p25= new Plinko (175,350,14)
p26= new Plinko (225,350,14)
p27= new Plinko (275,350,14)
p28= new Plinko (325,350,14)
p29= new Plinko (375,350,14)
p30= new Plinko (425,350,14)

p31= new Plinko (100,400,14)
p32= new Plinko (150,400,14)
p33= new Plinko (200,400,14)
p34= new Plinko (250,400,14)
p35= new Plinko (300,400,14)
p36= new Plinko (350,400,14)
p37= new Plinko (400,400,14)
p38= new Plinko (450,400,14)

p39= new Plinko (125,450,14)
p40= new Plinko (175,450,14)
p41= new Plinko (225,450,14)
p42= new Plinko (275,450,14)
p43= new Plinko (325,450,14)
p44= new Plinko (375,450,14)
p45= new Plinko (425,450,14)

ground=new Ground (300,800,550,10)
wall1 = new Ground (30,500,10,600)
wall2 = new Ground (570,500,10,600)*/
particle=new Particle (300,50,15)

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

    

    

   

   


	Engine.run(engine);
  
}


function draw() {
 
  background("black");
  Engine.update(engine);
/*p1.display();
p2.display();
p3.display();
p4.display();
p5.display();
p6.display();
p7.display();
p8.display();

p9.display();
p10.display();
p11.display();
p12.display();
p13.display();
p14.display();
p15.display();

p15.display();
p16.display();
p17.display();
p18.display();
p19.display();
p20.display();
p21.display();
p22.display();
p23.display();

p23.display();
p24.display();
p25.display();
p26.display();
p27.display();
p28.display();
p29.display();
p30.display();

p31.display();
p32.display();
p33.display();
p34.display();
p35.display();
p36.display();
p37.display();
p38.display();

p39.display();
p40.display();
p41.display();
p42.display();
p43.display();
p44.display();
p45.display();

ground.display();
wall1.display();
wall2.display();*/
particle.display();

text(mouseX + "," + mouseY, 20, 50);
 
  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }
console.log(plinkos)
  for (var j = 0; j < particles.length; j++) {
  
	particles[j].display();
  }
 
  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
	score++;
  }

  drawSprites();
}




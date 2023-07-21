const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let world;
let engine;

var bgImage;
var bolaImage,bola;
var ground;
var golesquerdo, golesquerdoImage, goldireito, goldireitoImage;
var messi, messiImage, nilson, nilsonImage;

function preload(){
  
  bolaImage = loadImage ("./assets/boladefutebol.png");
  bgImage = loadImage ("./assets/campodefutebol.jpg");
  golesquerdoImage = loadImage("./assets/gol-lado esquerdo.png");
  goldireitoImage = loadImage ("./assets/gol-lado direito.png");
  messiImage = loadImage ("./assets/messi.png");
  nilsonImage = loadImage ("./assets/nilson.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  //criando o sprite do jogador
  ground = Bodies.rectangle(width/2,height+30, width,10,{isStatic:true});
  World.add(world,ground);
  
  //bodies= criar o corpo da bola e do objeto
  bola = Bodies.circle(width/2, height/2, 60);
  World.add(world, bola);


  ellipseMode(RADIUS);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(0);
  rect(ground.position.x, ground.position.y,width,10);
  image(bgImage,width/2,height/2,width,height);

  image(bolaImage, bola.position.x, bola.position.y, 60, 60);
  
  golesquerdo = createSprite (200,800,300,200);
  golesquerdo.addImage(golesquerdoImage);
  golesquerdo.scale = 0.6;

  goldireito = createSprite(1850,800,10,50);
  goldireito.addImage(goldireitoImage);
  goldireito.scale = 0.6;

  messi = createSprite(500,900);
  messi.addImage(messiImage);
  messi.scale = 0.2;

  nilson = createSprite(1550,900);
  nilson.addImage(nilsonImage);
  nilson.scale = 0.2;

  drawSprites();
  Engine.update(engine);
}

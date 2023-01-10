var paquito;
var paquito_running;
var backgroundImg;
var ground,invisibleGround,groundImage;
//var groundImage;

function preload(){
    backgroundImg = loadImage("cueva1.jpg");
    paquito_running = loadAnimation("perro1.png","perro2.png","perro3.png","perro4.png","perro5.png","perro6.png");
    groundImage = loadImage("ground.jpg");
}

function setup(){
    createCanvas(600,600);
    paquito = createSprite(100,510);
    paquito.addAnimation("running",paquito_running);
    paquito.scale = 0.25;

    invisibleGround = createSprite(width/2,height-10,width,125);
    invisibleGround.shapeColor = "#f4cbaa";

    ground = createSprite(width/2,height,width,2);
    ground.addImage("ground",groundImage);
    ground.x = width/2;
}

function draw(){
    background(backgroundImg);

    if(keyDown(RIGHT_ARROW)){
        paquito.x = paquito.x + 2.5;
    }
    if(keyDown(LEFT_ARROW)){
        paquito.x = paquito.x - 2.5;
    }
    if(keyDown(UP_ARROW)){
        paquito.velocityY = -10;
    }
    drawSprites();
}
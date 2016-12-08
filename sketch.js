var wormy;
var wormyAnimation;
var wormyAnimationFrames = [
  {'name':'WormyAnimation01','frame':{'x':0,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation02','frame':{'x':256,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation03','frame':{'x':512,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation04','frame':{'x':768,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation05','frame':{'x':1024,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation06','frame':{'x':1280,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation07','frame':{'x':1536,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation08','frame':{'x':1792,'y':0,'width':256,'height':256}},
  {'name':'WormyAnimation09','frame':{'x':2048,'y':0,'width':256,'height':256}}
];

var batFriend;
var batFriendAnimation;
var batFriendFrames = [
  {'name':'BatFriendAnimation01','frame':{'x':2304,'y':0,'width':256,'height':256}},
  {'name':'BatFriendAnimation01','frame':{'x':2560,'y':0,'width':256,'height':256}},
  {'name':'BatFriendAnimation01','frame':{'x':2816,'y':0,'width':256,'height':256}},
  {'name':'BatFriendAnimation01','frame':{'x':0,'y':256,'width':256,'height':256}}
];

var skelly;
var skellyAnimation;
var skellyAnimationFrames = [
  {'name':'SkellyAnimation','frame':{'x':256,'y':256,'width':256,'height':256}},
  {'name':'SkellyAnimation','frame':{'x':512,'y':256,'width':256,'height':256}},
  {'name':'SkellyAnimation','frame':{'x':768,'y':256,'width':256,'height':256}},
  {'name':'SkellyAnimation','frame':{'x':1024,'y':256,'width':256,'height':256}},
  {'name':'SkellyAnimation','frame':{'x':1280,'y':256,'width':256,'height':256}},
];

var heroIdle;
var heroIdleAnimation;
var heroIdleFrames = [
  {'name':'HeroIdle01','frame':{'x':1536,'y':256,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':1792,'y':256,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2048,'y':256,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2304,'y':256,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2560,'y':256,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2816,'y':256,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':0,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':256,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':512,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':768,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':1024,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':1280,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':1536,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':1792,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2048,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2304,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2560,'y':512,'width':256,'height':256}},
  {'name':'HeroIdle01','frame':{'x':2816,'y':512,'width':256,'height':256}},
];

var heroRight;
var heroRightAnimation;
var heroRightFrames = [
  {'name':'HeroRight01','frame':{'x':
];

var enemyRate1 = 100;
var enemies;
var enemy;
var enemyAngle = 30
var gameState = 'startUp';

var hero;
var heroSpeed = 8;
var bg;
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 1800;
var SCENE_H = 1000;

var explosionDensity = 20;
var score = 0;
var heroHealth = 5;

//declare sprite groups
var bullets;
var enemies;

var level1ScoreAdvance = 5;
var level2ScoreAdvance = 10;
var level3ScoreAdvance = 15;

var count1Downtimer = 0;
var count2Downtimer = 0;
var count3Downtimer = 0;

var hero;

function preload(){
  wormyAnimation = loadSpriteSheet('assets/TOPDOWNSPRITESHEET.png',wormyAnimationFrames);
  batFriendAnimation = loadSpriteSheet('assets/TOPDOWNSPRITESHEET.png',batFriendFrames);
  skellyAnimation = loadSpriteSheet('assets/TOPDOWNSPRITESHEET.png',skellyAnimationFrames);
  heroIdleAnimation = loadSpriteSheet('assets/TOPDOWNSPRITESHEET.png',heroIdleFrames);
  heroRightAnimation = loadSpriteSheet('assets/TOPDOWNSPRITESHEET.png',heroRightFrames);
}

function setup() {
  createCanvas(800,400);
   enemies = new Group();
   bullets = new Group();
  //create a sprite and add the 3 animations
  hero = createSprite(400, 200, 50, 100);
  
  hero.addAnimation('idle',heroIdleAnimation);
  hero.addAnimation('left',heroLeftAnimation);
  hero.addAnimation('right',heroRightAnimation);
  
  hero.friction = .89;
  
  
}

function draw() {
  
  switch(gameState){
    case 'startUp':
      background(0);
      fill('white');
      text('Press X to Begin',width/2,height/2);
    break;
    
    case 'win':
      background(0);
      fill('white');
      textSize(25);
      text('You Won!',width/2,height/2);
    break;
    
    case 'lose':
      background(0);
      fill('white');
      textSize(25);
      text('You Died',width/2,height/2);
    break;
    
    case 'countDown1':
      background(0);
      fill('white');
      textSize(32);
      //only runs the first time through the coutdown
      if(count1Downtimer === 0){
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",width/2,height/2);
      }else{
        text(3 - flooredCount,width/2,height/2);
      }
      
      if(flooredCount > 3){
        gameState = "levelOne";
      }  
    break;
    
    case 'levelOne':
      levelOne();
    break;
    
    case 'countDown2':
        background(0);
      fill('white');
      textSize(32);
      //only runs the first time through the coutdown
      if(count2Downtimer === 0){
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",SCENE_W/2,SCENE_H/2);
      }else{
        text(3 - flooredCount,SCENE_W/2,SCENE_H/2);
      }
      
      if(flooredCount > 3){
        gameState = "levelTwo";
      }  
    break;
    
    case 'levelTwo':
      levelTwo();
    break;
    
    case 'countDown3':
          background(0);
      fill('white');
      textSize(32);
      //only runs the first time through the coutdown
      if(count3Downtimer === 0){
        count3Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count3Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",SCENE_W/2,SCENE_H/2);
      }else{
        text(3 - flooredCount,SCENE_W/2,SCENE_H/2);
      }
      
      if(flooredCount > 3){
        gameState = "levelThree";
      }  
    break;
    
    case 'levelThree':
      levelThree();
    break;
  }
  
  
  //limit the hero movements
  if(hero.position.x < 0)
    hero.position.x = 0;
  if(hero.position.y < 0)
    hero.position.y = 0;
  if(hero.position.x > SCENE_W)
    hero.position.x = SCENE_W;
  if(hero.position.y > SCENE_H)
    hero.position.y = SCENE_H;


  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at 
  //the absolute 0,0 (try to see what happens if you don't turn it off
  camera.off();
}

  function keyTyped(){
    if(key === 'x'){
      gameState = 'countDown1';
    }
}

 function keyPressed(){
    
  //limit the hero movements
  if(key === 'D'){
    hero.setSpeed(heroSpeed,0);
  } 
  else if (key === 'A') {
    hero.setSpeed(heroSpeed,180);
  } 
  else if (key === 'W') {
    hero.setSpeed(heroSpeed, 270);
  } 
  else if (key === 'S') {
    hero.setSpeed(heroSpeed,90);
      }
    }


function mouseClicked(){
   if(mouseClicked){
   //create bullet
      var bullet = createSprite(hero.position.x,hero.position.y,20,20);
      var angle;
      angle = atan2(mouseY - height/2,mouseX - width/2);
      angle = degrees(angle);
      //set speed and direction of bullet
      bullet.setSpeed(20,angle);
      //mkae the bullet disapear after x amout of frames
      bullet.life = 40;
      //adding bullet to the group bullets
      bullets.add(bullet);
  }
}
function levelOne(){
   background(0);
  randomSeed(frameCount*1000);
  //creating an enemy every 30 frames
    if(frameCount%enemyRate1 === 0){
  //make an enemy at the top, random X position
    var xpos = random(SCENE_W);
    //print(xpos);
    var ypos = random(SCENE_H);
    //print(ypos);
    var enemy = createSprite(random(xpos),random(ypos),100,100);
      //set speed and direction of enemy
      //enemy.setSpeed(4,random(width),random(height));
      //make the enemy disapear after x amout of frames
      enemy.life = 1000;
      //health slot
      enemy.type = 0;
      enemy.addAnimation('wormyAnimation',wormyAnimation);
      //enemy.debug = true;
      //adjusts hitboxes for enemies
      enemy.setCollider('rectangle',0,0,250,50);
      //adding enemy to the group enemies
      enemies.add(enemy);
      enemy.attractionPoint(5, hero.position.x,hero.position.y);
  }
  
  
   //are we turning left?
 //are we done turning left?
 if(hero.getAnimationLabel() == "left" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("idle");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  //are we turning right?
  //are we done turning right?
   if(hero.getAnimationLabel() == "right" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("idle");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  
  
   //Bouncing!
  for(var i = 0;i < enemies.length;i++){
    if (enemies[i].velocity.x > 0){
      enemies[i].mirrorX(-1);
    }else{
      enemies[i].mirrorX(1);
    }
    
    
    
    
    if(enemies[i].position.x > SCENE_W || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
    if(enemies[i].position.y > SCENE_H || enemies[i].position.y < 0){
      enemies[i].velocity.y *= -1;
  }
}    

  //test for overlap
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the hero?
  enemies.overlap(hero,heroHit);
  

  
 
randomSeed(frameCount);

  //a camera is created automatically at the beginning
  

    camera.zoom = .5;

  
  //set the camera position to the hero position
  camera.position.x = hero.position.x;
  camera.position.y = hero.position.y;
   
  image(levelOnebg,0,0);
    
  fill('white');
  textSize(100);
  //score on screen
  text(+score,115,135);
  //health on screen
  text(+heroHealth,130,55);
  
  
  //shadow using p5 drawing
  noStroke();
  fill(0,0,0,20);
  //shadow
  ellipse(hero.position.x, hero.position.y+90, 80, 30);
  //character on the top
  drawSprites();
  
  }
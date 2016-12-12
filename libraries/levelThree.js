function levelThree(){

 background(100);
  randomSeed(frameCount*1000);
  //creating an enemy every 30 frames
    if(frameCount%enemyRate1 === 0){
  //make an enemy at the top, random X position
    var xpos = random(SCENE_W);
    //print(xpos);
    var ypos = random(SCENE_H);
    //print(ypos);
    var enemy = createSprite(random(xpos),random(ypos),100,100);
      //make the enemy disapear after x amout of frames
      enemy.life = 1000;
      //enemy.debug = true;
      enemy.setCollider('rectangle',0,0,120,240);
      //health slot
      enemy.type = 0;
      enemy.addAnimation('skellyAnimation',skellyAnimation);
      //adding enemy to the group enemies
      enemiesThree.add(enemy);
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
  for(var i = 0;i < enemiesThree.length;i++){
    
     if (enemiesThree[i].velocity.x > 0){
      enemiesThree[i].mirrorX(1);
    }else{
      enemiesThree[i].mirrorX(-1);
    }
    
    if(enemiesThree[i].position.x > SCENE_W || enemiesThree[i].position.x < 0){
      enemiesThree[i].velocity.x *= -1;
    }
    if(enemiesThree[i].position.y > SCENE_H || enemiesThree[i].position.y < 0){
      enemiesThree[i].velocity.y *= -1;
  }
}    
    
  //test for overlap
  enemiesThree.overlap(bullets,enemyHitThree);
  //did the enemy hit the hero?
  enemiesThree.overlap(hero,heroHit);
  
  
 randomSeed(frameCount);


  //a camera is created automatically at the beginning
  

    camera.zoom = .5;

  
  //set the camera position to the hero position
  camera.position.x = hero.position.x;
  camera.position.y = hero.position.y;
  
 image(levelThreebg,0,0);
 
    /* fill('white');
  textSize(100);
  //score on screen
  text(+score,110,100);
  //health on screen
  text(+heroHealth,130,55);
  */
  
  //shadow using p5 drawing
  noStroke();
  fill(0,0,0,20);
  //shadow
  ellipse(hero.position.x, hero.position.y+90, 80, 30);
  //character on the top
  drawSprites();
  }
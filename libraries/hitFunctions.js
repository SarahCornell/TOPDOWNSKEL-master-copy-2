//only runs if something is hit
//if an enemy is hit it will remove the bullet and the enemy
//THIS IS WORMY
function enemyHit(enemy,bullet){
  
  if(enemy.type > 0){
    //get rid of bullet
    bullet.remove();
    //subtract health from enemy
    enemy.type--;
  }else if(enemy.type === 0){
  
   //create explosion when bullet hits enemy
    for(var i=0; i<explosionDensity; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y,2,2);
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
  }
  
  wormyHit.amp(8);
  wormyHit.play();
  enemy.remove();
  bullet.remove();
  score++;
   //test if the score is equal to the level threshold
     if(score == level1ScoreAdvance){
      gameState = 'countDown2';
      levelTwoMusic.loop();
    }
    if(score == level2ScoreAdvance){
      gameState = 'countDown3';
      levelThreeMusic.loop();
    }
     if(score == level3ScoreAdvance){
    gameState = 'win';
    winMusic.loop();
  }
}
  

}
//THIS IS BAT FRIEND
function enemyHitTwo(enemy,bullet){
  
  if(enemy.type > 0){
    //get rid of bullet
    bullet.remove();
    //subtract health from enemy
    enemy.type--;
  }else if(enemy.type === 0){
  
   //create explosion when bullet hits enemy
    for(var i=0; i<explosionDensity; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y,2,2);
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
  }
  
  batHit.amp(8);
  batHit.play();
  enemy.remove();
  bullet.remove();
  score++;
   //test if the score is equal to the level threshold
     if(score == level1ScoreAdvance){
      gameState = 'countDown2';
      levelTwoMusic.loop();
    }
    if(score == level2ScoreAdvance){
      gameState = 'countDown3';
      levelThreeMusic.loop();
    }
     if(score == level3ScoreAdvance){
    gameState = 'win';
    winMusic.loop();
  }
}
  

}
//THIS IS SKELLY
function enemyHitThree(enemy,bullet){
  
  if(enemy.type > 0){
    //get rid of bullet
    bullet.remove();
    //subtract health from enemy
    enemy.type--;
  }else if(enemy.type === 0){
  
   //create explosion when bullet hits enemy
    for(var i=0; i<explosionDensity; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y,2,2);
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
  }
  
  skellyHit.amp(8);
  skellyHit.play();
  enemy.remove();
  bullet.remove();
  score++;
   //test if the score is equal to the level threshold
     if(score == level1ScoreAdvance){
      gameState = 'countDown2';
      levelTwoMusic.loop();
    }
    if(score == level2ScoreAdvance){
      gameState = 'countDown3';
      levelThreeMusic.loop();
    }
     if(score == level3ScoreAdvance){
    gameState = 'win';
    winMusic.loop();
    }
  }
}



//if the hero is hit by enemy the hero will turn red
function heroHit(enemy,hero){
  enemy.remove();
  heroDamage.play();
  hero.shapeColor = 'red';
  
  if (heroHealth <= 1){
    //heroDeath.play();
    gameState = 'lose';
    loseMusic.loop();
  }
   heroHealth --;
  }
  
  

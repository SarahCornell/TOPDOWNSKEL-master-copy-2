//only runs if something is hit
//if an enemy is hit it will remove the bullet and the enemy
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
  
  enemy.remove();
  bullet.remove();
  score++;
   //test if the score is equal to the level threshold
     if(score == level1ScoreAdvance){
      gameState = 'countDown2';
    }
    if(score == level2ScoreAdvance){
      gameState = 'countDown3';
      
    }
     if(score == level3ScoreAdvance){
    gameState = 'win';
  }
}
  

}

//if the hero is hit by enemy the hero will turn red
function heroHit(enemy,hero){
  enemy.remove();
  hero.shapeColor = 'red';
  
  if (heroHealth <= 1){
    //heroDeath.play();
    gameState = 'lose';
  }
   heroHealth --;
  }
  
  

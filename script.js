class Player {
  constructor(health, damage, autoAttackTime) {
    this.health = health;
    this.damage = damage;
    this.autoAttackAmount = 0;
    this.autoAttackTime = 2000;
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}

class Enemy {
  constructor(health, damage, autoAttackTime) {
    this.health = health;
    this.damage = damage;
    this.autoAttackAmount = 0;
    this.autoAttackTime = 3500;
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}

let player = new Player(100, 10);
let enemy = new Enemy(50, 3);

function gameLoop() {
  if (player.autoAttackAmount >= player.autoAttackTime) {
    enemy.takeDamage(player.damage);
    console.log(`Enemy took damage! Their health: ${enemy.health}`);
    player.autoAttackAmount = 0;
  } else {
    player.autoAttackAmount += 100;
  }

  if (enemy.autoAttackAmount >= enemy.autoAttackTime) {
    player.takeDamage(enemy.damage);
    console.log(`Player took damage! Their health: ${player.health}`);
    enemy.autoAttackAmount = 0;
  } else {
    enemy.autoAttackAmount += 100;
  }

  setTimeout(gameLoop, 100);
}

gameLoop();

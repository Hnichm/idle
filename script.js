class Player {
  constructor(health, damage, autoAttackTime) {
    this.health = health;
    this.damage = damage;
    this.autoAttackAmount = 0;
    this.autoAttackTime = 2000;
    this.regenAmount = 2;
    this.regenTick = 0;
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  regen() {
    if (this.regenTick >= 10) {
      this.regenTick = 0;
      this.health += this.regenAmount;
    } else if (this.regenTick < 10) {
      setTimeout(() => {
        this.regenTick += 1;
        console.log(`Regeneration Tick: ${this.regenTick}`);
      }, 100);
    }
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

  player.regen();

  setTimeout(gameLoop, 100);
}

gameLoop();

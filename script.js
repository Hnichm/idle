class Player {
  constructor(maxHealth, health, damage, autoAttackTime) {
    this.maxHealth = maxHealth;
    this.health = health;
    this.damage = damage;
    this.autoAttackAmount = 0;
    this.autoAttackTime = 1500;
    this.regenAmount = 1;
    this.regenTick = 0;
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  healthCheck() {
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }

    if (this.health <= 0) {
      alert("Loss");
    }
  }

  regen() {
    if (this.regenTick >= 10) {
      this.regenTick = 0;
      console.log(`Regenerated ${this.regenAmount} health`);
      this.health += this.regenAmount;
    } else if (this.regenTick < 10) {
      setTimeout(() => {
        this.regenTick += 1;
      }, 100);
    }
  }
}

class Enemy {
  constructor(health, damage, autoAttackTime) {
    this.health = health;
    this.damage = damage;
    this.autoAttackAmount = 0;
    this.autoAttackTime = 1000;
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}

let player = new Player(100, 100, 10);
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
  player.healthCheck();
  player.regen();

  setTimeout(gameLoop, 100);
}

gameLoop();

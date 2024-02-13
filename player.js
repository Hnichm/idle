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

  attack(target) {
    target.takeDamage(this.damage);
    console.log(`Enemy Health ${target.health}`);
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

  // TODO update health VIA dom
  regen() {
    if (this.regenTick >= 10) {
      this.regenTick = 0;
      console.log(`Regenerated ${this.regenAmount} health`);
      this.health += this.regenAmount;
      console.log(`Post regen health: ${this.health}`);
    } else if (this.regenTick < 10) {
      setTimeout(() => {
        this.regenTick += 1;
      }, 100);
    }
  }
}

export default Player;

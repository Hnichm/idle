class Enemy {
  constructor(health, damage, autoAttackTime) {
    this.health = health;
    this.damage = damage;
    this.autoAttackAmount = 0;
    this.autoAttackTime = 1000;
  }

  attack(target) {
    target.takeDamage(this.damage);
    console.log(`Player health: ${target.health}`);
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}

export default Enemy;

class Player {
  constructor(health, damage) {
    this.health = health;
    this.damage = damage;
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}

export default class Character {
  constructor(health, maxHealth, attackPower, attackSpeed, image) {
    this.health = health;
    this.maxHealth = maxHealth;
    this.attackPower = attackPower;
    this.attackSpeed = attackSpeed;
    this.image = image;
  }

  attack(target) {
    target.health -= this.attackPower;
  }
}

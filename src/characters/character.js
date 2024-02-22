export default class Character {
  constructor(
    name,
    health,
    maxHealth,
    alive,
    attackPower,
    attackSpeed,
    floor,
    image
  ) {
    this.health = health;
    this.maxHealth = maxHealth;
    this.alive = alive;
    this.attackPower = attackPower;
    this.attackSpeed = attackSpeed;
    this.floor = floor;
    this.image = image;
  }

  attack(target) {
    target.health -= this.attackPower;
  }
}

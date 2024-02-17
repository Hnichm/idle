import Character from "./character.js";

class Enemy extends Character {
  constructor(health, maxHealth, attackPower, attackSpeed, image) {
    super(health, maxHealth, attackPower, attackSpeed, image);
  }

  attack(target) {
    target.health -= this.attackPower;
  }
}

export default Enemy;

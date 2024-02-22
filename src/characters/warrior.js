import Character from "./character.js";

export default class Warrior extends Character {
  constructor(...args) {
    super(...args);
    this.attackPower = 20;
    console.log("Warrior has been created");
  }

  attack(target) {
    target.health -= this.attackPower;
    console.log(`Warrior deals ${this.attackPower} damage to the enemy!`);
  }
}

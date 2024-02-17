import Character from "./character.js";
import randomNumberGenerator from "../utils/randomNumberGenerator.js";

class Warrior extends Character {
  constructor(health, maxHealth, attackPower, attackSpeed, image) {
    super(health, maxHealth, attackPower, attackSpeed, image);

    // Warrior-specific
    this.lifestealPercentage = 0.1; // Heals for 10% of damage dealt
  }

  attack(target) {
    target.health -= this.attackPower;
    let randomNumber = randomNumberGenerator();
    // Lifesteal Effect
    console.log(`${randomNumber}`);
    if (randomNumber > 50) {
      console.log(`greater than 50`);
    }
  }
}

export default Warrior;

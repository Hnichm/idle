// Import the Character class
import Character from "./character.js";
import { enemyTypes } from "./enemy-templates.js";
import { randomEnemyGenerator } from "../utils/rng.js";

// Create the Enemy class extending Character
export default class Enemy extends Character {
  constructor(...args) {
    // Call the super constructor to inherit the stats from Character
    super(...args);
  }

  spawnEnemy(floor) {
    let enemyTemplate = enemyTypes[floor][randomEnemyGenerator(floor)];
    const enemy = new Enemy(
      enemyTemplate.health,
      enemyTemplate.maxHealth,
      enemyTemplate.alive,
      enemyTemplate.attackPower,
      enemyTemplate.attackSpeed,
      enemyTemplate.floor,
      enemyTemplate.image
    );
    return enemy;
  }

  // Custom die method
  die(floor) {
    if (this.health <= 0) {
      this.alive = false; // Mark as not alive
      console.log("Enemy has died");
      console.log("Spawning new enemy");
      this.spawnEnemy(floor);
    }
  }
}

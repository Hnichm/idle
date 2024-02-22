import Character from "./src/characters/character.js";
import Warrior from "./src/characters/warrior.js";
import Enemy from "./src/characters/enemy.js";
import { enemyTypes } from "./src/characters/enemy-templates.js";
import {
  randomNumberGenerator,
  randomEnemyGenerator,
} from "./src/utils/rng.js";

let attackButton = document.querySelector(".ascend-button");

let player = new Warrior(
  "player",
  100,
  100,
  true,
  10,
  1,
  0,
  "./images/player/main-character-dragoon.png"
);

let enemy = new Enemy(
  enemyTypes[0][0].health,
  enemyTypes[0][0].maxHealth,
  enemyTypes[0][0].alive,
  enemyTypes[0][0].attackPower,
  enemyTypes[0][0].attackSpeed,
  enemyTypes[0][0],
  enemyTypes[0][0].image
);

function gameLoop() {
  setInterval(() => {
    enemy.die(player.floor);
    if (enemy.alive === false) {
      enemy = enemy.spawnEnemy(player.floor);
    }
    console.log(`Enemy Health is: ${enemy.health}`);
  }, 100);
}

attackButton.addEventListener("click", () => {
  player.attack(enemy);
});

gameLoop();

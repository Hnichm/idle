import Warrior from "./src/characters/warrior.js";
import Enemy from "./src/characters/enemy.js";

const player = new Warrior(100, 100, 5, 1.5, "warriorImage");
const enemy = new Enemy(80, 80, 3, 10, 2, "enemyImage");

setInterval(function () {
  player.attack(enemy);
}, 1500);

setInterval(function () {
  enemy.attack(player);
}, 3000);

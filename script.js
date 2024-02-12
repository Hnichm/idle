import Player from "./player.js";
import Enemy from "./enemy.js";

let player = new Player(100, 100, 10, 1500);
let enemy = new Enemy(50, 3, 2000);

setInterval(() => player.attack(enemy), player.autoAttackTime);
setInterval(() => enemy.attack(player), enemy.autoAttackTime);

function gameLoop() {
  // // ! Player auto attacking
  // if (player.autoAttackAmount >= player.autoAttackTime) {
  //   enemy.takeDamage(player.damage);
  //   console.log(`Enemy took damage! Their health: ${enemy.health}`);
  //   player.autoAttackAmount = 0;
  // } else {
  //   player.autoAttackAmount += 100;
  // }

  // // ! Enemy auto attacking
  // if (enemy.autoAttackAmount >= enemy.autoAttackTime) {
  //   player.takeDamage(enemy.damage);
  //   console.log(`Player took damage! Their health: ${player.health}`);
  //   enemy.autoAttackAmount = 0;
  // } else {
  //   enemy.autoAttackAmount += 100;
  // }

  // ? Player health check
  player.healthCheck();
  // ? Player regen
  player.regen();

  setTimeout(gameLoop, 100);
}

gameLoop();

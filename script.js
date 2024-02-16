import Player from "./player.js";
import Enemy from "./enemy.js";

let player = new Player(100, 100, 10, 1500);
let enemy = new Enemy(50, 3, 2000);

setInterval(() => player.attack(enemy), player.autoAttackTime);
setInterval(() => enemy.attack(player), enemy.autoAttackTime);

// function gameLoop() {
//   // ? Player health check
//   player.healthCheck();
//   // ? Player regen
//   player.regen();

//   setTimeout(gameLoop, 100);
// }

// gameLoop();

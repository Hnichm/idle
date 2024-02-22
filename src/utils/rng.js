import { enemyTypes } from "../characters/enemy-templates.js";

export function randomNumberGenerator() {
  let number = Math.floor(Math.random() * 101);
  return number;
}

export function randomEnemyGenerator(floor) {
  let number = Math.floor(Math.random() * enemyTypes[floor].length);
  console.log(number);
  return number;
}

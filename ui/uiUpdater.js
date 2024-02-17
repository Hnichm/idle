export function updatePlayerHealthUI(playerHealth, playerMaxHealth) {
  const playerHealthBar = document.querySelector(".player-health-bar");
  const playerHealthPercentage = (playerHealth / playerMaxHealth) * 100;

  playerHealthBar.style.width = playerHealthPercentage + "%";
}

export default function updateEnemyHealthUI(enemyHealth, enemyMaxHealth) {
  const enemyHealthBar = document.querySelector(".enemy-health-bar");
  const enemyHealthPercentage = (enemyHealth / enemyMaxHealth) * 100;
  enemyHealthBar.style.width = enemyHealthPercentage + "%";
}

import {AttackTemplate} from "./AttackTemplate.js";

// BASIC ATTACK
var basicAttack = new AttackTemplate;
basicAttack.attackName = "Basic Attack";
basicAttack.description = "Will perform a basic attack.";
basicAttack.power = 30;
basicAttack.accuracy = 1;
basicAttack.stamina = 20;
basicAttack.currentStamina = 20;
basicAttack.effect = "none";
basicAttack.effectValue = 0;

// THROW DUST ATTACK
var throwDust = new AttackTemplate;
throwDust.attackName = "Throw Dust";
throwDust.description = "Throw dust into enemy's eyes. Lowers their accuracy by 25%!";
throwDust.power = 0;
throwDust.accuracy = 1;
throwDust.stamina = 15;
throwDust.currentStamina = 15;
throwDust.effect = "accuracy";
throwDust.effectValue = .75;

export {basicAttack, throwDust};
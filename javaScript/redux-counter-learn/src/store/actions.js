export const SET_ATTACK = "SET_ATTACK";
export const SET_ATTACK_ROLL = "SET_ATTACK_ROLL";
export const SET_DEFENSE = "SET_DEFENSE";
export const SET_DEFENSE_ROLL = "SET_DEFENSE_ROLL";

export const SET_ROUND_WINNER = "SET_ROUND_WINNER";

export const UPDATE_CAN_CAHNGE = "SET_CAN_CAHNGE";

export const UPDATE_WIN = "SET_WIN";

export const UPDATE_HISTORY = "UPDATE_HISTORY";

/*
 * action creators
 */

export function setAttack(armies) {
  return { type: SET_ATTACK, armies };
}

export function setDefense(armies) {
  return { type: SET_DEFENSE, armies };
}

export function setAttackRoll(roll) {
  return { type: SET_ATTACK_ROLL, roll };
}

export function setDefenseRoll(roll) {
  return { type: SET_DEFENSE_ROLL, roll };
}

export function setRoundWinner(winner) {
  return { type: SET_ROUND_WINNER, winner };
}

export function updatCanChange() {
  return { type: UPDATE_CAN_CAHNGE };
}

export function updateWin() {
  return { type: UPDATE_WIN };
}

export function updateHistory(turn) {
  return { type: UPDATE_HISTORY, turn };
}

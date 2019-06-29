import { combineReducers } from "redux";
import * as Actions from "./actions.js";

const defaultState = {
  Attack: 0,
  AttackRoll: 0,
  Defense: 0,
  DefenseRoll: 0
};

function gameplay(state = defaultState, action) {
  switch (action.type) {
    case Actions.SET_ATTACK:
      return { ...state, AttackRoll: action.armies };
    case Actions.SET_DEFENSE:
      return { ...state, DefenseRoll: action.armies };
    case Actions.SET_ATTACK_ROLL:
      return { ...state, AttackRoll: action.roll };
    case Actions.SET_DEFENSE_ROLL:
      return { ...state, DefenseRoll: action.roll };
    default:
      return state;
  }
}

function ui(state = true, action) {
  switch (action.type) {
    case Actions.UPDATE_CAN_CAHNGE:
      return !state;
    default:
      return state;
  }
}

function win(state = false, action) {
  switch (action.type) {
    case Actions.UPDATE_WIN:
      return !state;
    default:
      return state;
  }
}

function roundWinner(state = "", action) {
  switch (action.type) {
    case Actions.SET_ROUND_WINNER:
      return action.winner;
    default:
      return state;
  }
}

function history(state = [], action) {
  switch (action.type) {
    case Actions.UPDATE_HISTORY:
      return [...state, action.turn];
    default:
      return state;
  }
}

const risk = combineReducers({
  gameplay,
  ui,
  win,
  roundWinner,
  history
});

export default risk;

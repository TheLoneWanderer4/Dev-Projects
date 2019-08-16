import * as Actions from "../actions";

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

export default gameplay;

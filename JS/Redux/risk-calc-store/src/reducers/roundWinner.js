import * as Actions from "../actions";

function roundWinner(state = "", action) {
  switch (action.type) {
    case Actions.SET_ROUND_WINNER:
      return action.winner;
    default:
      return state;
  }
}

export default roundWinner;

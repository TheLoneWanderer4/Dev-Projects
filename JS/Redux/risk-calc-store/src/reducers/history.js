import * as Actions from "../actions";

function history(state = [], action) {
  switch (action.type) {
    case Actions.UPDATE_HISTORY:
      return [...state, action.turn];
    default:
      return state;
  }
}

export default history;

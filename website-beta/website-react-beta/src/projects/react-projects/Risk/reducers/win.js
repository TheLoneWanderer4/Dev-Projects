import * as Actions from "../actions";

function win(state = false, action) {
  switch (action.type) {
    case Actions.UPDATE_WIN:
      return !state;
    default:
      return state;
  }
}

export default win;

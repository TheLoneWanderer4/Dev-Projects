import * as Actions from "../actions";

function ui(state = true, action) {
  switch (action.type) {
    case Actions.UPDATE_CAN_CAHNGE:
      return !state;
    default:
      return state;
  }
}

export default ui;

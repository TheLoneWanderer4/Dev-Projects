import * as Actions from "../actions";

const counter = (state = 0, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return state + 1;
    case Actions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;

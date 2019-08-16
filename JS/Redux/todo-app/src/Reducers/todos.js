import * as Actions from "../Actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD:
      return [...state, { index: state.length, value: action.todo }];
    case Actions.REMOVE:
      return state.filter(item => item.index != action.index);
  }
};

export default todos;

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const SET_VISABILITY_FILTER = "SET_VISABILITY_FILTER";

export const add = todo => {
  return { type: ADD, todo };
};

export const remove = index => {
  return { type: REMOVE, index };
};

export const set_visability_filter = filter => {
  return { type: SET_VISABILITY_FILTER, filter };
};

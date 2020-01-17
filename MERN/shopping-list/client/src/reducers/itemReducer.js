import uuid from "uuid";

import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types.js";

const initialState = {
  items: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload, loading: false };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._fid !== action.payload.id)
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [{ id: uuid(), name: action.payload.name }, ...state.items]
      };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

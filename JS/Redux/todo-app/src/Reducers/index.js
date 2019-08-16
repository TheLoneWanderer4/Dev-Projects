import todos from "./todos";
import filter from "./visabilityFilters";
import { combineReducers } from "redux";

export default combineReducers({ todos, filter });

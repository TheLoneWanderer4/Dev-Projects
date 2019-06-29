import { createStore } from "redux";
import risk from "./reducers";
import * as Actions from "./actions.js";

const store = createStore(risk);

export default store;

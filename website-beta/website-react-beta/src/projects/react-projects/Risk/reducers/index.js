import { combineReducers } from "redux";
import win from "./win";
import ui from "./ui";
import roundWinner from "./roundWinner";
import history from "./history.js";
import gameplay from "./gameplay.js";

const risk = combineReducers({
  gameplay,
  ui,
  win,
  roundWinner,
  history
});

export default risk;

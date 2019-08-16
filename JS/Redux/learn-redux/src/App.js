import React from "react";
import * as Actions from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(Actions.increment())}>+</button>
      <button onClick={() => dispatch(Actions.decrement())}>-</button>
    </div>
  );
}

export default App;

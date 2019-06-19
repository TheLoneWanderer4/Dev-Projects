import Counter from "./counter";
import React, { Component } from "react";

const Counters = ({
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
  counters
}) => {
  return (
    <div className="">
      <button onClick={onReset} className="btn btn-primary btn-small m-2">
        {" "}
        Reset{" "}
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        >
          <h4>Counter #{counter.id}</h4>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;

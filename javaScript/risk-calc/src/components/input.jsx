import React from "react";

function Input(props) {
  return (
    <label className={props.className}>
      {props.label}
      <input
        className="form-control"
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}

export default Input;

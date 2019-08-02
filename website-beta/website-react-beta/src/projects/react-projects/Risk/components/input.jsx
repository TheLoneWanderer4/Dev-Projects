import React from "react";

function Input(props) {
  return (
    <div className="form-group row text-left m-2">
      <label className="col-sm-2 col-form-label">{props.label}</label>
      <div className="col-sm-10">
        <input
          className="form-control"
          type="number"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default Input;

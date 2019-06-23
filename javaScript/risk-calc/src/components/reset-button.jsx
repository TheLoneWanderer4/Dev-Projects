import React from "react";

function Reset(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {" "}
      Reset{" "}
    </button>
  );
}

export default Reset;

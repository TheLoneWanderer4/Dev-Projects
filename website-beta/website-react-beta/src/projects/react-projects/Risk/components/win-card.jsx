import React from "react";

function Win(props) {
  return (
    <div className={props.className}>
      <h4>{props.winner}</h4> won with {props.remaining} armies left.
    </div>
  );
}

export default Win;

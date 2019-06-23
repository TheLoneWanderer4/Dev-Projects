import React from "react";

function Win(props) {
  return (
    <div className={props.className}>
      {props.winner} won with {props.remaining} armies left.
    </div>
  );
}

export default Win;

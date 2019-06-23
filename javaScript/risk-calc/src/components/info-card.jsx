import React from "react";

function Info(props) {
  return (
    <div className={props.className}>
      Attack rolled : {props.attack}
      {" | "}
      Defense rolled : {props.defense}
      {"\n"}
      {props.winner} won this round.
    </div>
  );
}

export default Info;

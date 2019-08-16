import React from "react";

function Info(props) {
  return (
    <div className={props.className}>
      <div>
        {" "}
        Attack rolled : {props.attack}
        {" | "}
        Defense rolled : {props.defense}
        {"\n"}
      </div>
      <div> {props.winner} won this round.</div>
    </div>
  );
}

export default Info;

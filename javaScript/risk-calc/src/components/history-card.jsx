import React from "react";

function HistoryCard(props) {
  return (
    <li className={"list-group-item " + props.className}>
      <div>
        Attack: {props.data.Attack} | AttackRoll : {props.data.AttackRoll}
      </div>
      <div>
        Defense: {props.data.Defense} | DefenseRoll: {props.data.DefenseRoll}
      </div>
    </li>
  );
}

export default HistoryCard;

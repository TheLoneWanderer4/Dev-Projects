import React from "react";

function HistoryCard(props) {
  return (
    <li className={"list-group-item " + props.className}>
      <div className="row">
        <div className="col-10">
          <div>
            Attack: {props.data.Attack} | AttackRoll : {props.data.AttackRoll}
          </div>
          <div>
            Defense: {props.data.Defense} | DefenseRoll:{" "}
            {props.data.DefenseRoll}
          </div>
        </div>
        <div className="col-auto">
          <span className="badge badge-warning badge-pill">{props.index}</span>
        </div>
      </div>
    </li>
  );
}

export default HistoryCard;

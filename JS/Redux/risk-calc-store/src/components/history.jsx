import React, { Component } from "react";
import HistoryCard from "./history-card";

function History(props) {
  return (
    <ul className="list-group">
      <h3> History </h3>
      {props.history.map((event, index) => {
        let classes = "";
        if (index === props.history.length - 1) {
          classes = "active";
        }
        return (
          <HistoryCard
            id={index}
            className={classes}
            data={event}
            index={index}
          />
        );
      })}
    </ul>
  );
}

export default History;

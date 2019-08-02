import React from "react";

const Home = props => (
  <div>
    <div className="card ">
      <ul className="list-group list-group-flush">
        {props.projectsList.map(item => (
          <li key={item.label}>
            <a className="list-group-item" href={"/" + item.label}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Home;

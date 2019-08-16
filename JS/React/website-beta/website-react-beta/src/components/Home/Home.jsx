import React from "react";
import "./Home.css";

const Home = props => (
  <div>
    <div className="welcome-section">
      <section className="intro-section card shadow-sm content">
        <h1>Hi, I'm Amin Sennour.</h1>
        <p>{"{developer}"}</p>
        <p>{"{CS major at the UofA}"}</p>
      </section>

      <div className="content card shadow education-content">
        <h1>Education</h1>
        <h4>University of Arizona</h4>
        <p>
          <b>Projected Graduation: </b> 2022
        </p>
        <p>
          <b> College of Science </b>
        </p>
        <li>Major: Computer Science</li>
        <p>
          <b>College of Science</b>
        </p>
        <li>Major: Mathematics</li>
        <p></p>
        <p>
          <b>GPA: </b> 3.71
        </p>
      </div>
    </div>
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

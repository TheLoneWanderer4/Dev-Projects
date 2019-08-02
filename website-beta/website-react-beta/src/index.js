import React from "react";
import ReactDOM from "react-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import d3projects from "./d3-projects.json";
import reactProject from "./react-projects.json";

import Markdown from "./react-projects/Markdown/Markdown.js";
import JSCalc from "./react-projects/JSCalc/JSCalc.js";

const projectsList = [d3projects, reactProject];

const Home = () => (
  <div className="card ">
    <ul className="list-group list-group-flush">
      {projectsList.map(item => (
        <li>
          <a className="list-group-item" href={"/" + item.label}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

ReactDOM.render(
  <Router className="flex justify-content-center align-items-center">
    <Switch>
      <Route path="/markdown" exact component={Markdown} />
      <Route path="/JSCalc" exact component={JSCalc} />
      {projectsList.map(item => (
        <Route
          path={"/" + item.label}
          exact
          component={() => <ProjectPage projectsJSON={item} />}
        />
      ))}
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

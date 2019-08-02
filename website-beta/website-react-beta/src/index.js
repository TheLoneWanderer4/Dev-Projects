import React from "react";
import ReactDOM from "react-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import d3projects from "./d3-projects.json";

import MarkdownProject from "./components/MarkdownProject/Markdown.js";

const projectsList = [d3projects];

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/markdown" exact component={MarkdownProject} />
      {projectsList.map(item => (
        <Route
          path={"/" + item.label}
          exact
          component={() => <ProjectPage projectsJSON={item} />}
        />
      ))}
    </Switch>
    {projectsList.map(item => (
      <a href={"/" + item.label}>{item.label}</a>
    ))}
  </Router>,
  document.getElementById("root")
);

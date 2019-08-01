import React from "react";
import ReactDOM from "react-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import d3projects from "./d3-projects.json";

ReactDOM.render(
  <Router>
    <ProjectPage projectsJSON={d3projects} />
  </Router>,
  document.getElementById("root")
);

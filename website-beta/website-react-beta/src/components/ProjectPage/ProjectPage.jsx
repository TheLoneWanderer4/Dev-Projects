import React from "react";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./ProjectPage.css";

const ProjectPage = props => (
  <div className="">
    <nav className="navbar sticky-top navbar-dark bg-dark shadow">
      <div className="navbar-brand">{props.projectsJSON.label}</div>
    </nav>
    <div className="mt-2 mb-4">
      <div>
        <ProjectList projects={props.projectsJSON.projects} />
      </div>
    </div>
  </div>
);

export default ProjectPage;

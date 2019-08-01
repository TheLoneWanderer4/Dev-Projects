import React from "react";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./ProjectPage.css";

const ProjectPage = props => (
  <div className="">
    <nav className="navbar sticky-top navbar-dark bg-dark shadow">
      <a className="navbar-brand" href="#">
        {props.projectsJSON.label}
      </a>
    </nav>
    <div className="mt-2 mb-4">
      <div>
        <ProjectList projects={props.projectsJSON.projects} />
      </div>
    </div>
  </div>
);

export default ProjectPage;

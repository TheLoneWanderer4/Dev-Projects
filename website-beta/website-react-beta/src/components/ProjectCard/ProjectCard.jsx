import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="card mt-4 project-card shadow-sm">
      <div className="card-body text-dark bg-light border-bottom">
        <h3 className="card-title">{props.project.title}</h3>
      </div>
      <div className="row no-gutters">
        <div className="col-md-4 m-auto">
          <div className="project-img-wrapper">
            <img
              className="card-img-top"
              src={props.project.imageURL}
              alt={props.project.imageURL}
            />
          </div>
        </div>
        <div className="col-md-8 border-left">
          <ul className="list-group list-group-flush">
            {props.project.listItems.map(item => (
              <li key={item} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
          <div className="card-body">
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href={
                props.project.projectURL
                  ? props.project.projectURL
                  : "react-" + props.project.title
              }
            >
              Found here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

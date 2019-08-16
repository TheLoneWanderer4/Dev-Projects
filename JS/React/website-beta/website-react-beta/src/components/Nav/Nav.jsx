import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Nav = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">
        Amin Sennour
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {props.projects.map(item => (
            <div key={item.label}>
              <Dropdown className="mr-2">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {item.label}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {item.projects.map(project => (
                    <Dropdown.Item
                      key={project.title}
                      className="dropdown-item"
                      href={
                        project.projectURL
                          ? project.projectURL
                          : "react-" + project.title
                      }
                    >
                      {project.title}
                    </Dropdown.Item>
                  ))}
                  <Dropdown.Divider />
                  <Dropdown.Item
                    className="dropdown-item"
                    href={"/" + item.label}
                  >
                    {item.label}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;

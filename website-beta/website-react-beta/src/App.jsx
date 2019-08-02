import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import Home from "./components/Home/Home.jsx";

import Nav from "./components/Nav/Nav.jsx";

import projectsList from "./projects/index.js";

class App extends Component {
  RenderNav = withRouter(props => {
    if (props.location.pathname.match(/react-/)) {
      return <div />;
    } else {
      return <Nav />;
    }
  });

  ReactRoutes(projectsList) {
    // This meta function generates the routes used by the project pages for any react projct
    return (
      <div>
        {projectsList
          .filter(item => item.isReact)[0]
          .projects.map(item => (
            <Route
              key={item.title}
              // the react- is there so the page can exclude the normal page rendering, like the nav bar,
              // for the react projects
              path={"/react-" + item.title}
              exact
              component={item.component}
            />
          ))}
      </div>
    );
  }

  ProjectRoutes(projectsList) {
    // This generates the routes for all the project pages, based off the imported JSON objects
    return (
      <div>
        {projectsList.map(item => (
          <Route
            key={item.label}
            path={"/" + item.label}
            exact
            component={() => <ProjectPage projectsJSON={item} />}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.RenderNav />
        {this.ReactRoutes(projectsList)}
        {this.ProjectRoutes(projectsList)}
        <Route
          path="/"
          exact
          component={() => <Home projectsList={projectsList} />}
        />
      </div>
    );
  }
}

export default App;

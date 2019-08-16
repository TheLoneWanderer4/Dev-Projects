import React from "react";
import "./App.css";

import Nav from "./pages/Nav/Nav.jsx";
import About from "./pages/About/About.jsx";
import Shop from "./pages/Shop/Shop.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />

          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

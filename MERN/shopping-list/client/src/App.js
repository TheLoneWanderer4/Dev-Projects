import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import AppControls from "./components/Controls.js";
import ShoppingList from "./components/ShoppingList.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App h-100">
        <AppControls />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;

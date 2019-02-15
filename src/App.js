import React, { Component } from "react";
import M from "materialize-css";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/layout/Landing";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={"/"} component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

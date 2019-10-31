import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

// Components
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

import NoMatch_404 from "./Components/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NoMatch_404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";

// components
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

import NoMatch_404 from "./Components/404";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={NavBar} />
        <Switch>
          <Route exact path='/' component={Hero} />
          <Route component={NoMatch_404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

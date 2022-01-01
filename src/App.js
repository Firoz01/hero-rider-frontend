import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// react-boostrap-import
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import RegisterRider from "./Pages/Register/RegisterRider/RegisterRider";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <RegisterRider></RegisterRider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

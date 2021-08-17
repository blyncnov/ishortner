import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./global.css";
import App from "./App";
import Golink from "./Golink";

const Index = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/:code" component={Golink} />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

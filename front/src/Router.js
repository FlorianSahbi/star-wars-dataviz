import React from 'react';
import Graph from './Graph';
import Title from './Title';
import { BrowserRouter as Router, Route } from "react-router-dom";

function ReactRouter() {
    return (
      <Router>
          <Route exact path="/" component={Graph} />
          <Route exact path="/intro" component={Title} />
      </Router>
    );
  }

export default ReactRouter;

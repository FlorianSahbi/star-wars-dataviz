import React from 'react';
import Graph from './Graph';
import Intro from './Intro';

import { BrowserRouter as Router, Route } from "react-router-dom";

function ReactRouter() {
    return (
      <Router>
          <Route exact path="/" component={Graph} />
          <Route exact path="/intro" component={Intro} />
      </Router>
    );
  }

export default ReactRouter;

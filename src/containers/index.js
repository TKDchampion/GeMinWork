import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'ress/dist/ress.min.css';

// import relative path
import Home from './Home';
import GeMin from './GeMin/GeMin';
import Todolist from './Todolist/Todolist';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gemin" component={GeMin} />
      <Route exact path="/todolist" component={Todolist} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;

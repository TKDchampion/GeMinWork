import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import 'ress/dist/ress.min.css';

// import relative path
import Home from './Home';
import Todolist from './Todolist/Todolist';
import GeMin from './GeMin/GeMin';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todolist" component={Todolist} />
      <Route exact path="/gemin" component={GeMin}/>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;

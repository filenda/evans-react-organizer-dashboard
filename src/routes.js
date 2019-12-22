import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Orders from './pages/Orders';
import Menu from './pages/Menu';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Orders" exact component={Orders} />
      <Route path="/Menu" exact component={Menu} />
    </Switch>
  );
}

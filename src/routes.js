import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Orders from './pages/Orders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Orders" exact component={Orders} />
    </Switch>
  );
}

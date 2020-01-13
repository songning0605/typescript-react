import React from "react";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import menuData from "../../../config/menu";
import { baseRouteRender } from './routeRender';

const App: React.FunctionComponent = props => {
  return (
    <Router>
      <Switch>
        {baseRouteRender(menuData)}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

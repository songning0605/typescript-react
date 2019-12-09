import React, { FunctionComponent } from "react";
import menuData from "@/layouts/menu";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import AsyncComponent from "@shared/App/AsyncComponent";

const history = createBrowserHistory();

const App: FunctionComponent = props => {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Switch>
          {menuData.map((item, key) => {
            return (
              <Route exact path={item.path} component={() => <AsyncComponent component={item.component} {...props}/>} key={key} />
            );
          })}
        </Switch>
      </BrowserRouter>
    </Router>
  );
};

export default App;

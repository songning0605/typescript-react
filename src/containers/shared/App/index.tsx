import React, { FunctionComponent } from "react";
import Loadable from "react-loadable";
import menuData from "@/layouts/menu";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function Loading() {
  return <div>Loading……</div>;
}

// const Home = Loadable({
//     loader: () => import(/* webpackChunkName: "home" */ '@views/Home'),
//     loading: Loading
// })

// const About = Loadable({
//     loader: () => import(/* webpackChunkName: "about" */ '@views/About'),
//     loading: Loading
// })

const importComponent = (component: any) => {
  return Loadable({
    loader: component,
    loading: Loading
  });
};

const App: FunctionComponent = props => {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Switch>
          {menuData.map((item, key) => {
            return (
              <Route
                exact
                path={item.path}
                component={importComponent(item.component)}
                key={key}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </Router>
  );
};

export default App;

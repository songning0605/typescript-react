import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AsyncComponent from "@shared/App/AsyncComponent";
import menuData from "@/layouts/menu";

// 递归处理嵌套路由
const routesRender = (list:Array<any>, childRoutes:any) =>list.map((item, key) => {
  if (item.routes) {
    return <Switch key={key}>{routesRender(item.routes, item.routes)}</Switch>
  }

  return (
    <Route key={key} exact={item.exact} path={item.path} component={() => <AsyncComponent routes={childRoutes} component={item.component}/>} />
  );
})

const App:React.FunctionComponent = props => {
  return (
    <Router>
      <Switch>
        {routesRender(menuData)}
      </Switch>
    </Router>
  );
};

export default App;

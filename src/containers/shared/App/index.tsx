import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AsyncComponent from "@components/AsyncComponent";
import menuData from "../../../config/menu";

// 生成嵌套路由(子路由)
export const nestedRouteRender = (list:Array<any>) => (
  <Switch>
    {baseRouteRender(list)}
  </Switch>
);

// 递归处理嵌套路由，这里只渲染一级页面，因为可以按需加载，性能也还可以，类似于实现了多页面应用
export const baseRouteRender = (list:Array<any>) =>list.map((item, key) => {
  if (item.routes) {
    return (
      <Route key={key} exact={item.exact} path={item.path} render={() => <AsyncComponent routes={item.routes} component={item.component}/>} />
    );
  }

  return (
    <Route key={key} exact={item.exact} path={item.path} render={() => <AsyncComponent component={item.component}/>} />
  );
});

const App:React.FunctionComponent = props => {
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

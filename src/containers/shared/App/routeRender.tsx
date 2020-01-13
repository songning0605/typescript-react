import React from "react";
import { Switch, Route } from "react-router-dom";
import AsyncComponent from "@components/AsyncComponent";

// 
// 递归处理嵌套路由，这里只渲染一级页面，因为可以按需加载，不会有性能问题，类似于实现了多页面应用，可以多级嵌套
export const baseRouteRender = (list: Array<any>) => list.map((item, key) => {
  if (item.routes) {
    return (
      <Route
        key={key}
        exact={item.exact}
        path={item.path}
        render={() => <AsyncComponent routes={item.routes} component={item.component} />}
      />
    );
  }

  return (
    <Route
      key={key}
      exact={item.exact}
      path={item.path}
      render={() => <AsyncComponent component={item.component} />}
    />
  );
});

// 生成嵌套路由(子路由)
export const nestedRouteRender = (list: Array<any>) => (
  <Switch>
    {baseRouteRender(list)}
  </Switch>
);
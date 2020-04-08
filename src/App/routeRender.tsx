import React from "react";
import { Switch, Route } from "react-router-dom";
import AsyncComponent from "@components/AsyncComponent";

/**
 * 只渲染当前路由，如果有子路由，不做渲染，由当前路由内部处理
 * @param list
 */
export const baseRouteRender = (list: Array<any>) =>
  list.map((item, key) => {
    return (
      <Route
        key={key}
        exact={item.exact}
        path={item.path}
        render={() => (
          <AsyncComponent routes={item.routes} component={item.component} />
        )}
      />
    );
  });

/**
 * 渲染子路由
 * @param list 子路由配置
 */
export const nestedRouteRender = (list: Array<any>) => (
  <Switch>{baseRouteRender(list)}</Switch>
);

import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import menuData from "@/config/menu";
import { baseRouteRender } from '@/App/routeRender';

const App: React.FunctionComponent = props => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          {baseRouteRender(menuData)}
          <Redirect to="/" />
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;

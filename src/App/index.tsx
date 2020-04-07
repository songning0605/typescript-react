import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { StoreProvider } from 'easy-peasy';
import menuData from "@/config/menu";
import { baseRouteRender } from '@/App/routeRender';
import { store } from '@/models';

const App: React.FunctionComponent = props => {
  return (
    <ConfigProvider locale={zhCN}>
      <StoreProvider store={store}>
        <Router>
          <Switch>
            {baseRouteRender(menuData)}
            <Redirect to="/" />
          </Switch>
        </Router>
      </StoreProvider>
    </ConfigProvider>
  );
};

export default App;

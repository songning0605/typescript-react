import React from 'react';
import { Switch, NavLink, Link } from 'react-router-dom';
import { nestedRouteRender } from '@/containers/shared/App/routeRender';
import styles from '@/layouts/styles/basicLayout.scss';

interface IProps {
  routes: Array<any>
}

const BasicLayout: React.FunctionComponent<IProps> = (props:IProps) =>{
  const { routes } = props;
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      <Link to="/other">跳转其他窗口</Link>
      <Link to="/index/home">跳转home</Link>
      <div>
        {routes.map((item, key) => <NavLink key={key} to={item.path}>{item.name}</NavLink>)}
      </div>
      <Switch>
        {nestedRouteRender(routes)}
      </Switch>
    </div>
  </div>;
};

export default BasicLayout;
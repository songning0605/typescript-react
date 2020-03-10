import React from 'react';
import { NavLink } from 'react-router-dom';
import { nestedRouteRender } from '@/containers/shared/App/routeRender';
import styles from '@/layouts/styles/basicLayout.scss';

interface IProps {
  routes: Array<any>
}

const BasicLayout: React.FunctionComponent<IProps> = (props: IProps) => {
  const { routes } = props;

  // 渲染当前窗口（应用）路由
  const routeRender = () => nestedRouteRender(routes);

  // 渲染当前窗口（应用）菜单
  const menuRender = () => <div>
    {routes.map(
      (item, key) => <NavLink key={key} to={item.path}>
        {item.name}
      </NavLink>
    )}
  </div>

  return <div className={styles.layoutWrapper}>
    <div className={styles.content}>
      {menuRender()}
      {routeRender()}
    </div>
  </div>;
};

export default BasicLayout;
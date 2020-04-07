import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { nestedRouteRender } from '@/App/routeRender';
import SiderMenu from '@components/SiderMenu';
import styles from '@/layouts/styles/basicLayout.scss';

const { Header, Content } = Layout;

interface IProps {
  routes: Array<any>
}

const BasicLayout: React.FunctionComponent<IProps> = (props: IProps) => {
  const [selectedKeys, setKeys] = useState([]);
  console.log('---render---', selectedKeys);
  const { routes } = props;

  // 渲染当前窗口（应用）路由
  const routeRender = () => nestedRouteRender(routes);

  const menuClick = ({ item, key, keyPath, domEvent }) => {
    console.log(key);
    
    setKeys([key]);
  }

  // 渲染当前窗口（应用）菜单
  const menuRender = () => <Menu onClick={menuClick} selectedKeys={selectedKeys} theme="dark" mode="inline">
    {routes.map(
      (item, key) =>
        <Menu.Item key={item.key}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
    )}
  </Menu>

  return <Layout>
    <SiderMenu menuRender={menuRender} />
    <Layout>
      <Header>Header</Header>
      <Content>{routeRender()}</Content>
    </Layout>
  </Layout>
};

export default BasicLayout;

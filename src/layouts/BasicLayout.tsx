import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { nestedRouteRender } from "@/App/routeRender";
import SiderMenu from "@components/SiderMenu";
import styles from "@/layouts/styles/basicLayout.scss";

const { Header, Content } = Layout;

interface IProps {
  routes: Array<any>;
}

const BasicLayout: React.FunctionComponent<IProps> = (props: IProps) => {
  const [members, setMembers] = useState<[string]>([""]);
  const [count, setCount] = React.useState(0);
  console.log("---render---", members);
  const { routes } = props;

  // 渲染当前窗口（应用）路由
  const routeRender = () => nestedRouteRender(routes);

  const menuClick = ({ item, key, keyPath, domEvent }) => {
    console.log(key);
    setCount(count + 1);
    setMembers([key]);
  };

  // 渲染当前窗口（应用）菜单
  const menuRender = () => (
    <Menu onClick={menuClick} selectedKeys={members} theme="dark" mode="inline">
      {routes.map((item, key) => (
        <Menu.Item key={item.key}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout>
      <SiderMenu menuRender={menuRender} />
      <Layout>
        <Header>Header</Header>
        <Content>
          {routeRender()}
          <div onClick={() => setCount(count + 1)}>{count}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;

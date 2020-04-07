import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

interface IProps {
  menuRender: any,
};

const SiderMenu: React.FunctionComponent<IProps> = (props: IProps) => {
  const { menuRender } = props;

  return <Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      // position: 'fixed',
      // left: 0,
    }}
  >
      {menuRender()}
  </Sider>
}

export default SiderMenu;
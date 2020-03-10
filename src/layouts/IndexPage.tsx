import React from 'react';
import styles from '@/layouts/styles/index.scss';
import {NavLink} from "react-router-dom";
import {Card} from "antd";

interface IProps {

}

const cardRender = (name:any) => <Card
  hoverable
  style={{ width: 240 }}
  cover={<img style={{background: '#ddd'}} src="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg" />}
>
  <Card.Meta title={name} description="这里可以替换为一个微应用" />
</Card>

const Index: React.FunctionComponent<IProps> = (props:IProps) =>{
  return (
    <div>
      <header className={styles.headerWrapper}>
        typescript-react项目脚手架
      </header>
      <section className={styles.mainWrapper}>
        <div className="card">
          <NavLink to="/index">
            {cardRender('首页')}
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/other">{cardRender('Other')}</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Index;

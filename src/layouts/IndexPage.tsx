import React from 'react';
import styles from '@/layouts/styles/index.scss';
import {NavLink} from "react-router-dom";

interface IProps {

}

const Index: React.FunctionComponent<IProps> = (props:IProps) =>{
  return (
    <div>
      <header className={styles.headerWrapper}>
        typescript-react项目脚手架
      </header>
      <section className={styles.mainWrapper}>
        <div className="card">
          <NavLink to="/index">首页</NavLink>
        </div>
        <div className="card">
          <NavLink to="/other">other</NavLink>
        </div>
        <div className={styles.reactLogo}>
          <img className={styles.an} width="160" src="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg" />
        </div>
      </section>
    </div>
  );
};

export default Index;
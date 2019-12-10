import React from 'react';
import styles from '@/layouts/styles/index.scss';
import {NavLink} from "react-router-dom";

interface IProps {

}

const Index: React.FunctionComponent<IProps> = (props:IProps) =>{
  return (
    <div>
      <div className={styles.navWrapper}>
        typescript-react项目脚手架
      </div>
      <section className={styles.mainWrapper}>
        <div className="card">
          <NavLink to="/index">首页</NavLink>
        </div>
        <div className="card">
          <NavLink to="/other">other</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Index;
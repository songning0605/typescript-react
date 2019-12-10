import React from 'react';
import styles from '@/layouts/styles/basicLayout.scss';
import {Link} from "react-router-dom";

interface IProps {

}

const Index: React.FunctionComponent<IProps> = (props:IProps) =>{
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      <Link to="/index">首页</Link>
      <Link to="/other">other</Link>
      <h3>引导页</h3>
    </div>
  </div>;
};

export default Index;
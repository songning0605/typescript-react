import React from 'react';
import styles from '@/layouts/styles/basicLayout.scss';
import {Link} from "react-router-dom";

interface IProps {

}

const OtherLayout: React.FunctionComponent<IProps> = (props:IProps) =>{
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      <Link to="/index">回到主窗口</Link>
      我是其他窗口
    </div>
  </div>;
};

export default OtherLayout;
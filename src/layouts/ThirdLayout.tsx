import React from 'react';
import styles from '@/layouts/styles/basicLayout.scss';
import {Link} from "react-router-dom";
import { thousandSeparator } from '@/utils/_utils';

interface IProps {

}

const OtherLayout: React.FunctionComponent<IProps> = (props:IProps) =>{
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      <Link to="/index">回到主窗口</Link>
      <h3>我是其他窗口</h3>
      <h3>{thousandSeparator(123456.56)}</h3>
    </div>
  </div>;
};

export default OtherLayout;
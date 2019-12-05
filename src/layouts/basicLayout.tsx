import React from 'react';
import Test from '@components/Test';
import styles from './styles/basicLayout.scss';

interface IProps {

}

const BasicLayout: React.FunctionComponent<IProps> = props =>{
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      我是基础窗口
      <Test/>
    </div>
  </div>;
};

export default BasicLayout;
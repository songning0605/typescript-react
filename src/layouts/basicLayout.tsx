import * as React from 'react';
import * as styles from './styles/basicLayout.scss';

interface IProps {

}

const BasicLayout: React.FunctionComponent<IProps> = props =>{
  return <div className={styles.wrapper}>我是基础窗口</div>;
};

export default BasicLayout;
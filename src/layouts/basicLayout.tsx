import * as React from 'react';
import * as styles from './basicLayout.less';

interface IProps {

}

const BasicLayout: React.FunctionComponent<IProps> = props =>{
  return <div className={styles.basicLayout}>我是基础窗口</div>;
};

export default BasicLayout;
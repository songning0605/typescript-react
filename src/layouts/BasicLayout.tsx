import React from 'react';
import Test from '@components/Test';
import styles from './styles/basicLayout.scss';

interface IProps {

}

const BasicLayout: React.FunctionComponent<IProps> = (props:IProps) =>{
  return <div className={styles.wrapper}>
    <div className={styles.content}>

    </div>
  </div>;
};

export default BasicLayout;
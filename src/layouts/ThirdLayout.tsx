import React from "react";
import { Link } from "react-router-dom";
import { thousandSeparator } from "@/utils/_utils";
import styles from "@/layouts/styles/basicLayout.scss";

interface IProps {}

const OtherLayout: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.content}>
        <Link to="/index">回到主窗口</Link>
        <h3>我是其他窗口</h3>
        <h3>{thousandSeparator(123456.56)}</h3>
      </div>
    </div>
  );
};

export default OtherLayout;

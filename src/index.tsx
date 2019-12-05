import * as React from "react";
import * as ReactDom from "react-dom";
import BasicLayout from "./layouts/basicLayout";

import './index.scss';

// 把我们的CounterComponent组件渲染到id为app的标签内
ReactDom.render(<BasicLayout />, document.getElementById("app"));
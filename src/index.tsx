import * as React from "react";
import * as ReactDom from "react-dom";
import CounterComponent from "./components/Counter";
// 把我们的CounterComponent组件渲染到id为app的标签内
ReactDom.render(<CounterComponent name="宋宁" />,document.getElementById("app"));
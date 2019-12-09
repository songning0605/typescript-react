import React from 'react';
import { Link } from "react-router-dom";

const Home:React.FunctionComponent = props => {
    return <div>
        <Link to="/about">关于我</Link>
        我是主页
        </div>
}

export default Home;
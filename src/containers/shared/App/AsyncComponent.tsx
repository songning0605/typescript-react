import React from "react";
import loadable from "@loadable/component";

interface Props<T> {
    component: T;
}

const loadableOptions = {fallback: <div>Loading...</div>};

function AsyncComponent<T>(props:Props<T>) {
    const { component } = props;
    const NewComponent = loadable(component, loadableOptions);

    return <NewComponent />
}

export default AsyncComponent
import React, { FunctionComponent } from 'react';
import Loadable from 'react-loadable'
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function Loading() {
    return <div>Loading……</div>
}

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@views/Home'),
    loading: Loading
})

const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ '@views/About'),
    loading: Loading
})

const App: FunctionComponent = props => {
    return (
        <Router history={history}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </BrowserRouter>
        </Router>
    )
}

export default App;
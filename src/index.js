import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Home from './Home'
import Submit from './Submit'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker'

//var hashHistory = ReactRouter.hashHistory

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="submit" component={Submit} />
        </Route>
    </Router>, 
    document.getElementById('root'))
registerServiceWorker()

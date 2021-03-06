import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Home'
import Submit from './Submit'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
            <div className="container">

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to="/simply-exotic">Simply Exotic</NavLink>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink exact activeClassName="activeNav" to="/simply-exotic">Home</NavLink></li>
                            <li><NavLink activeClassName="activeNav" to="/simply-exotic/submit">Submit a Recipe</NavLink></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <Route exact path="/simply-exotic" component={Home} />
                <Route path="/simply-exotic/submit" component={Submit} />
            </div>
    </Router>, 
    document.getElementById('root'))
registerServiceWorker()

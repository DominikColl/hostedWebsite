import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/landing'
import About from './pages/about'
import Contact from './pages/contact'
class Routes extends Component {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />

                </Switch>
            </div>
        );
    }
}

export default Routes;
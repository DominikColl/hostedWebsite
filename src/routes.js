import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/landing'
import About from './pages/about'
import Contact from './pages/contact'
import QuizAppDetail from './pages/quizappDetail'
import LiveFmDetail from './pages/livefmdetail'
import TaskManager from './pages/taskmanager'
import TwitterClone from './pages/twitterclone'
class Routes extends Component {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/quizapp' component={QuizAppDetail} />
                    <Route exact path='/liveFmAPI' component={LiveFmDetail} />
                    <Route exact path='/taskmanager' component={TaskManager} />
                    <Route exact path='/twitterclone' component={TwitterClone} />
                </Switch>
            </div>
        );
    }
}

export default Routes;
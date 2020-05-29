import React, { Component, Fragment } from 'react';
import '../styles.css'
import Img from '../img/taskman.png'
// import '../particles/app'

class TaskManager extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div class='detailImgCont'>
                    <img src={Img} alt='Task Manager' />
                    <h1>Task Manager</h1>
                </div>
            </Fragment>

        );
    }
}

export default TaskManager;
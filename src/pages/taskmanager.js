import React, { Component, Fragment } from 'react';
import '../styles.css'
import Img from '../img/taskman.png'
// import '../particles/app'

class TaskManager extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className='detailImgCont'>
                    <img src={Img} alt='Task Manager' />
                    <h1>Task Manager</h1>
                    <section className='techUsedCont'>

                        <ul>
                            <h2>Tech Used</h2>
                            <li>HTML</li>
                            <li>SASS</li>
                            <li>UI</li>
                            <li>UX</li>
                            <li>API</li>
                            <li>Version Control</li>
                        </ul>
                        <p className='desc'> I built this Task Manager application to learn SASS and better my skills in CSS, UI, and UX. It is a simple Todo application where the user can make an objective and then build multiple tasks to complete the objective. This application was built using HTML5 and SASS you can see the progress as this application was built here on the repo.
</p>
                    </section>

                </div>
            </Fragment>

        );
    }
}

export default TaskManager;
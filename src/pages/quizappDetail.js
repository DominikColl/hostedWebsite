import React, { Component, Fragment } from 'react';
import '../styles.css'
import quizImg from '../img/quizMaker.png'

// import '../particles/app'

class QuizAppDetail extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className='detailImgCont'>
                    <img src={quizImg} alt='Quiz App' />
                    <h1>Quiz App</h1>
                    <div className='aboutCont'>
                        <section className='techUsedCont'>
                            <ul>
                                <h2>Tech Used</h2>
                                <li>ReactJs</li>
                                <li>Node/Express</li>
                                <li>Sequelize</li>
                                <li>Version Control</li>
                                <li>Pug</li>
                                <li>API</li>
                            </ul>

                            <p className='desc'> Quiz app was created as a class project to help build my skills as a full-stack developer. It is built in two different versions once with PUG as the front end using Node&Express to contact an API talking to a database to be able to create read update and delete quizzes, questions, and answers. The second version of this application switches the front end to ReactJs with the same backend tech.  This application also includes a feature of being able to sign in using Google OAuth so the user does not need to create a new account to start using this application. The front end uses the Material-UI library to build the design. You can see the code for this project on Github <a href='https://github.com/fs-tech-degs/capstone-project-2003-DominikColl' class='alinks'>here</a></p>

                        </section>
                    </div>
                </div>

            </Fragment>

        );
    }
}

export default QuizAppDetail;
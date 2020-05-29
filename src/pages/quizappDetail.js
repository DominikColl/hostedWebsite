import React, { Component, Fragment } from 'react';
import '../styles.css'
import quizImg from '../img/quizMaker.png'
// import '../particles/app'

class QuizAppDetail extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div class='detailImgCont'>
                    <img src={quizImg} alt='Quiz App' />
                    <h1>Quiz App</h1>
                    <section class='techUsedCont'>
                        <ul>
                            <li>ReactJs</li>
                            <li>Node/Express</li>
                            <li>Sequelize</li>
                            <li>Version Control</li>
                            <li>Pug</li>
                            <li>API</li>
                        </ul>
                    </section>
                </div>
            </Fragment>

        );
    }
}

export default QuizAppDetail;
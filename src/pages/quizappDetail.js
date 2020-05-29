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
                </div>
            </Fragment>

        );
    }
}

export default QuizAppDetail;
import React, { Component, Fragment } from 'react';
import '../styles.css'
import Img from '../img/twitterClone.png'
// import '../particles/app'

class TwitterClone extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className='detailImgCont'>
                    <img src={Img} alt='Twitter Clone' />
                    <h1>Twitter Clone</h1>
                    <section className='techUsedCont'>
                        <ul>
                            <h2>Tech Used</h2>
                            <li>ReactJs</li>
                            <li>Node/Express</li>
                            <li>Sequelize</li>
                            <li>Version Control</li>
                            <li>API</li>
                        </ul>
                        <p className='desc'>I built this project as my Capstone final project to demonstrate my ability to build a Fullstack application front and backend. This runs very similar to twitter where users sign up and can post, follow, like, and share posts. This is built using ReactJs and vanilla CSS for the frontend and for the backend is built with Node/Express, Sequelize,  and Postgre. Both the front end and backend are deployed using Heroku. This project can be found here and the repo will be found here.</p>
                    </section>
                </div>
            </Fragment>

        );
    }
}

export default TwitterClone;
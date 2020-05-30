import React, { Component, Fragment } from 'react';
import '../styles.css'
import Img from '../img/twitterClone.png'
// import '../particles/app'

class TwitterClone extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div class='detailImgCont'>
                    <img src={Img} alt='Twitter Clone' />
                    <h1>Twitter Clone</h1>
                    <section class='techUsedCont'>
                        <ul>
                            <li>ReactJs</li>
                            <li>Node/Express</li>
                            <li>Sequelize</li>
                            <li>Version Control</li>
                            <li>API</li>
                        </ul>
                    </section>
                </div>
            </Fragment>

        );
    }
}

export default TwitterClone;
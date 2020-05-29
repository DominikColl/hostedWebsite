import React, { Component, Fragment } from 'react';
import '../styles.css'
import Img from '../img/liveFmAPI.png'
// import '../particles/app'

class LiveFmDetail extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div class='detailImgCont'>
                    <img src={Img} alt='Quiz App' />
                    <h1>LiveFm API</h1>
                </div>
            </Fragment>

        );
    }
}

export default LiveFmDetail;
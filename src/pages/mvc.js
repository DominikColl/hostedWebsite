import React, { Component, Fragment } from 'react';
import '../styles.css'
import Img from '../img/mvc.png'
// import '../particles/app'

class MVC extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className='detailImgCont'>
                    <img src={Img} alt="MVC" />
                    <h1>MVC</h1>
                </div>
            </Fragment>

        );
    }
}

export default MVC;
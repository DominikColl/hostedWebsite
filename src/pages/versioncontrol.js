import React, { Component, Fragment } from 'react';
import '../styles.css'
import Img from '../img/versionControll.png'
// import '../particles/app'

class VersionControl extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div class='detailImgCont'>
                    <img src={Img} alt='Version Control' />
                    <h1>Version Control</h1>
                </div>
            </Fragment>

        );
    }
}

export default VersionControl;
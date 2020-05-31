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
                    <section class='techUsedCont'>
                        <ul>
                            <h2>Tech Used</h2>
                            <li>ReactJs</li>
                            <li>CSS</li>
                            <li>Version Control</li>
                            <li>API</li>
                        </ul>
                        <p class='desc'>The LiveFm API project was an idea that I came up with and wanted to build for myself. The application allows you to search for any Song, Artist, or Album and it will come up with data about your search. The data is coming from LiveFms API which allows me to pull this data and display it. This project is built with ReactJs and is styled with vanilla CSS. You can see how this project was built on this Github repo here. </p>
                    </section>
                </div>
            </Fragment>

        );
    }
}

export default LiveFmDetail;
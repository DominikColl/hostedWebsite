import React, { Component, Fragment } from 'react';
import '../styles.css'
import i from '../img/aboutPic.png'
import JsPic from '../img/js.png'
import htmlPic from '../img/html.png'
import reactPic from '../img/react.png'
import uiPic from '../img/ui.png'
import webPic from '../img/web.png'
import cssPic from '../img/css.png'
import Particles from 'react-particles-js';

// import '../particles/app'

class Landing extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <section id='attention'>

                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 230,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "color": {
                                    "value": "#00c905"
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "speed": 4,
                                        "size_min": 0.3
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 1,
                                    "direction": "top",
                                    "out_mode": "out"
                                }
                            },

                        }} height='300px' />

                    <h1>Dominik Coll</h1>
                </section>
                <section id='projectSection'>
                    <h2>Projects</h2>
                    <ul id='projectList'>
                        <li id='quizApp'><p>Quiz App</p></li>
                        <li id='livefm'><p>LiveFm API</p></li>
                        <li id='task'><p>Task Manager</p></li>
                        <li id='twitClone'><p>Twitter Clone</p></li>
                    </ul>
                </section>
                <section id='blogSection'>
                    <h2>Tutorials</h2>
                    <ul id='blogList'>
                        <li id='vc'><p>Version Control</p></li>
                        <li id='mvc'><p>MVC</p></li>
                        <li id='reactjs'><p>ReactJs Intro</p></li>
                        <li id='particles'><p>React Particles</p></li>
                    </ul>
                </section>
                <section id='skillsSection'>
                    <p>Skills Include</p>
                    <ul id='skillsList'>
                        <li><img class='skillIcons' src={JsPic} alt='Javascript' /><h2>Javascript</h2></li>
                        <li><img class='skillIcons' src={reactPic} alt='ReactJs' /><h2>ReactJs</h2></li>
                        <li><img class='skillIcons' src={htmlPic} alt='HTML' /><h2>HTML</h2></li>
                        <li><img class='skillIcons' src={cssPic} alt='CSS' /><h2>CSS/SASS</h2></li>
                        <li><img class='skillIcons' src={webPic} alt='Web Applications' /><h2>Web Applications</h2></li>
                        <li><img class='skillIcons' src={uiPic} alt='UI' /><h2>UX</h2></li>
                    </ul>
                </section>
                <section id='about'>
                    <h2>About me Dominik Coll</h2>

                    <img id='aboutPic' src={i} alt='Dominik Coll' />

                    <p>This is about me Dominik Coll thanks for reading</p>
                </section>
            </Fragment>

        );
    }
}

export default Landing;
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
import { Link } from 'react-router-dom'
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
                        <Link to='/quizapp'> <li id='quizApp'><p>Quiz App</p></li></Link>
                        <Link to='/liveFmAPI'>  <li id='livefm'><p>LiveFm API</p></li></Link>
                        <Link to='/taskmanager'><li id='task'><p>Task Manager</p></li></Link>
                        <Link to='/twitterclone'><li id='twitClone'><p>Twitter Clone</p></li></Link>
                    </ul>
                </section>
                <section id='blogSection'>
                    <h2>Tutorials</h2>
                    <ul id='blogList'>
                        <Link to='/versioncontrol'> <li id='vc'><p>Version Control (Coming Soon!)</p></li></Link>
                        <Link to='/mvc'><li id='mvc'><p>MVC (Coming Soon!)</p></li></Link>
                        <Link to='/'> <li id='reactjs'><p>ReactJs Intro (Coming Soon!)</p></li></Link>
                        <Link to='/'> <li id='particles'><p>React Particles (Coming Soon!)</p></li></Link>
                    </ul>
                </section>
                <section id='skillsSection'>
                    <h2>Skills Include</h2>
                    <ul id='skillsList'>
                        <li><img class='skillIcons' src={JsPic} alt='Javascript' /><h3>Javascript</h3></li>
                        <li><img class='skillIcons' src={reactPic} alt='ReactJs' /><h3>ReactJs</h3></li>
                        <li><img class='skillIcons' src={htmlPic} alt='HTML' /><h3>HTML</h3></li>
                        <li><img class='skillIcons' src={cssPic} alt='CSS' /><h3>CSS/SASS</h3></li>
                        <li><img class='skillIcons' src={webPic} alt='Web Applications' /><h3>Web Applications</h3></li>
                        <li><img class='skillIcons' src={uiPic} alt='UI' /><h3>UX</h3></li>
                    </ul>
                </section>
                <section id='about'>
                    <h2>About me Dominik Coll</h2>
                    <img id='aboutPic' src={i} alt='Dominik Coll' />
                    <p id='aboutP'>Hi! I am Dominik Coll a web designer/developer focused on crafting innovative and interactive user web experiences. Designing and Coding have been my passion since I started working with computers and have found a genuine interest in the collaborative opportunity that designing and coding provides when working with a client’s vision. My passion is to create beautifully designed, intuitive and functional websites. For the past 3 years, I have worked on developing digital platforms while maintaining an active interest in the latest technology that is utilized to promote your personal or company’s mission.
<br />
                        Beyond my passion for coding and designing, I enjoy the opportunity to travel and hike. </p>
                </section>
            </Fragment>

        );
    }
}

export default Landing;
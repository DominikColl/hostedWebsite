import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles.css'
class Footer extends Component {

    state = {}
    render() {
        return (
            <div id='footer'>
                <ul id='footerList'>
                    <li>Resume</li>
                    <li>Github</li>
                    <li>LinkedIn</li>
                </ul>
            </div >);
    }
}

export default Footer;
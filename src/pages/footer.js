import React, { Component } from 'react';

import { FaLinkedin, FaGithub, FaClipboard } from 'react-icons/fa';

import '../styles.css'
class Footer extends Component {

    state = {}
    render() {
        return (
            <div id='footer'>
                <ul id='footerList'>
                    <li><FaClipboard /></li>
                    <li><a href='https://github.com/DominikColl' target='_blank' rel="noopener noreferrer"><FaGithub /></a></li>
                    <li><a href='https://www.linkedin.com/in/dominik-coll-a0619b1a1/' target='_blank' rel="noopener noreferrer"> <FaLinkedin /></a></li>
                </ul>
            </div >);
    }
}

export default Footer;
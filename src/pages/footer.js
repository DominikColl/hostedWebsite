import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaClipboard } from 'react-icons/fa';

import '../styles.css'
class Footer extends Component {

    state = {}
    render() {
        return (
            <div id='footer'>
                <ul id='footerList'>
                    <li><FaClipboard /></li>
                    <li><FaGithub /></li>
                    <li><FaLinkedin /></li>
                </ul>
            </div >);
    }
}

export default Footer;
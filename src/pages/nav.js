import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles.css'
class Nav extends Component {

    state = {}
    render() {
        return (
            <div id='nav'>
                <ul id='navList'>
                    <li ><Link id='nav1' to='/'>Home</Link></li>
                    <li><Link to='/about' id='nav2'>About</Link></li>
                    <li><Link to='/contact' id='nav3'>Contact</Link></li>
                </ul>
            </div >);
    }
}

export default Nav;
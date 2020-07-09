import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles.css'
class Nav extends Component {

    state = { homePage: true }
    render() {
        const t = <li><a className='navLink' id='nav2' href='#abouttt'>About</a></li>

        const about = () => {
            const loc = window.location.href
            console.log(loc)
            if (loc === 'http://localhost:3000/' || loc === 'dominikcoll.com') {
                return t
            } else {
                console.log('Not on home page')
                return ''
            }
        }
        return (
            <div id='nav'>

                <ul id='navList'>
                    <li ><Link className='navLink' id='nav1' to='/'>Home</Link></li>
                    {about()}
                    <li><Link className='navLink' to='/contact' id='nav3'>Contact</Link></li>
                </ul>
            </div >);
    }
}

export default Nav;
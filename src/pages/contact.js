import React, { Component } from 'react';
// import API from '../API'
import { FaPhoneAlt, FaSearchLocation, FaLinkedin } from 'react-icons/fa'
import '../styles.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
class Landing extends Component {
    state = { name: '', email: '', message: '' }
    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };
    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { name, email, message } = this.state;
        return (
            <>
                <div id='containerCon'>
                    <form onSubmit={this.handleSubmit} id='form' name="contact" method='POST' data-netlify="true" >
                        <h1>Contact Me</h1>
                        <p>
                            <label>
                                <input placeholder='Name' type="text" name="name" value={name} onChange={this.handleChange} />
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="email" placeholder='Email' name="email" value={email} onChange={this.handleChange} />
                            </label>
                        </p>
                        <p>
                            <label>
                                <textarea placeholder='Your Message' name="message" value={message} onChange={this.handleChange} />
                            </label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                    <section id='contactList'>
                        <ul>
                            <li> <FaPhoneAlt />813-520-9292</li>
                            <li><FaSearchLocation />Portland Oregon</li>
                            <li><FaLinkedin /><a class='alinks' href='https://www.linkedin.com/in/dominik-coll-a0619b1a1/'>LinkedIn</a></li>
                        </ul>
                    </section>
                </div>
            </>
        );
    }
}


export default Landing;
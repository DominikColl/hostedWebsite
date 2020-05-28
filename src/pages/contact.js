import React, { Component } from 'react';
import API from '../API'
import '../styles.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
class Landing extends Component {
    state = { name: '', email: '' }
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
        const { name, email } = this.state;
        return (
            <>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit} name="contact" method='POST' data-netlify="true" >
                    <p>
                        <label>
                            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    {/* <p>
                        <label>
                            Message: <textarea name="message" value={message} onChange={this.handleChange} />
                        </label>
                    </p> */}
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </>
        );
    }
}


export default Landing;
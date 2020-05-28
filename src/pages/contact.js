import React, { Component } from 'react';
import API from '../API'
import '../styles.css'
class Landing extends Component {
    state = { name: '', email: '', reason: '' }
    handleInputChange = event => {
        // get the input from the event
        const { target } = event;
        // find the value of the input
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // get the name of the input from it's attribute
        const { name } = target;
        // set state to the name and the value. For example, { description: 'hi'}
        this.setState({
            [name]: value
        });

    };
    createContact = async (event) => {
        // const history = useHistory();
        event.preventDefault();
        console.log(this.state)
        const { name, reason, email } = this.state
        let success = await API.post('/submit/contact', { name, reason, email })
        console.log(success)
    }
    render() {
        return (
            <>
                <h1>Form</h1>
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>

                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </>
        );
    }
}

export default Landing;
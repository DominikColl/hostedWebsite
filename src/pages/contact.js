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
                <form>
                    <input type='text' name="name" id="name" onChange={this.handleInputChange} placeholder='Name'></input>
                    <input type='text' name="email" id="email" onChange={this.handleInputChange} placeholder='Email'></input>
                    <textarea type='text' name="reason" id="reason" onChange={this.handleInputChange} placeholder=''></textarea>
                    <button onClick={this.createContact}>Submit</button>
                </form>
            </>
        );
    }
}

export default Landing;
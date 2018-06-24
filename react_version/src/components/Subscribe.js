import React, { Component } from 'react';


class Subscribe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email_address: "",
        };


    }

    updateInputValue(e) {
        this.setState({
            email_address: e.target.value,
        });

    }


    OnSubmit(e) {
        e.preventDefault()
        console.log(this.state.email_address)
        fetch('https://us18.api.mailchimp.com/3.0/lists/7281781f26', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ecdef0a0fbf073ac3b608b5ef7ff462b-us18'
            },
            body: JSON.stringify({
                "members": [{
                    "email_address": this.state.email_address,
                    "status": "subscribed"
                }]
            })
        })
            .then(function (data) {
                console.log('Request success: ', data);
            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });
        this.setState({
            email_address: '',
            status: ""
        });
    }


    render() {
        return (
            <div className="subscribe-form">
                <form id="mc-form" className="group" noValidate="true">
                    <input type="email" value={this.state.email_address} onChange={this.updateInputValue.bind(this)} name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />
                    <input type="submit" onClick={this.OnSubmit.bind(this)} name="subscribe" value="Subscribe" />
                    <label htmlFor="mc-email" className="subscribe-message"></label>
                </form>
            </div>
        )

    }
}


export default Subscribe;
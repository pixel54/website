import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';

class Subscribe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email_address: "",
        };


    }

    componentDidMount() {
        let box = document.querySelector(".mc-modal");
        // box[0].style.display="block";
        console.log(box)
    }

    updateInputValue(e) {
        this.setState({
            email_address: e.target.value,
        });

    }

    // mailChimpURL: 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url

    OnSubmit(e) {
        e.preventDefault()
        // console.log(this.state.email_address)
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const key = "ecdef0a0fbf073ac3b608b5ef7ff462b-us18";
        const url = "https://us18.api.mailchimp.com/3.0/lists/7281781f26?apikey=ecdef0a0fbf073ac3b608b5ef7ff462b-us18"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic' + key
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
                if (data.status === 200) {
                    document.querySelector('label.subscribe-message').innerHTML = "Bon voyage and Thanks for Subscribing"
                } else {
                    document.querySelector('label.subscribe-message').innerHTML = "oh dear something went wrong"
                }
            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });
        this.setState({
            email_address: '',
            status: ""
        });
    }

    momo(e) {
        e.preventDefault();
        let box = $(".mc-modal");


    }

    render() {
        return (
            <div className="subscribe-form">
                <form id="mc-form" className="group" noValidate="true">
                    {/* <input type="email" value={this.state.email_address} onChange={this.updateInputValue.bind(this)} name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" /> */}
                    <input type="submit" onClick={this.momo.bind(this)} name="subscribe" value="Subscribe" />
                    <label htmlFor="mc-email" className="subscribe-message"></label>
                </form>
            </div>
        )

    }
}


export default Subscribe;
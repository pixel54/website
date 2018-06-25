import React, { Component } from 'react';

const SectionStyle = {
    textAlign: 'center',
    color: '#384352'
}

const BlueText = {
    color: '#384352'
}

const ThankYou = () => {
    return (
        <section style={SectionStyle}>
            <div>
                <h1 style={BlueText}>Thank you for getting in touch!</h1>
                <h2 style={BlueText} >We appreciate you contacting us. One of our colleagues will get back to you shortly.
                     <br/>Have a great day!</h2>
                     <h1>Back to pixel54.</h1>
            </div>


        </section>
    )
}


export default ThankYou;


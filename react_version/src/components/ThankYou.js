import React, { Component } from 'react';
import CodeImage from '../images/code.png';

const SectionStyle = {
    textAlign: 'center',
    color: '#384352'
}

const WidthReduce = {
    maxWidth: '200px'
}

const BlueText = {
    color: '#384352'
}

const ThankYou = () => {
    return (
        <div>
            <section style={SectionStyle}>
                <div>
                    <h1 style={BlueText}>Thank you for getting in touch!</h1>
                    <h2 style={BlueText} >We appreciate you contacting us. One of our colleagues will get back to you shortly.
                     <br />Have a great day!</h2>
                    <a href="/"><h1>Back to pixel54.</h1></a>
                </div>

                <a href="/"><img style={WidthReduce} src={CodeImage} alt="code image" /></a>
            </section>
        </div>
    )
}


export default ThankYou;


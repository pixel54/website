import React, { Component } from 'react';

const light = {
    color: '#d2d2d2'
}

    const Nav = (props) => {
        return (
            <nav className="header-nav">
            <a href="#0" className="header-nav__close" title="close">
                <span>Close</span>
            </a>

            <div className="header-nav__content">
                <h3>Navigation</h3>

                <ul className="header-nav__list">
                    <li className="current">
                        <a className="smoothscroll" href="#home" title="home">Home</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about" title="about">Who we are</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#services" title="services">What we do</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#clients" title="clients">How we do it</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#works" title="works">Recent Projects</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#contact" title="contact">Contact</a>
                    </li>
                </ul>

                <p style={light} >We offer a range of web design, development & consultancy services for our clients. Our core market is design and creative agencies although we do work direct.</p>
                <div className="cinfo">
                    <h5>Lets Chat</h5>
                    <p style={light}>
                   
                    Mobile: <a href="tel:+447931978042">07931978042</a>
                  
                    </p>
                </div>
               <ul className="header-nav__social">
                    <li>
                        <a target="_blank" href="//www.facebook.com/pixel54/">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
             
                    <li>
                        <a target="_blank" href="//www.instagram.com/pixel_54/">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
              
                </ul>

            </div>
            {/* <!-- end header-nav__content --> */}

        </nav>

            )  
        }




export default Nav; 

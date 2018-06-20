import React, { Component } from 'react';



    const list =  ({href,title})  => {
       return (
           <li className="current"><a className="smoothscroll" href={href} title={title}>home</a></li>
       )
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
                    {/* <li className="current">
                        <a className="smoothscroll" href="#home" title="home">Home</a>
                    </li> */}
                    <list />
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

                <p>We offer a range of web design, development & consultancy services for our clients. Our core market is design and creative agencies although we do work direct.</p>
                <div className="cinfo">
                    <h5>Lets Chat</h5>
                    <p>
                   
                        Mobile: 07931978042
                  
                    </p>
                </div>
                {/* <!-- <ul className="header-nav__social">
                    <li>
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-behance"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-dribbble"></i>
                        </a>
                    </li>
                </ul> --> */}

            </div>
            {/* <!-- end header-nav__content --> */}

        </nav>

            )  
        }




export default Nav; 

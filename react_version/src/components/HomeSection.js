import React, { Component } from 'react';
import bg from '../images/hero-bg.jpg';

const HomeSection = () => {
    return (
        <section id="home" className="s-home target-section" data-parallax="scroll" data-image-src={bg} data-natural-width={3000} data-natural-height={2000} data-position-y="center" >

            {/* <!-- <div className="overlay"></div> -->
    <!-- <div className="shadow-overlay"></div> --> */}

            <div className="home-content">

                <div className="row home-content__main">

                    <h3>Welcome to Pixel54</h3>

                    <h1>
                        We are a creative group
                <br /> of people who design
                <br /> influential brands and
                <br /> digital experiences.
            </h1>
                    <h3>Creative | Digital | Web Development </h3>
                    <div className="home-content__buttons">
                        <a href="#contact" className="smoothscroll btn btn--stroke">
                            Start a Project
                </a>
                        <a href="#about" className="smoothscroll btn btn--stroke">
                            More About Us
                </a>
                    </div>

                </div>

                <div className="home-content__scroll">
                    <a href="#about" className="scroll-link smoothscroll">
                        <span>Scroll Down</span>
                    </a>
                </div>

                <div className="home-content__line"></div>

            </div>
            {/* <!-- end home-content --> */}

            {/* <!-- 
    <ul className="home-social">
        <li>
            <a href="#0">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <span>Facebook</span>
            </a>
        </li>
        <li>
            <a href="#0">
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <span>Twiiter</span>
            </a>
        </li>
        <li>
            <a href="#0">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <span>Instagram</span>
            </a>
        </li>
        <li>
            <a href="#0">
                <i className="fa fa-behance" aria-hidden="true"></i>
                <span>Behance</span>
            </a>
        </li>
        <li>
            <a href="#0">
                <i className="fa fa-dribbble" aria-hidden="true"></i>
                <span>Dribbble</span>
            </a>
        </li>
    </ul> --> */}
            {/* <!-- end home-social --> */}

        </section>
    )
}
export default HomeSection;
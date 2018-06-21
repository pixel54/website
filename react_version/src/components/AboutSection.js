import React, { Component } from 'react';

const About = () => {
    return (
    <section id='about' className="s-about">

        <div className="row section-header has-bottom-sep" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead subhead--dark">Hello There</h3>
                <h1 className="display-1 display-1--light">We Are Pixel54</h1>
            </div>
        </div>
        {/* <!-- end section-header --> */}

        <div className="row about-desc" data-aos="fade-up">
            <div className="col-full">
                <p>

                    Pixel54 Studio is a creative London web agency that combines the skills of our talented in-house web designers, developers,
                    search and social strategists to deliver a unified service for our clients throughout London and the
                    UK.
                    <br/>
                    <br/> Our expertise covers a multitude of areas including brand creation, strategy and planning, web design,
                    mobile, bespoke backend web development, eCommerce platforms, content management systems, app development
                    and digital marketing.
                    <br/>
                    <br/>If you are looking to transform your existing website or build a completely new website, we are the web
                    design London agency that can help realise your goals.
                </p>
            </div>
        </div>
        {/* <!-- end about-desc --> */}

        <div className="row about-stats stats block-1-2 block-m-1-2 block-mob-full" data-aos="fade-up">
            <div className="col-block stats__col ">
                <div className="stats__count">1</div>
                <h5>Awards Received</h5>
            </div>
            <div className="col-block stats__col">
                <div className="stats__count">303</div>
                <h5>Cups of Coffee</h5>
            </div>
            {/* <!-- <div className="col-block stats__col">
                <div className="stats__count">10</div>
                <h5>Projects Completed</h5>
            </div>
            <div className="col-block stats__col">
                <div className="stats__count">102</div>
                <h5>Happy Clients</h5>
            </div> --> */}

        </div>
        {/* <!-- end about-stats --> */}

        <div className="about__line"></div>

    </section>

    ) 
}

export default About;
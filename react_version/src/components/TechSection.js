import React, { Component} from 'react';


const TechSection = () => {
    return (
    <section id="clients" className="s-clients">
        <div className="row section-header" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead">front end technologies</h3>
                <h1 className="display-2">We love to build apps using the latest tech, let us build YOURS</h1>
            </div>
        </div>
        {/* <!-- end section-header --> */}

        <div className="row clients-outer" data-aos="fade-up">
            <div className="col-full">
                <div className="clients">

                    <a href="#0" title="" className="clients__slide">
                        <img src="/images/tech/react.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/vue.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/pwa.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/nodejs.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/sass.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/bootstrap.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/wordpress.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/php.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/ubuntu.png" alt="tech"/>
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/tech/" alt="tech"/>
                    </a>

                </div>
                {/* <!-- end clients --> */}
            </div>
            {/* <!-- end col-full --> */}
        </div>
        {/* <!-- end clients-outer --> */}
    </section>

    )
}


export default  TechSection; 
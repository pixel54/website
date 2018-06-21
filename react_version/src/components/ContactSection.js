import React, { Component } from 'react';


const ContactSection = () => {
    return (
    <section id="contact" className="s-contact">

        <div className="overlay"></div>
        <div className="contact__line"></div>

        <div className="row section-header" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead">Contact Us</h3>
                <h1 className="display-2 display-2--light">Reach out for a new project or just say hello</h1>
            </div>
        </div>

        <div className="row contact-content" data-aos="fade-up">

            <div className="contact-primary">

                <h3 className="h6">Send Us A Message</h3>

                <form name="contactForm" id="contactForm" method="post" action="" noValidate="noValidate">
                    <fieldset>
                        <div className="form-field">
                            <input name="contactName" type="text" id="contactName" placeholder="Your Name" value="" minLength="2" required="" aria-required="true"
                                className="full-width"/>
                        </div>
                        <div className="form-field">
                            <input name="contactEmail" type="email" id="contactEmail" placeholder="Your Email" value="" required="" aria-required="true"
                                className="full-width"/>
                        </div>
                        <div className="form-field">
                            <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" className="full-width"/>
                        </div>
                        <div className="form-field">
                            <textarea name="contactMessage" id="contactMessage" placeholder="Your Message" rows="10" cols="50" required="" aria-required="true"
                                className="full-width"></textarea>
                        </div>
                        <div className="form-field">
                            <button className="full-width btn--primary">Submit</button>
                            <div className="submit-loader">
                                <div className="text-loader">Sending...</div>
                                <div className="s-loader">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            </div>
                        </div>

                    </fieldset>
                </form>

                {/* <!-- contact-warning --> */}
                <div className="message-warning">
                    Something went wrong. Please try again.
                </div>

                {/* <!-- contact-success --> */}
                <div className="message-success">
                    Your message was sent, thank you!
                    <br/>
                </div>

            </div>
            {/* <!-- end contact-primary --> */}

            <div className="contact-secondary">
                <div className="contact-info">

                    <h3 className="h6 hide-on-fullwidth">Contact Info</h3>

                    <div className="cinfo">
                        <h5>Where to Find Us</h5>
                        <p>
                           pixel54.co.uk <br/>
                           pixel54.io
                        </p>
                    </div>

                    <div className="cinfo">
                        <h5>Email Us At</h5>
                        <p>
                           hellopixel@gmail.com
                        </p>
                    </div>

                    <div className="cinfo">
                        <h5>Lets Chat</h5>
                        <p>
                       
                            Mobile: 07931978042
                      
                        </p>
                    </div>
{/* <!-- 
                    <ul className="contact-social">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-behance" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-dribbble" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul> --> */}
                    {/* <!-- end contact-social --> */}

                </div>
                {/* <!-- end contact-info --> */}
            </div>
            {/* <!-- end contact-secondary --> */}

        </div>
        {/* <!-- end contact-content --> */}

    </section>
    )
}


export default ContactSection;


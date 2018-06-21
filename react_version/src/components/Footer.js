import React, { Component } from 'react';

const Footer = () => {
  return (
    <footer>

        <div className="row footer-main">

            <div className="col-six tab-full left footer-desc">

                <div>
                    <a className="site-logo" href="index.html">
                        <div className="pixel54-logo footer">
                                <h1>pixel54.</h1>
                        </div>
                    </a>
                </div>
                We are an award winning web design agency with over 20 years experience. We help guide businesses through the digital landscape, designing beautiful experiences for your customers along the way.

            </div>

            <div className="col-six tab-full right footer-subscribe">

                <h4>Get Notified</h4>
            

                <div className="subscribe-form">
                    <form id="mc-form" className="group" noValidate="true">
                        <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required=""/>
                        <input type="submit" name="subscribe" value="Subscribe"/>
                        <label htmlFor="mc-email" className="subscribe-message"></label>
                    </form>
                </div>

            </div>

        </div>
        {/* <!-- end footer-main --> */}

        <div className="row footer-bottom">

            <div className="col-twelve">
                <div className="copyright">
                    <span>© Copyright Pixel54 2017</span>
                </div>

                <div className="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <i className="icon-arrow-up" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

        </div>
        {/* <!-- end footer-bottom --> */}

    </footer>

  )

}


export default Footer; 


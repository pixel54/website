import React, { Component } from 'react';
import Subscribe from './Subscribe';
import Version from './GithibVerson'

    



const Footer = () => {
 
  const date = new Date()

  return (
    <footer>

        <div className="row footer-main">

            <div className="col-six tab-full left footer-desc">

                <div>
                    <a className="site-logo" href="/">
                        <div className="pixel54-logo footer">
                                <h1>pixel54.</h1>
                        </div>
                    </a>
                </div>
                We are an award winning web design agency with over 20 years experience. We help guide businesses through the digital landscape, designing beautiful experiences for your customers along the way.
                
            </div>

            <div className="col-six tab-full right footer-subscribe">
                <h4>Get Notified</h4>
                <Subscribe/>
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
        </div>
        {/* <!-- end footer-main --> */}

        <div className="row footer-bottom">

            <div className="col-twelve">
                <div className="copyright">
                    <span>© Copyright Pixel54 {date.getFullYear()}</span>
                    <Version/>
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


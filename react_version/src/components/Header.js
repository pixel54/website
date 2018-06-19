import React, { Component } from 'react';
import '../css/base.css';
import '../css/vendor.css';
import '../css/main.css';
import bg from '../images/hero-bg.jpg';


class App extends Component {
  render() {
    return (
      <div>
      <header className="s-header">

        <div className="header-logo">
            <a href="index.html">
                <div className="pixel54-logo">
                <h1>pixel54.</h1>
            </div>
            </a>
        </div>

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
        {/* <!-- end header-nav --> */}

        <a className="header-menu-toggle" href="#0">
            <span className="header-menu-text">Menu</span>
            <span className="header-menu-icon"></span>
        </a>

    </header>
    {/* <!-- end s-header --> */}

    {/* <!-- home
    ================================================== --> */}
    <section id="home" className="s-home target-section" data-parallax="scroll" data-image-src={bg} data-natural-width={3000} data-natural-height={2000} data-position-y="center" >

        {/* <!-- <div className="overlay"></div> -->
        <!-- <div className="shadow-overlay"></div> --> */}

        <div className="home-content">

            <div className="row home-content__main">

                <h3>Welcome to Pixel54</h3>

                <h1>
                    We are a creative group
                    <br/> of people who design
                    <br/> influential brands and
                    <br/> digital experiences.
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
    {/* <!-- end s-home --> */}

       {/* <!-- about
    ================================================== --> */}
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
    {/* <!-- end s-about --> */}

    
    {/* <!-- services
    ================================================== --> */}
    <section id='services' className="s-services">

        <div className="row section-header has-bottom-sep" data-aos="fade-up">
            <div className="col-full">
                <h3 className="subhead">What We Do</h3>
                <h1 className="display-2">We’ve got everything you need to launch and grow your business</h1>
            </div>
        </div>
        {/* <!-- end section-header --> */}

        <div className="row services-list block-1-2 block-tab-full">
            <div className="col-block service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="icon-lego-block"></i>
                </div>
                <div className="service-text">
                    <h3 className="h2">Web Development</h3>
                    <p>Using a wide range of tools our development team develop websites, e-commerce, web portals, and mobile apps that are easy to use and maintain. 
                    </p>
                </div>
            </div>


            <div className="col-block service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="icon-earth"></i>
                </div>
                <div className="service-text">
                    <h3 className="h2">Web Design</h3>
                    <p>Our website design specialists transform visions into reality, creating user-friendly, responsive, engaging sites.
                    </p>
                </div>
            </div>

            <div className="col-block service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="icon-paint-brush"></i>
                </div>
                <div className="service-text">
                    <h3 className="h2">Brand Identity</h3>
                    <p>Visual identity design is about more than a logo mark. Pixel54 builds the complete identity, combining shapes, colours, imagery and tone of voice to powerful effect. Covering all media and all touch-points between a brand and its audiences.
                    </p>
                </div>
            </div>

            <div className="col-block service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="icon-group"></i>
                </div>
                <div className="service-text">
                    <h3 className="h2">Mobile Apps</h3>
                    <p>Talk to us about mobile app development today to give your visitors greater flexibility, top quality user experience and even better accessibility. We specialise in mobile development for both iOS and Android.
                    </p>
                </div>
            </div>

            <div className="col-block service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="icon-megaphone"></i>
                </div>
                <div className="service-text">
                    <h3 className="h2">Marketing</h3>
                    <p>Our digital marketing experts specialise in SEO, PPC, social media, graphic design, branding and copywriting.
                    </p>
                </div>
            </div>


            <div className="col-block service-item" data-aos="fade-up">
                <div className="service-icon">
                    <i className="icon-cube"></i>
                </div>
                <div className="service-text">
                    <h3 className="h2">CMS</h3>
                    <p>We develop CMS websites with sophisticated functionality and straightforward, usable admin panels. Give yourself complete control over your content to reap the benefits of frequent, fresh updates on search engine rankings and customer engagement.
                    </p>
                </div>
            </div>

        </div>
        {/* <!-- end services-list --> */}

    </section>
    {/* <!-- end s-services --> */}
    {/* <!-- clients
    ================================================== --> */}
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
                        <img src="../images/clients/react.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/vue.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/pwa.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/nodejs.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/sass.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/bootstrap.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/wordpress.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/php.png" />
                    </a>
                    <a href="#0" title="" className="clients__slide">
                        <img src="images/clients/ubuntu.png" />
                    </a>

                </div>
                {/* <!-- end clients --> */}
            </div>
            {/* <!-- end col-full --> */}
        </div>
        {/* <!-- end clients-outer --> */}


    </section>
    {/* <!-- end s-clients --> */}

     {/* <!-- works
    ================================================== --> */}
    <section id='works' className="s-works">

        <div className="intro-wrap">

            <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Recent Works</h3>
                    <h1 className="display-2 display-2--light">We love what we do, check out some of our latest works</h1>
                </div>
            </div>
            {/* <!-- end section-header --> */}

        </div>
        {/* <!-- end intro-wrap --> */}

        <div className="row works-content">
            <div className="col-full masonry-wrap">
                <div className="masonry">

                    <div className="masonry__brick" data-aos="fade-up">
                        <div className="item-folio">

                            <div className="item-folio__thumb">
                                <a href="images/portfolio/gallery/pixel-speech-bubble.jpg" className="thumb-link" title="Shutterbug" data-size="1050x700">
                                    <img src="images/portfolio/pixel-speech-bubble.jpg" srcSet="images/portfolio/pixel-speech-bubble.jpg 1x, images/portfolio/pixel-speech-bubble2.png 2x"
                                        alt=""/>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <h3 className="item-folio__title">
                                    Coming Soon
                                </h3>
                                <p className="item-folio__cat">
                                    Coming Soon
                                </p>
                            </div>

                            <a href="#" className="item-folio__project-link" title="Project link">
                                <i className="icon-link"></i>
                            </a>

                            <div className="item-folio__caption">
                                <p>                Coming Soon</p>
                            </div>

                        </div>
                    </div>
                    {/* <!-- end masonry__brick --> */}

                    <div className="masonry__brick" data-aos="fade-up">
                        <div className="item-folio">

                            <div className="item-folio__thumb">
                                <a href="images/portfolio/gallery/pixel-speech-bubble.jpg" className="thumb-link" title="Woodcraft" data-size="1050x700">
                                    <img src="images/portfolio/pixel-speech-bubble2.jpg" srcSet="images/portfolio/pixel-speech-bubble2.jpg 1x, images/portfolio/pixel-speech-bubble@x2.png 2x"
                                        alt=""/>
                                </a>
                            </div>

                            <div className="item-folio__text">
                                <h3 className="item-folio__title">
                                    Coming Soon
                                </h3>
                                <p className="item-folio__cat">
                                    Coming Soon
                                </p>
                            </div>

                            <a href="#" className="item-folio__project-link" title="Project link">
                                <i className="icon-link"></i>
                            </a>

                            <div className="item-folio__caption">
                                <p>                Coming Soon</p>
                            </div>

                        </div>
                    </div>
                    {/* <!-- end masonry__brick --> */}

                </div>
                {/* <!-- end masonry --> */}
            </div>
            {/* <!-- end col-full --> */}
        </div>
        {/* <!-- end works-content --> */}

    </section>
    {/* <!-- end s-works --> */}

    

    {/* <!-- contact
    ================================================== --> */}
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

                <form name="contactForm" id="contactForm" method="post" action="" novalidate="novalidate">
                    <fieldset>
                        <div className="form-field">
                            <input name="contactName" type="text" id="contactName" placeholder="Your Name" value="" minlength="2" required="" aria-required="true"
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
    {/* <!-- end s-contact --> */}


    {/* <!-- footer
    ================================================== --> */}
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
                    <form id="mc-form" className="group" novalidate="true">
                        <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required=""/>
                        <input type="submit" name="subscribe" value="Subscribe"/>
                        <label for="mc-email" className="subscribe-message"></label>
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
    {/* <!-- end footer --> */}


    {/* <!-- photoswipe background
    ================================================== --> */}
    <div aria-hidden="true" className="pswp" role="dialog" tabindex="-1">

        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">

            <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
            </div>

            <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                    <div className="pswp__counter"></div>
                    <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                    <button className="pswp__button pswp__button--share" title="Share"></button>
                    <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                    <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                    <div className="pswp__preloader">
                        <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                                <div className="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div>
                </div>
                <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div className="pswp__caption">
                    <div className="pswp__caption__center"></div>
                </div>
            </div>

        </div>

    </div>

        {/* <div id="preloader">
        <div id="loader">
            <div className="line-scale-pulse-out">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>  */}

</div>

    );
  }
}

export default App;

import React, {Component} from 'react';

const ServicesSection = () => {
    return (
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
    ) 
}



export default ServicesSection;
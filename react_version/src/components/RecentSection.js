import React, { Component } from 'react';

const RecentSection = () => {
    return (

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
                                <a href="images/portfolio/gallery/pixel-speech-bubble.jpg" className="thumb-link" title="Woodcraft" data-size="1050x700">
                                    <img src="images/portfolio/palmeira@2x.jpg" srcSet="images/portfolio/palmeira@2x.jpg 1x, images/portfolio/palmeira@2x.jpg 2x"
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

    )
}


export default RecentSection ;
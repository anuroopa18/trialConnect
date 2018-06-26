import React from 'react'
import carousel1 from '../../assets/images/computer-1149148-1920-1920x1080.jpg'
import mbr2 from '../../assets/images/mbr-1577x1080.jpg'
import mbr1 from '../../assets/images/mbr-1721x1080.jpg'

const LandingCarousel = () => {
    return (
        <section className="carousel slide cid-qVWDcRFW1c" data-interval="false" id="slider1-4">
            <div className="full-screen">
                <div className="mbr-slider slide carousel" data-pause="true" data-keyboard="false"
                     data-ride="carousel"
                     data-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-app-prevent-settings=""
                            data-target="#slider1-4"
                            data-slide-to="0" className='active'>
                        </li>
                        <li data-app-prevent-settings="" data-target="#slider1-4"
                            data-slide-to="1"></li>
                        < li data-app-prevent-settings=""
                             data-target="#slider1-4" data-slide-to="2">
                        </li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item slider-fullscreen-image active" data-bg-video-slide="false"
                             style={{backgroundImage: `url(${carousel1})`}}>
                            <div className="container container-slide">
                                <div className="image_wrapper">
                                    <div className="mbr-overlay"></div>
                                    <img src={carousel1}/>
                                    <div className="carousel-caption justify-content-center">
                                        <div className="col-10 align-center"><h2
                                            className="mbr-fonts-style display-1">Saving $1MM/day</h2>
                                            <p className="lead mbr-text mbr-fonts-style display-5">85% of trials
                                                finish late due to recruitment challenges.</p>
                                            <div className="mbr-section-btn" buttons="0"><a
                                                className="btn btn-primary display-4" href="https://mobirise.com">
                                                    <span
                                                        className="mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>LEARN
                                                MORE</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-fullscreen-image" data-bg-video-slide="false"
                             style={{backgroundImage: `url(${mbr1})`}}>
                            <div className="container container-slide">
                                <div className="image_wrapper">
                                    <div className="mbr-overlay" style={{opacity: '0.4'}}></div>
                                    <img src={mbr1}/>
                                    <div className="carousel-caption justify-content-center">
                                        <div className="col-10 align-right"><h2
                                            className="mbr-fonts-style display-1">A
                                            solution that provides value to multiple stakeholders.</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slider-fullscreen-image" data-bg-video-slide="false"
                             style={{backgroundImage: `url(${mbr2})`}}>
                            <div className="container container-slide">
                                <div className="image_wrapper">
                                    <div className="mbr-overlay"></div>
                                    <img src={mbr2}/>
                                    <div className="carousel-caption justify-content-center">
                                        <div className="col-10 align-left"><h2
                                            className="mbr-fonts-style display-1">Scalable Solution</h2><p
                                            className="lead mbr-text mbr-fonts-style display-5">We provide the
                                            interface
                                            between clinical trial studies and EMR system at point of care.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a data-app-prevent-settings="" className="carousel-control carousel-control-prev" role="button"
                       data-slide="prev" href="#slider1-4"><span aria-hidden="true"
                                                                 className="mbri-left mbr-iconfont"></span><span
                        className="sr-only">Previous</span></a><a data-app-prevent-settings=""
                                                                  className="carousel-control carousel-control-next"
                                                                  role="button" data-slide="next"
                                                                  href="#slider1-4"><span
                    aria-hidden="true" className="mbri-right mbr-iconfont"></span><span
                    className="sr-only">Next</span></a>
                </div>
            </div>
        </section>
    )
};
export default LandingCarousel
import React from 'react'
import rahul from '../assets/images/dsc-8597-510x764.jpg'
import anu from '../assets/images/whatsapp-image-2018-06-25-at-1.20.58-am-510x638.jpg'
import infographic from '../assets/images/clinical-trials-infographic-zoom-1000x518.png'
import LandingCarousel from '../components/Carousel/IntroCarousel'
import logo from '../assets/images/whatsapp-image-2018-06-24-at-10.26.44-pm-184x184.jpg'
import SearchNavBar from '../components/Navbar/Search'

const LandingPage = () => {
    return (
        <div>
            <section className="menu cid-qTkzRZLJNu" once="menu" id="menu1-0">
                <nav
                    className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="menu-logo">
                        <div className="navbar-brand">
                <span className="navbar-logo">
                    <a href="/">
                         <img src={logo} alt="Logo"
                              title="Logo"/>
                    </a>
                </span>
                            <span className="navbar-caption-wrap">
                        <a className="navbar-caption text-primary display-5"
                           href="/">Trial Connect</a></span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
        

                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href='/login'>
                                    <span className="mbri-login mbr-iconfont mbr-iconfont-btn"></span>
                                    Login
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link link text-primary display-4" href='/register'>
                                    <span className="mbri-users mbr-iconfont mbr-iconfont-btn"></span>
                                    Register
                                </a>
                            </li>

                            <li className="nav-item mr-2">
                                <a className="nav-link link text-primary display-4" href="/aboutUs">
                                    <span ><i class="fas fa-user-md" style={{"fontSize":"22px"}}></i></span>
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                
                                    <span><SearchNavBar/></span>
                                   
                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <LandingCarousel/>
            <section className="mbr-section content4 cid-qVWAmvPgIb" id="content4-3">
                <div className="container">
                    <div className="media-container-row">
                        <div className="title col-12 col-md-8">
                            <h2 className="align-center pb-3 mbr-fonts-style display-2">
                                Clinical trial recruitment?<br/>Leave it to us!</h2>
                            <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                                Clinical trial recruitment is slow and difficult. It can cost upto $2.5 Billion to bring
                                a drug
                                to market.</h3>
                            <div className="mbr-section-btn align-center py-4"><a className="btn btn-primary display-4"
                                                                                  href="/aboutUs"><span
                                className="mbri-right mbr-iconfont mbr-iconfont-btn"></span>LEARN MORE</a></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cid-qVXzyeTDIb" id="image1-c">
                <figure className="mbr-figure container">
                    <div className="image-block" style={{width: '66%'}}>
                        <img src={infographic}
                             width="1400" alt="infographic" title=""/>
                    </div>
                </figure>
            </section>

            <div className="features16 cid-qVXovjKWvS pb-0" id="features16-9">
                <div className="container align-center">
                    <h2 className="pb-3 mbr-fonts-style mbr-section-title display-2">
                        OUR AWESOME TEAM
                    </h2>
                    <h3 className="pb-5 mbr-section-subtitle mbr-fonts-style mbr-light display-5">What completes us is
                        you, but
                        also them.
                    </h3>
                    <div className="row media-row">

                        <div className="team-item col-lg-3 col-md-6">
                            <div className="item-image">
                                <img src={rahul} alt="Team Member : Rahul" title=""/>
                            </div>
                            <div className="item-caption py-3">
                                <div className="item-name px-2">
                                    <p className="mbr-fonts-style display-5">
                                        Rahul Motan</p>
                                </div>
                                <div className="item-role px-2">
                                    <p>co-founder</p>
                                </div>
                                <div className="item-social pt-2">
                                    <a href="#" target="_blank">
                                        <span
                                            className="p-1 socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">
                                        <span
                                            className="p-1 socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">
                                <span
                                    className="p-1 socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">
                                        <span
                                            className="p-1 socicon-linkedin socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">

                                    </a>
                                    <a href="#" target="_blank">

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="team-item col-lg-3 col-md-6">
                            <div className="item-image">
                                <img src={anu} alt=""
                                     title=""/>
                            </div>
                            <div className="item-caption py-3">
                                <div className="item-name px-2">
                                    <p className="mbr-fonts-style display-5">
                                        Anuroopa TS</p>
                                </div>
                                <div className="item-role px-2">
                                    <p>co-founder</p>
                                </div>
                                <div className="item-social pt-2">
                                    <a href="#" target="_blank">
                                        <span
                                            className="p-1 socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">
                                        <span
                                            className="p-1 socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">
                                <span
                                    className="p-1 socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">
                                        <span
                                            className="p-1 socicon-linkedin socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                    <a href="#" target="_blank">
                                    </a>
                                    <a href="#" target="_blank">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage

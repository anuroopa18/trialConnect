import React from 'react'
import logo from '../../assets/images/whatsapp-image-2018-06-24-at-10.26.44-pm-184x184.jpg'

const Footer = () => {
    return (
        <section className="cid-qTkAaeaxX5 mbr-reveal pb-0 mb-0"  id="footer1-2">
            <div className="container mt-5">
                <div className="media-container-row content text-white">
                    <div className="col-12 col-md-3">
                        <div className="media-wrap">
                            <a href="/">
                                <img src={logo}
                                     alt="Trial Connect"
                                     title=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mbr-fonts-style display-4">
                        <h5 className="pb-2">
                            Address
                        </h5>
                        <p className="mbr-text">109, Peterborough St.<br/>Boston, MA 02215</p>
                    </div>
                    <div className="col-12 col-md-3 mbr-fonts-style display-4">
                        <h5 className="pb-2">
                            Contacts
                        </h5>
                        <p className="mbr-text">
                            Email: motan.r@husky.neu.edu<br/>Phone: +1 857 214 9793&nbsp;<br/>Fax: +1 (0) 000
                            0000
                            002
                        </p>
                    </div>
                    <div className="col-12 col-md-3 mbr-fonts-style display-4">
                        <h5 className="pb-1 m-0"><p>Attributions</p></h5>
                        <p className="mbr-text">Powered
                            by: <br/>FontAwesome<br/>Mobirise<br/>react.js<br/>redux<br/>springboot<br/>AWS<br/><br/>
                        </p>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="media-container-row">
                        <div className="col-sm-12">
                            <hr/>
                        </div>
                    </div>
                    <div className="media-container-row mbr-white">
                        <div className="col-sm-6 copyright">
                            <p className="mbr-text mbr-fonts-style display-7">
                                © Copyright 2018 TrialConnect - All Rights Reserved
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="social-list align-right">
                                <div className="soc-item">
                                    <a href="/">
                                            <span
                                                className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="/">
                                            <span
                                                className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="/">
                                            <span
                                                className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="/">
                                            <span
                                                className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="/">
                                    <span
                                        className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer
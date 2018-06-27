import React from 'react'
import face from '../assets/images/face5.jpg'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import NavbarContainer from '../components/Navbar/Navbar'



const AboutUsPage = () => {
    let percentage = 53;
    let percentage1 = 70;
    let percentage2 = 64;
    let percentage3 = 56;
    
    return (
        <div>
            <div className="pb-lg-1">
                    <NavbarContainer  showHome={false}  showProfile={false} showAboutUs={false} showLogout={false} />
                </div>
            <section className="progress-bars3 cid-qW1XIq5PTR" id="progress-bars3-b">
              
              
                <div className=" container">
                    <h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-2">Summary</h2>

                    <h3 className="mbr-section-subtitle mbr-fonts-style display-5">
                        Oncology drugs had a 2x higher rate of first cycle approval than Psychiatric drugs, which had the lowest percent of first-cycle review approvals. Oncology drugs were also approved the fastest of all 14 disease areas.</h3>

                    <div className="media-container-row pt-5 mt-2">
                        <div className="card p-3 align-center">
                            <div className="wrap">
                                <CircularProgressbar
                                    percentage={percentage}
                                    text={`${percentage}%`}
                                    background
                                    backgroundPadding={6}
                                    styles={{
                                        background: {
                                            fill: '#22a7cc',
                                        },
                                        text: {
                                            fill: '#fff',
                                        },
                                        path: {
                                            stroke: '#fff',
                                        },
                                        trail: { stroke: 'transparent' },
                                    }}
                                />

                            </div>
                            <div className="mbr-crt-title pt-3">
                                <h4 className="card-title py-2 mbr-fonts-style display-5">
                                    Breast Cancer</h4>
                            </div>
                        </div>

                        <div className="card p-3 align-center">
                            <div className="wrap">
                            <CircularProgressbar
                                    percentage={percentage1}
                                    text={`${percentage1}%`}
                                    background
                                    backgroundPadding={6}
                                    styles={{
                                        background: {
                                            fill: '#22a7cc',
                                        },
                                        text: {
                                            fill: '#fff',
                                        },
                                        path: {
                                            stroke: '#fff',
                                        },
                                        trail: { stroke: 'transparent' },
                                    }}
                                />
                            </div>
                            <div className="mbr-crt-title pt-3">
                                <h4 className="card-title py-2 mbr-fonts-style display-5">
                                    Hematologic Cancer</h4>
                            </div>
                        </div>

                        <div className="card p-3 align-center">
                            <div className="wrap">
                            <CircularProgressbar
                                    percentage={percentage2}
                                    text={`${percentage2}%`}
                                    background
                                    backgroundPadding={6}
                                    styles={{
                                        background: {
                                            fill: '#22a7cc',
                                        },
                                        text: {
                                            fill: '#fff',
                                        },
                                        path: {
                                            stroke: '#fff',
                                        },
                                        trail: { stroke: 'transparent' },
                                    }}
                                />
                            </div>
                            <div className="mbr-crt-title pt-3">
                                <h4 className="card-title py-2 mbr-fonts-style display-5">
                                    Ovarian Cancer</h4>
                            </div>
                        </div>

                        <div className="card p-3 align-center">
                            <div className="wrap">
                            <CircularProgressbar
                                    percentage={percentage3}
                                    text={`${percentage3}%`}
                                    background
                                    backgroundPadding={6}
                                    styles={{
                                        background: {
                                            fill: '#22a7cc',
                                        },
                                        text: {
                                            fill: '#fff',
                                        },
                                        path: {
                                            stroke: '#fff',
                                        },
                                        trail: { stroke: 'transparent' },
                                    }}
                                />
                            </div>
                            <div className="mbr-crt-title pt-3">
                                <h4 className="card-title py-2 mbr-fonts-style display-5">
                                    Lung Cancer</h4>
                            </div>
                        </div>




                   
                    </div>
                </div></section>

            <section class="engine"></section><section class="toggle1 cid-qW20HB8NGL" id="toggle1-g">




                <div className="container">
                    <div className="media-container-row">
                        <div className="col-12 col-md-8">
                            <div className="section-head text-center space30">
                                <h2 className="mbr-section-title pb-5 mbr-fonts-style display-2">Frequently Asked Questions</h2>
                            </div>
                            <div className="clearfix"></div>
                            <div id="bootstrap-toggle" className="toggle-panel accordionStyles tab-content">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse1_13" aria-expanded="false" aria-controls="collapse1">
                                            <h4 className="mbr-fonts-style display-5">
                                                <span className="sign mbr-iconfont mbri-arrow-down inactive"></span> What are clinical trials?</h4>
                                        </a>
                                    </div>
                                    <div id="collapse1_13" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body p-4">
                                            <p className="mbr-fonts-style panel-text display-7">Clinical trials are part of clinical research and at the heart of all medical advances. Clinical trials look at new ways to prevent, detect, or treat disease.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo">
                                        <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse2_13" aria-expanded="false" aria-controls="collapse2">
                                            <h4 className="mbr-fonts-style display-5">
                                                <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>What are the goals of clinical trials?</h4>
                                        </a>

                                    </div>
                                    <div id="collapse2_13" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body p-4">
                                            <p className="mbr-fonts-style panel-text display-7">
                                                The goal of clinical trials is to determine if these treatment, prevention, and behavior approaches are safe and effective.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree">
                                        <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse3_13" aria-expanded="false" aria-controls="collapse3">
                                            <h4 className="mbr-fonts-style display-5">
                                                <span className="sign mbr-iconfont mbri-arrow-down inactive"></span> Why do people participate?</h4>
                                        </a>
                                    </div>
                                    <div id="collapse3_13" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body p-4">
                                            <p className="mbr-fonts-style panel-text display-7">Healthy volunteers say they take part to help others and to contribute to moving science forward. People with an illness or disease also take part to help others, but also to possibly receive the newest treatment and to have added (or extra) care and attention from the clinical trial staff. Clinical trials offer hope for many people and a chance to help researchers find better treatments for others in the future</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree">
                                        <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse4_13" aria-expanded="false" aria-controls="collapse4">
                                            <h4 className="mbr-fonts-style display-5">
                                                <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;How does clinical trial make a difference to me?</h4>
                                        </a>
                                    </div>
                                    <div id="collapse4_13" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body p-4">
                                            <p className="mbr-fonts-style panel-text display-7">
                                                Only through clinical research can we gain insights and answers
                                                about the safety and effectiveness of treatments and procedures.
                                                Groundbreaking scientific advances in the present and the past were possible
                                                only because of participation of volunteers, both healthy and those with an illness,
                                                in clinical research. Clinical research requires complex and rigorous testing in
                                                collaboration with communities that are affected by the disease. As research opens new
                                                doors to finding ways to diagnose, prevent, treat, or cure disease and disability,
                                       clinical trial participation is essential to help us find the answers.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials3 cid-qW1ZWuK1O9" id="testimonials3-e">
                <div className="container">
                    <div className="media-container-row">
                        <div className="media-content px-3 align-self-center mbr-white py-2">
                            <p className="mbr-text testimonial-text mbr-fonts-style display-7">
                                It's a great platform to find the ongoing trials and be a part of such a great cause.&nbsp;I had a sister who died of breast cancer, so I believe it is very important for healthy people to help. We have a role to play in helping find new,
                   more effective treatments that can save lives. What could be better than that?</p>
                            <p className="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7">
                                Julie C.
                </p>
                            <p className="mbr-author-desc mbr-fonts-style display-7">Healthy volunteer</p>
                        </div>

                        <div className="mbr-figure pl-lg-5" style={{ "width": "130%" }}>
                            <img src={face} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mbr-section info1 cid-qW2dCMcGQe" id="info1-h">
                <div className="container">
                    <div className="row justify-content-center content-row">
                        <div className="media-container-column title col-12 col-lg-7 col-md-6">
                            <h3 className="mbr-section-subtitle align-left mbr-light pb-3 mbr-fonts-style display-5"><strong>'What's in it for me?'</strong>&nbsp;People from every age and walk of life can make a difference by volunteering and helping us to bring the miracles of medicine to market sooner.</h3>

                        </div>
                        <div className="media-container-column col-12 col-lg-3 col-md-4">
                            <div className="mbr-section-btn align-right py-4"><a className="btn btn-primary display-4" href="/register">JOIN US</a></div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
};

export default AboutUsPage
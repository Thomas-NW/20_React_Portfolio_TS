import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {
    return (

        <main id="main">

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Executive of global operational and strategic leadership experience in technical service and
                            manufacturing industries, incl. P&L, C-level management, sales, engineering, manufacturing,
                            compliance. Strong focus on making our clients businesses a success, at all levels. Geographical
                            experience: North America, China, India, Europe
                        </p>
                        <p>Learning and advancing in developing software that integrates many years of my experience, I decided to learn and become a fullstack
                            software developer. To me it was a logical step.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src="assets/img/Thomas_Picture.jpg" className="img-fluid" alt="image of Thomas Schmidt" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>International Business Development, Operations & Product Manager &amp; Full Stack Software Developer</h3>
                            <p className="font-italic">
                                This section will be filled in with more interesting information!!!!!!!!!!!!!!!!!
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 30 Oct 1965</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> <a href="https://www.eceglobal.com" target="_blank">www.eceglobal.com</a></li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> <a href="tel:+1-773-551-7786">+1-773-551-7786</a></li>
                                        <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : Itasca, IL-USA</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 55</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Dipl.-Ing., IWE, EWE, CWI</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> <a href="mailto:tschmidt@eceglobal.com">tschmidt@eceglobal.com</a></li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                President &amp; Founder of ECE Global.
                                More text will be added in the section!!!!!!!!!!!!!!!!!!

                            </p>
                            <p>
                                Full Stack Software Development became of interest while developing a software with external professionals.
                                I came to realize that software developers like to venture out into many directions to develop a single application.
                                More text will be added in the section!!!!!!!!!!!!!!!!!!
                            </p>

                        </div>
                    </div>

                </div>
            </section>

        </main>

    );
}

export default About;
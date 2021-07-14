import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

// import QwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';



import Projects from "./pages/Skills";
// import About from "./pages/About";

// import Discover from "./pages/Discover";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>

      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

      <header id="header" className="d-flex flex-column justify-content-center">

        <nav className="nav-menu">
          <ul>
            <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#facts"><i className="bx bx-adjust"></i> <span>Facts</span></a></li>
            <li><a href="#skills"><i className="bx bx-abacus"></i> <span>Skills</span></a></li>
            <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#services"><i className="bx bx-server"></i> <span>Goals</span></a></li>
            <li><a href="#testimonials"><i className="bx bx-arrow-to-right"></i> <span>Testimonials</span></a></li>
            <li><a href="#contact"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>

      </header>

{/* First, the entire code was generated in one App.js file. Then, I broke the page up in individual pages. */}
{/* Puposely, I kept the initial code in place, just for reference puposes and continous learning */}
{/* If I would create a 100% react page, I would have deleted all unnecessary code! */}

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">

          <Router>
            <div>
              <Route exact path="/" component={Home} />
            </div>
          </Router>

          {/* <h1>Thomas Schmidt, Dipl.-Ing.</h1>
          <p>I'm <span className="typed" data-typed-items="an Entrepreneur, an Advisor, a Consultant, Business Committed, a Problem Solver  "></span></p> */}
          {/* <div className="social-links"> */}
          {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
          {/* <a href="https://www.linkedin.com/in/thomasschmidteceglobal/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/Thomas-NW?tab=repositories" target="_blank"><i className="bx bxl-github"></i></a>
          </div> */}

        </div>
      </section>

      <main id="main">

{/* ABOUT SECTION */}

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

          <Router>
            <div>
              <Route exact path="/" component={About} />
            </div>
          </Router>

            {/* <div className="section-title">
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
            </div> */}

          </div>
        </section>


{/* FACTS SECTION */}

        <section id="facts" className="facts">
          <div className="container" data-aos="fade-up">


          <Router>
            <div>
              <Route exact path="/" component={Facts} />
            </div>
          </Router>



            {/* <div className="section-title">
              <h2>Facts</h2>
              <p>ECE Global is in business to empower our clientele to success.
                This dashboard represents highlights about software development projects that were tackled during the Bootcamp!  </p>
            </div>

            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="icofont-simple-smile"></i>
                  <span data-toggle="counter-up">1</span>
                  <p>Software Development</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="icofont-document-folder"></i>
                  <span data-toggle="counter-up">16</span>
                  <p>Bootcamp Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="icofont-live-support"></i>
                  <span data-toggle="counter-up">553</span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="icofont-users-alt-5"></i>
                  <span data-toggle="counter-up">12</span>
                  <p>Support Workers</p>
                </div>
              </div>

            </div> */}

          </div>
        </section>


{/* SKILLS Section */}


        <section id="skills" className="skills section-bg">
          <div className="container" data-aos="fade-up">

          <Router>
            <div>
              <Route exact path="/" component={Skills} />
            </div>
          </Router>


            {/* <div className="section-title">
              <h2>Skills</h2>
              <p>The Bootcamp helped me to acquire skills in the following areas of software development:</p>
            </div>

            <div className="row skills-content">

              <div className="col-lg-6">

                <div className="progress">
                  <span className="skill">HTML <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">CSS <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">JavaScript <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6">

                <div className="progress">
                  <span className="skill">node.js <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">jQuery <i className="val">50%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">NoSQL <i className="val">40%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

            </div> */}

          </div>
        </section>


{/* RESUME Section */}

        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">

          <Router>
            <div>
              <Route exact path="/" component={Resume} />
            </div>
          </Router>

            {/* <div className="section-title">
              <h2>Software Projects Resume</h2>
              <p>
                The Bootcamp helped me to acquire skills in the following areas of software development:
                The following is a list of projects that were completed during Bootcamp.
              </p>
              <p>
                It is a mix of projects that strongly emphasized front-end skills, whereas others focused on the backend.
                At this point, I would state that I understand software development better, but realize that apprentice years are not master years. I feel like I am ready to review and update code, have good conversations about it, and provide good contributions.
              </p>
              <p>
                What I understand much better, is that software development is rather agile in strategy planning, execution, and maintenance. Using the wrong strategy at the beginning of a project will create significant delays and cost at the end.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>BOOTCAMP</h4>
                  <p><em>
                    It is no secret that the course is intense and challenging along the way.
                    I believe that the strongest credit each student should receive is for the persistence in working through the course and learning how to learn all over again. Working in teams, while balancing different skill sets and expectations is truly a lesson learned. Factually, some students are all about themselves, while striving to create a new career and new life.
                    Other do the same but realize that working in a team and being part of a huge network of leveraging success is a priority.
                    Learning new skills in software development and understanding the scope of options was truly a huge takeaway.
                    I came to realize that the world is your Oyster, and everything goes. Whatever the software developer’s strong suite is, will be the final app. To me, this is something that a non-software-developer does not know, when talking to developing firms.
                    Google is the best friend of a software developer together with other networks.
                    I am striving to learn and acquire the skills needed to code software and it is exciting.
                    New ideas and thoughts passing through my brain, while trying to figure out what should be done next.
                  </em></p>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Full Stack Software Developer</h4>
                  <h5>2021-2021</h5>
                  <p><em>Northverstern Univerity Bootcamp (6 month)</em></p>
                  <p>HTML, CSS, Javascript, Node.js, jQuery</p>
                </div>
                <div className="resume-item">
                  <h4>Dipl.-Ing. Mechanical Engineering</h4>
                  <h5>1988 - 1992</h5>
                  <p><em>University of Bochum, Abtl. Gelsenkirchen-Buer</em></p>
                  <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Software Development Experience</h3>
                <div className="resume-item">
                  <h4>PASSWORD GENERATOR</h4>
                  <p><em>The task was to create an application that enables employees to generate random passwords based on criteria that they’ve selected.
                    This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write.
                    It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.  </em></p>
                  <ul>
                    <li><a href=" https://thomas-nw.github.io/PasswordGen_TS/" target="_blank">Click and Play: <img src="assets/img/Password.png" height="30px" alt="Code Quiz" /></a></li>
                    <li><a href="https://github.com/Thomas-NW/PasswordGen_TS.git" target="_blank">github: Password Generator</a></li>
                  </ul>

                  <h4>CODE QUIZ</h4>
                  <p><em>The start was to include an array with questions
                    Next was to assign an array of answers to the questions.
                    Next was to include event listener for the selection of an answer
                    Next was to evaluate if the answer is correct
                    Next was to recod the wins and losses in the local storage
                    Local storage was utilized to capture the high score  </em></p>
                  <ul>
                    <li><a href=" https://thomas-nw.github.io/05_Code_Quiz/" target="_blank">Click and Play: <img src="assets/img/Quiz.png" height="30px" alt="Code Quiz" /></a></li>
                    <li><a href="https://github.com/Thomas-NW/05_Code_Quiz.git" target="_blank">github: Code Quiz</a></li>
                  </ul>

                  <h4>WORKDAY SCHEDULER</h4>
                  <p><em>Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.
                    This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. </em></p>
                  <ul>
                    <li><a href=" https://thomas-nw.github.io/06_Workday_Scheduler/" target="_blank">Click and Play: <img src="assets/img/Workday_Scheduler.PNG" height="30px" alt="Code Quiz" /></a></li>
                    <li><a href="https://github.com/Thomas-NW/06_Workday_Scheduler.git" target="_blank">github: Workday Scheduler</a></li>
                  </ul>

                  <h4>TEAM PROFILE GENERATOR</h4>
                  <p><em>Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
                    Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test. </em></p>
                  <ul>
                    <li><a href="https://thomas-nw.github.io/10_Team_Profile_Generator_TS/" target="_blank">Click and Play: <img src="assets/img/Team_Generator_Image.PNG" height="30px" alt="Code Quiz" /></a></li>
                    <li><a href="https://github.com/Thomas-NW/10_Team_Profile_Generator_TS.git" target="_blank">github: Team Generator</a></li>
                  </ul>

                  <h4>TECH BLOCK</h4>
                  <p><em>The task was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. </em></p>
                  <ul>
                    <li>npm install to download all the dependencies in node. Deploy files to webserver such as Heroku for live app usage.
                      HTML 5.0, CSS, JavaScript, json, Bootstrap, npm package, node.js</li>
                    <li><a href="https://thomas-nw.github.io/14_Tech_Block_TS/" target="_blank">Click and Play: <img src="assets/img/Tech_Blog_Comment.PNG" height="30px" alt="Code Quiz" /></a></li>
                    <li><a href="https://github.com/Thomas-NW/14_Tech_Block_TS.git" target="_blank">github: Tech Block Generator</a></li>
                  </ul>

                </div>
              </div>

            </div> */}
          </div>
        </section>


{/* PORTFOLIO SECTION */}

        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">

          <Router>
            <div>
              <Route exact path="/" component={Portfolio} />
            </div>
          </Router>

{/* 
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>please review the work that was completed so far....</p>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/techblog/Tech_Blog_Comment.PNG" className="img-fluid" alt="Tech Blog Application" />
                  <div className="portfolio-info">
                    <h4>App Tech Blog</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="assets/img/techblog/Tech_Blog_Comment.PNG" data-gall="techblogGallery" className="venobox" title="Tech Blog"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="techblogGallery" data-vbtype="iframe" className="venobox" title="Tech Blog Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/findanimal/Screenshot.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Find My Pet</h4>
                    <p>Web Browser Application</p>
                    <div className="portfolio-links">
                      <a href="assets/img/findanimal/Screenshot.png" data-gall="findanimal" className="venobox" title="Find My Pet"><i className="bx bx-plus"></i></a>
                      <a href="findanimal-details.html" data-gall="findanimal" data-vbtype="iframe" className="venobox" title="Find My Pet"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/ecom/ecomgettag.PNG" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>E-Commerce Backend Developement</h4>
                    <p>Build the back end for an e-commerce site</p>
                    <div className="portfolio-links">
                      <a href="assets/img/ecom/ecomgettag.PNG" data-gall="ecomGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="ecommerce-details.html" data-gall="ecomGallery" data-vbtype="iframe" className="venobox" title="E-Commerce Backend"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>



            </div> */}
          </div>
        </section>


{/* GOALS SECTION */}


        <section id="services" className="services">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>GOALS</h2>
              <p>My goals are to understand and work on software development projects that I am currently engaged with.
                My engagement is limited to the ideas and project management of the application.
                I learned that software developers are not necessarily project managers. They are creative within the range of knowledge and capabilities; and so am I.
                Leading them to the development of an epic software requires the knowledge of which code shall be applied and when. It is a long road of learning.
              </p>
            </div>
          </div>

        </section>


{/* TESTIMONIALS SECTION */}

        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">

          <Router>
            <div>
              <Route exact path="/" component={Testimonials} />
            </div>
          </Router>

            {/* <div className="section-title">
              <h2>Testimonials</h2>
            </div>

            <div className="owl-carousel testimonials-carousel" data-aos="zoom-in" data-aos-delay="100">

              <div className="testimonial-item">
                <img src="assets/img/testimonials/Nathan_Gopen.PNG" className="testimonial-img" alt="" />
                <h3>Nathan Ruibin</h3>
                <h4>Full Stack Developer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  I worked with Thomas for the past two years. His vision and drive are exceptional. I am glad that he is taking the classs, so that we are can start talking more technical.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>

              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Thomas is exceptional with his thoughts and drive. I am pleased that I could work with him..
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
          </div>

                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Karin Mueller-Grohtusman</h3>
                    <h4>Managing Director</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      The World is your Oyster! This is what Thomas states all the time. He truly is thinking out of the box, and always thinks about his customers first.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
          </div>

                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Paul Turner</h3>
                    <h4>Stress Engineer and Product Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Project are only as good as the team you are working with. Being a team player and having an understanding about your team mates is one item that Thomas and I agreed with, all the time.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>Henry Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Inspiration and support are the two attributes I assign to Thomas and my relationship. These are keystones in any relationship and projects.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>

                </div> */}

              </div>
    </section>

{/* CONTACT SECTION */}

            <section id="contact" className="contact">
              <div className="container" data-aos="fade-up">

              <Router>
            <div>
              <Route exact path="/" component={Contact} />
            </div>
          </Router>


                {/* <div className="section-title">
                  <h2>Contact</h2>
                </div>

                <div className="row mt-1">

                  <div className="col-lg-4">
                    <div className="info">
                      <div className="address">
                        <i className="icofont-google-map"></i>
                        <h4>Location:</h4>
                        <p>127 N. Walnut St., Itasca, IL 60143 - USA</p>
                      </div>

                      <div className="email">
                        <i className="icofont-envelope"></i>
                        <h4>Email:</h4>
                        <p>tschmidt@eceglobal.com</p>
                      </div>

                      <div className="phone">
                        <i className="icofont-phone"></i>
                        <h4>Call:</h4>
                        <p>+1 1-773-551-7786</p>
                      </div>

                    </div>

                  </div>

                  <div className="col-lg-8 mt-5 mt-lg-0">

                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                      <div className="form-row">
                        <div className="col-md-6 form-group">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                          <div className="validate"></div>
                        </div>
                        <div className="col-md-6 form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                          <div className="validate"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div className="validate"></div>
                      </div>
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>

                  </div>

                </div> */}

              </div>
            </section>
   


    </main>
    <footer id="footer">
    <div className="container">
      <h3>Thomas Schmidt</h3>
      <p>This page is copy right (c) protected. Please contact us if you would like to use it as a template. Thank you!</p>
      <div className="social-links">
       
        <a href="https://www.linkedin.com/in/thomasschmidteceglobal/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
       the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></a>
  <div id="preloader"></div>

    </div>

      );
}




export default App;

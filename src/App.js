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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

      {/* First, the entire code was generated in one App.js file. Then, I broke the page up in individual pages. */}
      {/* Puposely, I kept the initial code in place, just for reference puposes and continous learning */}
      {/* If I would create a 100% react page, I would have deleted all unnecessary code! */}


function App() {
  return (
    <div>

      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

      <header id="header" className="d-flex flex-column justify-content-center">

        <Router>
          <div>
            <Route exact path="/" component={Navbar} />
          </div>
        </Router>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">

          <Router>
            <div>
              <Route exact path="/" component={Home} />
            </div>
          </Router>
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

          </div>
        </section>



      </main>
      <footer id="footer">
        <Router>
          <div>
            <Route exact path="/" component={Footer} />
          </div>
        </Router>

      </footer>

      <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></a>
      <div id="preloader"></div>

    </div>

  );
}




export default App;

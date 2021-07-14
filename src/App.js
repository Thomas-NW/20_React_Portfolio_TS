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
        <Router>
          <div>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Facts} />
            <Route exact path="/" component={Skills} />
            <Route exact path="/" component={Resume} />
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/" component={Testimonials} />
            <Route exact path="/" component={Contact} />
            <Route exact path="/" component={Footer} />
          </div>
        </Router>


      <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></a>
      <div id="preloader"></div>

    </div>

  );
}


export default App;

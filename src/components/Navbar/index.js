import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


// const styles = {
//   navbarStyle: {
//     background: "blue",
//     justifyContent: "flex-end",
//   }
// };

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
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
  );
}

export default Navbar;

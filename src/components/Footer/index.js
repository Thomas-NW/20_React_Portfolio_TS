import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
     
     <div className="container">
          <h3>Thank you for reviewing my Profile!</h3>
          <p>This page is copy right (c) protected and the property of Thomas Schmidt. Please contact us if you would like to use it as a template. Thank you!</p>
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
  );
}

export default Footer;

import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
  return (
    
    <div >
      <h1>Thomas Schmidt, Dipl.-Ing.</h1>
      <p>I'm <span> an Entrepreneur, an Advisor, a Consultant, Business Committed, a Problem Solver</span></p>
      <div className="social-links">
        {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> --> */}
        <a href="https://www.linkedin.com/in/thomasschmidteceglobal/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        <a href="https://github.com/Thomas-NW?tab=repositories" target="_blank"><i className="bx bxl-github"></i></a>
      </div>
    </div>
  
  );
}

export default Home;

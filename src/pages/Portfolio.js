import React, { Component } from "react";
// import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

function Portfolio() {
  return (
    
    <section>
    <div >

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

            </div>


    </div>
  </section>
  
  );
}

export default Portfolio;
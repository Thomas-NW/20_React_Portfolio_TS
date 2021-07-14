import React from "react";


function Facts() {
  return (

    <main id="main">
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
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

          </div>

        </div>
      </section>
    </main>

  );
}

export default Facts;
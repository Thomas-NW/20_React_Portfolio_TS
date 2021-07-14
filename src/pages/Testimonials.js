import React from "react";


function Testimonials() {
  return (

    <main id="main">

      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
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

          </div>

        </div>
      </section>

    </main>

  );
}

export default Testimonials;
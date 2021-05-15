import React, { Component } from "react";


export default class About extends Component {
  render() {
    return (
      <div>
        {/* <body
          data-spy="scroll"
          data-target=".site-navbar-target"
          data-offset="300"
        > */}
          <div className="site-wrap" id="home-section">
            <div className="site-mobile-menu site-navbar-target">
              <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                  <span className="icon-close2 js-menu-toggle"></span>
                </div>
              </div>
              <div className="site-mobile-menu-body"></div>
            </div>
          </div>
          <div className="ftco-blocks-cover-1">
            <div
              className="ftco-cover-1 overlay innerpage"
              style={{ backgroundImage: "url(images/hero_2.jpg"}}
            >
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h1>About Us</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
                  <img src="images/hero_2.jpg" 
                       alt="Image" 
                       className="img-fluid" />
                </div>
                <div className="col-lg-4 mr-auto">
                  <h2>Car Company</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit suscipit, repudiandae similique accusantium eius nulla
                    quam laudantium sequi.
                  </p>
                  <p>
                    Debitis voluptates corporis saepe molestias tenetur ab quae,
                    quo earum commodi, laborum dolore, fuga aliquid delectus cum
                    ipsa?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-light">
            <div className="container">
              <div className="row justify-content-center text-center mb-5 section-2-title">
                <div className="col-md-6">
                  <span className="text-primary">Our Team</span>
                  <h2 className="mb-4">Meet Our Team</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis provident eius ratione velit, voluptas laborum
                    nemo quas ad necessitatibus placeat?
                  </p>
                </div>
              </div>
              <div className="row align-items-stretch">
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="post-entry-1 h-100 person-1">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />

                    <div className="post-entry-1-contents">
                      <span className="meta">Founder</span>
                      <h2>James Doe</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, sapiente.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="post-entry-1 h-100 person-1">
                    <img
                      src="images/person_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />

                    <div className="post-entry-1-contents">
                      <span className="meta">Founder</span>
                      <h2>James Doe</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, sapiente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="post-entry-1 h-100 person-1">
                    <img
                      src="images/person_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />

                    <div className="post-entry-1-contents">
                      <span className="meta">Founder</span>
                      <h2>James Doe</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, sapiente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="post-entry-1 h-100 person-1">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid"
                    />

                    <div className="post-entry-1-contents">
                      <span className="meta">Founder</span>
                      <h2>James Doe</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, sapiente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="post-entry-1 h-100 person-1">
                    <img
                      src="images/person_5.jpg"
                      alt="Image"
                      className="img-fluid"
                    />

                    <div className="post-entry-1-contents">
                      <span className="meta">Founder</span>
                      <h2>James Doe</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, sapiente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="post-entry-1 h-100 person-1">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />

                    <div className="post-entry-1-contents">
                      <span className="meta">Founder</span>
                      <h2>James Doe</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa, sapiente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <img src="images/hero_1.jpg" 
                        alt="Image"
                       className="img-fluid" />
                </div>
                <div className="col-lg-4 ml-auto">
                  <h2>Our History</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit suscipit, repudiandae similique accusantium eius nulla
                    quam laudantium sequi.
                  </p>
                  <p>
                    Debitis voluptates corporis saepe molestias tenetur ab quae,
                    quo earum commodi, laborum dolore, fuga aliquid delectus cum
                    ipsa?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container site-section mb-5">
            <div className="row justify-content-center text-center">
              <div className="col-7 text-center mb-5">
                <h2>How it works</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  assumenda, dolorum necessitatibus eius earum voluptates sed!
                </p>
              </div>
            </div>
            <div className="how-it-works d-flex">
              <div className="step">
                <span className="number">
                  <span>01</span>
                </span>
                <span className="caption">Time &amp; Place</span>
              </div>
              <div className="step">
                <span className="number">
                  <span>02</span>
                </span>
                <span className="caption">Car</span>
              </div>
              <div className="step">
                <span className="number">
                  <span>03</span>
                </span>
                <span className="caption">Details</span>
              </div>
              <div className="step">
                <span className="number">
                  <span>04</span>
                </span>
                <span className="caption">Checkout</span>
              </div>
              <div className="step">
                <span className="number">
                  <span>05</span>
                </span>
                <span className="caption">Done</span>
              </div>
            </div>
          </div>
        {/* </body> */}
      </div>
    );
  }
}

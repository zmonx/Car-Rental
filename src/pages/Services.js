import React, { Component } from "react";

export default class Services extends Component {
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
            <div className="ftco-blocks-cover-1">
              <div
                className="ftco-cover-1 overlay innerpage"
                style={{ backgroundImage:"url(images/hero_2.jpg)"}}
              >
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 text-center">
                      <h1>Our Services</h1>
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
                  <div className="col-lg-4 mb-4 mb-lg-5">
                    <div className="service-1 dark">
                      <span className="service-1-icon">
                        <span className="flaticon-car"></span>
                      </span>
                      <div className="service-1-contents">
                        <h3>Car Key</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati, laboriosam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-5">
                    <div className="service-1 dark">
                      <span className="service-1-icon">
                        <span className="flaticon-valet-1"></span>
                      </span>
                      <div className="service-1-contents">
                        <h3>Car Key</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati, laboriosam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-5">
                    <div className="service-1 dark">
                      <span className="service-1-icon">
                        <span className="flaticon-key"></span>
                      </span>
                      <div className="service-1-contents">
                        <h3>Car Key</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati, laboriosam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-5">
                    <div className="service-1 dark">
                      <span className="service-1-icon">
                        <span className="flaticon-car-1"></span>
                      </span>
                      <div className="service-1-contents">
                        <h3>Repair</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati, laboriosam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-5">
                    <div className="service-1 dark">
                      <span className="service-1-icon">
                        <span className="flaticon-traffic"></span>
                      </span>
                      <div className="service-1-contents">
                        <h3>Car Accessories</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati, laboriosam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-lg-5">
                    <div className="service-1 dark">
                      <span className="service-1-icon">
                        <span className="flaticon-valet"></span>
                      </span>
                      <div className="service-1-contents">
                        <h3>Own a Car</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati, laboriosam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container site-section mb-5">
              <div className="row justify-content-center text-center">
                <div className="col-7 text-center mb-5">
                  <h2>How it works</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo assumenda, dolorum necessitatibus eius earum voluptates
                    sed!
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
          </div>
        {/* </body> */}
      </div>
    );
  }
}

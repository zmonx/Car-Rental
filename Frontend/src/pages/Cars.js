import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cars extends Component {
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
                      <h1>Our For Rent Cars</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="site-section bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="item-1">
                      <Link to="/#">
                        <img
                          src="images/img_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </Link>
                      <div className="item-1-contents">
                        <div className="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div className="rating">
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                          </div>
                          <div className="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul className="specs">
                          <li>
                            <span>Doors</span>
                            <span className="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span className="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span className="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span className="spec">18 years</span>
                          </li>
                        </ul>
                        <div className="d-flex action">
                          <Link to="/contact" className="btn btn-primary">
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="item-1">
                      <Link to="#">
                        <img
                          src="images/img_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </Link>
                      <div className="item-1-contents">
                        <div className="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div className="rating">
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                          </div>
                          <div className="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul className="specs">
                          <li>
                            <span>Doors</span>
                            <span className="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span className="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span className="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span className="spec">18 years</span>
                          </li>
                        </ul>
                        <div className="d-flex action">
                          <Link to="/contact" className="btn btn-primary">
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="item-1">
                      <Link to="/#">
                        <img
                          src="images/img_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </Link>
                      <div className="item-1-contents">
                        <div className="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div className="rating">
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                          </div>
                          <div className="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul className="specs">
                          <li>
                            <span>Doors</span>
                            <span className="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span className="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span className="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span className="spec">18 years</span>
                          </li>
                        </ul>
                        <div className="d-flex action">
                          <Link to="/contact" className="btn btn-primary">
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="item-1">
                      <Link to="/#">
                        <img
                          src="images/img_1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </Link>
                      <div className="item-1-contents">
                        <div className="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div className="rating">
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                          </div>
                          <div className="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul className="specs">
                          <li>
                            <span>Doors</span>
                            <span className="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span className="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span className="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span className="spec">18 years</span>
                          </li>
                        </ul>
                        <div className="d-flex action">
                          <Link to="/contact" className="btn btn-primary">
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="item-1">
                      <Link to="/#">
                        <img
                          src="images/img_2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </Link>
                      <div className="item-1-contents">
                        <div className="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div className="rating">
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                          </div>
                          <div className="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul className="specs">
                          <li>
                            <span>Doors</span>
                            <span className="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span className="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span className="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span className="spec">18 years</span>
                          </li>
                        </ul>
                        <div className="d-flex action">
                          <Link to="/contact" className="btn btn-primary">
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="item-1">
                      <Link to="#">
                        <img
                          src="images/img_3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </Link>
                      <div className="item-1-contents">
                        <div className="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div className="rating">
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                            <span className="icon-star text-warning"></span>
                          </div>
                          <div className="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul className="specs">
                          <li>
                            <span>Doors</span>
                            <span className="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span className="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span className="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span className="spec">18 years</span>
                          </li>
                        </ul>
                        <div className="d-flex action">
                          <Link to="/contact" className="btn btn-primary">
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <span className="p-3">1</span>
                    <Link to="/#" className="p-3">
                      2
                    </Link>
                    <Link to="/#" className="p-3">
                      3
                    </Link>
                    <Link to="/#" className="p-3">
                      4
                    </Link>
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

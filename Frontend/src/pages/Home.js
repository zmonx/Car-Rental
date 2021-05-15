import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Home extends Component {
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
              className="ftco-cover-1 overlay"
              style={{ backgroundImage: "url(images/hero_1.jpg)"}}
              // background-image: url('images/hero_1.jpg')
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="feature-car-rent-box-1">
                      <h3>Range Rover S7</h3>
                      <ul className="list-unstyled">
                        <li>
                          <span>Doors</span>
                          <span className="spec">4</span>
                        </li>
                        <li>
                          <span>Seats</span>
                          <span className="spec">6</span>
                        </li>
                        <li>
                          <span>Lugage</span>
                          <span className="spec">2 Suitcase/2 Bags</span>
                        </li>
                        <li>
                          <span>Transmission</span>
                          <span className="spec">Automatic</span>
                        </li>
                        <li>
                          <span>Minium age</span>
                          <span className="spec">Automatic</span>
                        </li>
                      </ul>
                      <div className="d-flex align-items-center bg-light p-3">
                        <span>$150/day</span>
                        <Link to="/contact" className="ml-auto btn btn-primary">
                          Rent Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section pt-0 pb-0 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <form className="trip-form">
                    <div className="row align-items-center mb-4">
                      <div className="col-md-6">
                        <h3 className="m-0">Begin your trip here</h3>
                      </div>
                      <div className="col-md-6 text-md-right">
                        <span className="text-primary">32</span>{" "}
                        <span>cars available</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-3">
                        <label for="cf-1">Where you from</label>
                        <input
                          type="text"
                          id="cf-1"
                          placeholder="Your pickup address"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label for="cf-2">Where you go</label>
                        <input
                          type="text"
                          id="cf-2"
                          placeholder="Your drop-off address"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label for="cf-3">Journey date</label>
                        <input
                          type="text"
                          id="cf-3"
                          placeholder="Your pickup address"
                          className="form-control datepicker px-3"
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label for="cf-4">Return date</label>
                        <input
                          type="text"
                          id="cf-4"
                          placeholder="Your pickup address"
                          className="form-control datepicker px-3"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-primary"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <h3>Our Offer</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure nesciunt nemo vel earum maxime neque!
                  </p>
                  <p>
                    <Link to="/#" className="btn btn-primary custom-prev">
                      Previous
                    </Link>
                    <span className="mx-2">/</span>
                    <Link to="/#" className="btn btn-primary custom-next">
                      Next
                    </Link>
                  </p>
                </div>
                <div className="col-lg-9">
                  <div className="nonloop-block-13 owl-carousel">
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
                </div>
              </div>
            </div>
          </div>

          <div
            className="site-section section-3"
            style={{ backgroundImage: "url(images/hero_2.jpg"}}
            // style="background-image: url('images/hero_2.jpg');"
          >
            <div className="container">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h2 className="text-white">Our services</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="service-1">
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
                <div className="col-lg-4">
                  <div className="service-1">
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
                <div className="col-lg-4">
                  <div className="service-1">
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

          <div className="site-section bg-light">
            <div className="container">
              <div className="row justify-content-center text-center mb-5">
                <div className="col-7 text-center mb-5">
                  <h2>Customer Testimony</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo assumenda, dolorum necessitatibus eius earum voluptates
                    sed!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="testimonial-2">
                    <blockquote className="mb-4">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam,
                        voluptatum"
                      </p>
                    </blockquote>
                    <div className="d-flex v-card align-items-center">
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid mr-3"
                      />
                      <span>Mike Fisher</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="testimonial-2">
                    <blockquote className="mb-4">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam,
                        voluptatum"
                      </p>
                    </blockquote>
                    <div className="d-flex v-card align-items-center">
                      <img
                        src="images/person_2.jpg"
                        alt="Image"
                        className="img-fluid mr-3"
                      />
                      <span>Jean Stanley</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="testimonial-2">
                    <blockquote className="mb-4">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam,
                        voluptatum"
                      </p>
                    </blockquote>
                    <div className="d-flex v-card align-items-center">
                      <img
                        src="images/person_3.jpg"
                        alt="Image"
                        className="img-fluid mr-3"
                      />
                      <span>Katie Rose</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-white">
            <div className="container">
              <div className="row justify-content-center text-center mb-5">
                <div className="col-7 text-center mb-5">
                  <h2>Our Blog</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo assumenda, dolorum necessitatibus eius earum voluptates
                    sed!
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/post_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                        <Link to="/single">
                          The best car rent in the entire planet
                        </Link>
                      </h2>
                      <span className="meta d-inline-block mb-3">
                        July 17, 2019 <span className="mx-2">by</span>{" "}
                        <Link to="/#">Admin</Link>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores eos soluta, dolore harum molestias
                        consectetur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                        <Link to="/single">
                          The best car rent in the entire planet
                        </Link>
                      </h2>
                      <span className="meta d-inline-block mb-3">
                        July 17, 2019 <span className="mx-2">by</span>{" "}
                        <Link to="/#">Admin</Link>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores eos soluta, dolore harum molestias
                        consectetur.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div class="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/img_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                        <Link to="/single">
                          The best car rent in the entire planet
                        </Link>
                      </h2>
                      <span className="meta d-inline-block mb-3">
                        July 17, 2019 <span className="mx-2">by</span>{" "}
                        <Link to="/#">Admin</Link>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores eos soluta, dolore harum molestias
                        consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </body> */}
      </div>
    );
  }
}

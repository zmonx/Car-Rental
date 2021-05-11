import React, { Component } from "react";
import Image from "../img/hero_1.jpg";
import Bg from "../img/hero_2.jpg";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <body
          data-spy="scroll"
          data-target=".site-navbar-target"
          data-offset="300"
        >
          <div class="site-wrap" id="home-section">
            <div class="site-mobile-menu site-navbar-target">
              <div class="site-mobile-menu-header">
                <div class="site-mobile-menu-close mt-3">
                  <span class="icon-close2 js-menu-toggle"></span>
                </div>
              </div>
              <div class="site-mobile-menu-body"></div>
            </div>
          </div>
          <div class="ftco-blocks-cover-1">
            <div
              class="ftco-cover-1 overlay"
              style={{ backgroundImage: `url(${Image})` }}
              // background-image: url('images/hero_1.jpg')
            >
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-5">
                    <div class="feature-car-rent-box-1">
                      <h3>Range Rover S7</h3>
                      <ul class="list-unstyled">
                        <li>
                          <span>Doors</span>
                          <span class="spec">4</span>
                        </li>
                        <li>
                          <span>Seats</span>
                          <span class="spec">6</span>
                        </li>
                        <li>
                          <span>Lugage</span>
                          <span class="spec">2 Suitcase/2 Bags</span>
                        </li>
                        <li>
                          <span>Transmission</span>
                          <span class="spec">Automatic</span>
                        </li>
                        <li>
                          <span>Minium age</span>
                          <span class="spec">Automatic</span>
                        </li>
                      </ul>
                      <div class="d-flex align-items-center bg-light p-3">
                        <span>$150/day</span>
                        <Link to="/contact" class="ml-auto btn btn-primary">
                          Rent Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section pt-0 pb-0 bg-light">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <form class="trip-form">
                    <div class="row align-items-center mb-4">
                      <div class="col-md-6">
                        <h3 class="m-0">Begin your trip here</h3>
                      </div>
                      <div class="col-md-6 text-md-right">
                        <span class="text-primary">32</span>{" "}
                        <span>cars available</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-3">
                        <label for="cf-1">Where you from</label>
                        <input
                          type="text"
                          id="cf-1"
                          placeholder="Your pickup address"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="cf-2">Where you go</label>
                        <input
                          type="text"
                          id="cf-2"
                          placeholder="Your drop-off address"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="cf-3">Journey date</label>
                        <input
                          type="text"
                          id="cf-3"
                          placeholder="Your pickup address"
                          class="form-control datepicker px-3"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="cf-4">Return date</label>
                        <input
                          type="text"
                          id="cf-4"
                          placeholder="Your pickup address"
                          class="form-control datepicker px-3"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <input
                          type="submit"
                          value="Submit"
                          class="btn btn-primary"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section bg-light">
            <div class="container">
              <div class="row">
                <div class="col-lg-3">
                  <h3>Our Offer</h3>
                  <p class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure nesciunt nemo vel earum maxime neque!
                  </p>
                  <p>
                    <Link to="/#" class="btn btn-primary custom-prev">
                      Previous
                    </Link>
                    <span class="mx-2">/</span>
                    <Link to="/#" class="btn btn-primary custom-next">
                      Next
                    </Link>
                  </p>
                </div>
                <div class="col-lg-9">
                  <div class="nonloop-block-13 owl-carousel">
                    <div class="item-1">
                      <Link to="/#">
                        <img
                          src="images/img_1.jpg"
                          alt="Image"
                          class="img-fluid"
                        />
                      </Link>
                      <div class="item-1-contents">
                        <div class="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div class="rating">
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                          </div>
                          <div class="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul class="specs">
                          <li>
                            <span>Doors</span>
                            <span class="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span class="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span class="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span class="spec">18 years</span>
                          </li>
                        </ul>
                        <div class="d-flex action">
                          <Link to="/contact" class="btn btn-primary">
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div class="item-1">
                      <Link to="/#">
                        <img
                          src="images/img_2.jpg"
                          alt="Image"
                          class="img-fluid"
                        />
                      </Link>
                      <div class="item-1-contents">
                        <div class="text-center">
                          <h3>
                            <Link to="/#">Range Rover S64 Coupe</Link>
                          </h3>
                          <div class="rating">
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                            <span class="icon-star text-warning"></span>
                          </div>
                          <div class="rent-price">
                            <span>$250/</span>day
                          </div>
                        </div>
                        <ul class="specs">
                          <li>
                            <span>Doors</span>
                            <span class="spec">4</span>
                          </li>
                          <li>
                            <span>Seats</span>
                            <span class="spec">5</span>
                          </li>
                          <li>
                            <span>Transmission</span>
                            <span class="spec">Automatic</span>
                          </li>
                          <li>
                            <span>Minium age</span>
                            <span class="spec">18 years</span>
                          </li>
                        </ul>
                        <div class="d-flex action">
                          <Link to="/contact" class="btn btn-primary">
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
            class="site-section section-3"
            style={{ backgroundImage: `url(${Bg})` }}
            // style="background-image: url('images/hero_2.jpg');"
          >
            <div class="container">
              <div class="row">
                <div class="col-12 text-center mb-5">
                  <h2 class="text-white">Our services</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="service-1">
                    <span class="service-1-icon">
                      <span class="flaticon-car-1"></span>
                    </span>
                    <div class="service-1-contents">
                      <h3>Repair</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Obcaecati, laboriosam.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="service-1">
                    <span class="service-1-icon">
                      <span class="flaticon-traffic"></span>
                    </span>
                    <div class="service-1-contents">
                      <h3>Car Accessories</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Obcaecati, laboriosam.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="service-1">
                    <span class="service-1-icon">
                      <span class="flaticon-valet"></span>
                    </span>
                    <div class="service-1-contents">
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

          <div class="container site-section mb-5">
            <div class="row justify-content-center text-center">
              <div class="col-7 text-center mb-5">
                <h2>How it works</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  assumenda, dolorum necessitatibus eius earum voluptates sed!
                </p>
              </div>
            </div>
            <div class="how-it-works d-flex">
              <div class="step">
                <span class="number">
                  <span>01</span>
                </span>
                <span class="caption">Time &amp; Place</span>
              </div>
              <div class="step">
                <span class="number">
                  <span>02</span>
                </span>
                <span class="caption">Car</span>
              </div>
              <div class="step">
                <span class="number">
                  <span>03</span>
                </span>
                <span class="caption">Details</span>
              </div>
              <div class="step">
                <span class="number">
                  <span>04</span>
                </span>
                <span class="caption">Checkout</span>
              </div>
              <div class="step">
                <span class="number">
                  <span>05</span>
                </span>
                <span class="caption">Done</span>
              </div>
            </div>
          </div>

          <div class="site-section bg-light">
            <div class="container">
              <div class="row justify-content-center text-center mb-5">
                <div class="col-7 text-center mb-5">
                  <h2>Customer Testimony</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo assumenda, dolorum necessitatibus eius earum voluptates
                    sed!
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0">
                  <div class="testimonial-2">
                    <blockquote class="mb-4">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam,
                        voluptatum"
                      </p>
                    </blockquote>
                    <div class="d-flex v-card align-items-center">
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        class="img-fluid mr-3"
                      />
                      <span>Mike Fisher</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                  <div class="testimonial-2">
                    <blockquote class="mb-4">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam,
                        voluptatum"
                      </p>
                    </blockquote>
                    <div class="d-flex v-card align-items-center">
                      <img
                        src="images/person_2.jpg"
                        alt="Image"
                        class="img-fluid mr-3"
                      />
                      <span>Jean Stanley</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                  <div class="testimonial-2">
                    <blockquote class="mb-4">
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam,
                        voluptatum"
                      </p>
                    </blockquote>
                    <div class="d-flex v-card align-items-center">
                      <img
                        src="images/person_3.jpg"
                        alt="Image"
                        class="img-fluid mr-3"
                      />
                      <span>Katie Rose</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section bg-white">
            <div class="container">
              <div class="row justify-content-center text-center mb-5">
                <div class="col-7 text-center mb-5">
                  <h2>Our Blog</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo assumenda, dolorum necessitatibus eius earum voluptates
                    sed!
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/post_1.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </Link>
                    <div class="post-entry-1-contents">
                      <h2>
                        <Link to="/single">
                          The best car rent in the entire planet
                        </Link>
                      </h2>
                      <span class="meta d-inline-block mb-3">
                        July 17, 2019 <span class="mx-2">by</span>{" "}
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
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </Link>
                    <div class="post-entry-1-contents">
                      <h2>
                        <Link to="/single">
                          The best car rent in the entire planet
                        </Link>
                      </h2>
                      <span class="meta d-inline-block mb-3">
                        July 17, 2019 <span class="mx-2">by</span>{" "}
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

                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/img_3.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </Link>
                    <div class="post-entry-1-contents">
                      <h2>
                        <Link to="/single">
                          The best car rent in the entire planet
                        </Link>
                      </h2>
                      <span class="meta d-inline-block mb-3">
                        July 17, 2019 <span class="mx-2">by</span>{" "}
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
        </body>
      </div>
    );
  }
}

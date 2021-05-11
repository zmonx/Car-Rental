import React, { Component } from "react";
import Bg from "../img/hero_2.jpg";
import { Link } from 'react-router-dom';

export default class Blog extends Component {
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
              class="ftco-cover-1 overlay innerpage"
              style={{ backgroundImage: `url(${Bg})` }}
            >
              <div class="container">
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-6 text-center">
                    <h1>Car Articles</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section bg-light">
            <div class="container">
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
                          <Link to="/single">The best car rent in the entire planet</Link>
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
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                        src="images/post_1.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </Link>
                    <div class="post-entry-1-contents">
                      <h2>
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                    <a href="single.html">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-entry-1-contents">
                      <h2>
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                      <Link to="/single">The best car rent in the entire planet</Link>
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

                <div class="col-12">
                  <span class="p-3">1</span>
                  <Link to="/#" class="p-3">
                    2
                  </Link>
                  <Link to="/#" class="p-3">
                    3
                  </Link>
                  <Link to="/#" class="p-3">
                    4
                  </Link>
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
        </body>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Blog extends Component {
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
              style={{ backgroundImage:"url(images/hero_2.jpg)"}}
            >
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h1>Car Articles</h1>
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
                          <Link to="/single">The best car rent in the entire planet</Link>
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
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                        src="images/img_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                        src="images/post_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                    <a href="single.html">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-entry-1-contents">
                      <h2>
                      <Link to="/single">The best car rent in the entire planet</Link>
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
                        src="images/img_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                      <Link to="/single">The best car rent in the entire planet</Link>
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

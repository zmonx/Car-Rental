import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

export default class header extends Component {
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
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>
          <header className="site-navbar site-navbar-target" role="banner">
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-3 ">
                  <div className="site-logo">
                    <Link to="/">
                      CarRent
                    </Link>

                  </div>
                </div>
                <div className="col-9  text-right">
                  <span className="d-inline-block d-lg-none">
                    <Link
                      to="/#"
                      className="text-white site-menu-toggle js-menu-toggle py-5 text-white"
                    />
                    <span className="icon-menu h3 text-white" />
                  </span>
                  <nav
                    className="site-navigation text-right ml-auto d-none d-lg-block"
                    role="navigation"
                  >
                    <ul className="site-menu main-menu js-clone-nav ml-auto ">
                      <li className="active">
                        <Link to="/" className="nav-Link" >
                          Home
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/services" className="nav-Link">
                        Services
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/cars" className="nav-Link">
                          Cars
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className="nav-Link">
                          Login
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/blog" className="nav-Link" >
                        Blog
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link to="/rent" className="nav-Link">
                        Rent
                        </Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* </body> */}
      </div>
    );
  }
}

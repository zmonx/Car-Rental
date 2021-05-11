import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class header extends Component {
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

            <header class="site-navbar site-navbar-target" role="banner">
              <div class="container">
                <div class="row align-items-center position-relative">
                  <div class="col-3 ">
                    <div class="site-logo">
                      {/* <a href="index.html">CarRent</a> */}
                      <Link to="/">CarRent</Link>

                    </div>
                  </div>

                  <div class="col-9  text-right">
                    <span class="d-inline-block d-lg-none">
                      <Link to="#" class="text-white site-menu-toggle js-menu-toggle py-5 text-white">
                        <span class="icon-menu h3 text-white"></span>
                      </Link>
                    </span>

                    <nav
                      class="site-navigation text-right ml-auto d-none d-lg-block"
                      role="navigation"
                    >
                      <ul class="site-menu main-menu js-clone-nav ml-auto ">
                        <li class="active">
                          <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li>
                          <Link to="/services" class="nav-link" >Services</Link>
                        </li>
                        <li>
                        <Link to="/cars" class="nav-link" >Cars</Link>
                        </li>
                        <li>
                        <Link to="/about" class="nav-link" >About</Link>
                        </li>
                        <li>
                        <Link to="/blog" class="nav-link" >Blog</Link>
                        </li>
                        <li>
                        <Link to="/contact" class="nav-link" >Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>

        </div>
        </body>
       
      </div>
    );
  }
}

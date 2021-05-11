import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <h2 class="footer-heading mb-4">About Us</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.{" "}
                </p>
              </div>
              <div class="col-lg-8 ml-auto">
                <div class="row">
                  <div class="col-lg-3">
                    <h2 class="footer-heading mb-4">Quick Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <Link to="/#">About Us</Link>
                      </li>
                      <li>
                        <Link to="/#">Testimonials</Link>
                      </li>
                      <li>
                        <Link yo="/#">Terms of Service</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy</Link>
                      </li>
                      <li>
                        <Link to="/#">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <h2 class="footer-heading mb-4">Quick Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <Link to="/#">About Us</Link>
                      </li>
                      <li>
                        <Link to="/#">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms of Service</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy</Link>
                      </li>
                      <li>
                        <Link to="/#">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <h2 class="footer-heading mb-4">Quick Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <Link to="/#">About Us</Link>
                      </li>
                      <li>
                        <Link to="/#">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms of Service</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy</Link>
                      </li>
                      <li>
                        <Link to="/#">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <h2 class="footer-heading mb-4">Quick Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <Link to="/#">About Us</Link>
                      </li>
                      <li>
                        <Link to="/#">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms of Service</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy</Link>
                      </li>
                      <li>
                        <Link to="/#">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pt-5 mt-5 text-center">
              <div class="col-md-12">
                <div class="border-top pt-5">
                  <p>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved
                    {/* <i class="icon-heart text-danger" aria-hidden="true"></i> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

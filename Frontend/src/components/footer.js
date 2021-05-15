import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <h2 className="footer-heading mb-4">About Us</h2>
        <p>
          Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.{'{'}" "{'}'}
        </p>
      </div>
      <div className="col-lg-8 ml-auto">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">Quick Links</h2>
            <ul className="list-unstyled">
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
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">Quick Links</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="/#">About Us</Link>
              </li>
              <li>
                <Link to="/#">Testimonials</Link>
              </li>
              <li>
                <Link to="/#" >Terms of Service</Link>
              </li>
              <li>
                <Link to="/#" >Privacy</Link>
              </li>
              <li>
                <Link to="/#" >Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">Quick Links</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="/#">About Us</Link>
              </li>
              <li>
                <Link to="/#" >Testimonials</Link>
              </li>
              <li>
                <Link to="/#" >Terms of Service</Link>
              </li>
              <li>
                <Link to="/#">Privacy</Link>
              </li>
              <li>
                <Link to="/#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h2 className="footer-heading mb-4">Quick Links</h2>
            <ul className="list-unstyled">
              <li>
                <Link to="/#" >About Us</Link>
              </li>
              <li>
                <Link to="/#" >Testimonials</Link>
              </li>
              <li>
                <Link to="/#" >Terms of Service</Link>
              </li>
              <li>
                <Link to="/#" >Privacy</Link>
              </li>
              <li>
                <Link to="/#" >Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-5 mt-5 text-center">
      <div className="col-md-12">
        <div className="border-top pt-5">
          <p>
            Copyright ©
            {'{'}" "{'}'}
            All rights reserved
            {'{'}/* <i className="icon-heart text-danger" aria-hidden="true" /> */{'}'}
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

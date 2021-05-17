import React, { useState } from "react";
import "./contact.css";
import "react-datepicker/dist/react-datepicker.css";
import { FaPencilAlt } from "react-icons/fa";
import "./edit.css";

function Edit() {
  return (
    <div>
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
          style={{ backgroundImage: "url(images/hero_2.jpg" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>Edit Car</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row justify-content-center text-center"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="Book3ContentA-head-option">
                <FaPencilAlt/>
                Edit Car
              </div>
              <br></br>
              <form action="#" method="post">

                <div className="input-container">
                    {/* <FaPencilAlt/> */}
                  {/* <i className="fa fa-picture-o icon"></i> */}
                  <input
                    class="input-field"
                    type="url"
                    placeholder="Photo"
                    name="photo"
                  />
                </div>

                <div class="input-container">
                  {/* <i class="fa fa-envelope icon"></i> */}
                  <input
                    class="input-field"
                    type="text"
                    placeholder="Brand"
                    name="brand"
                  />
                </div>

                <div class="input-container">
                  {/* <i class="fa fa-key icon"></i> */}
                  <input
                    class="input-field"
                    type="text"
                    placeholder="Model"
                    name="model"
                  />
                </div>
                <div class="input-container">
                  {/* <i class="fa fa-key icon"></i> */}
                  <input
                    class="input-field"
                    type="number"
                    placeholder="Price/Day"
                    name="price"
                  />
                </div>

                <button type="submit" className="btn">
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

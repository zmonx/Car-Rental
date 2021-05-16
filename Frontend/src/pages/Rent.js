import React, { useState } from "react";
import "./contact.css";
import "react-datepicker/dist/react-datepicker.css";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateMomentUtils from "@date-io/moment";

function Rent() {
  const [selectedDate, handleDateChange] = useState(new Date());

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
          style={{ backgroundImage: "url(images/hero_2.jpg" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>Rent for car  </h1>
                <p>Look for a car, look for car rental.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            {/* <div className="col-7 text-center mb-5">
              <h2>Contact Us Or Use This Form To Rent A Car</h2>
              <p>
                Easy car rental, just fill out the details. Waiting for an email
                reply You will be able to pick up the car at the time of
                booking.
              </p>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="Book3ContentA-head-option">YOUR INFORMATION</div>
              <br></br>
              <form action="#" method="post">
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Driver License"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="Book3ContentA-head-option">
                  TRIP INFORMATION
                </div>
                <br></br>

                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <label>Where you form</label>
                    <select className="form-control">
                      <option value="Nakhon Si Thammarat Airport">
                        Nakhon Si Thammarat Airport
                      </option>
                      <option value="CentralPlaza Nakhon Si Thammarat">
                        Central Plaza Nakhon Si Thammarat
                      </option>
                      <option value="Nakhon Si Thammarat Bus Station">
                        Nakhon Si Thammarat Bus Station
                      </option>
                      <option
                        value="Hat Yai International Airport"
                      >
                        Hat Yai International Airport
                      </option>
                      <option
                        value="Surat Thani International Airport"
                      >
                        Surat Thani International Airport
                      </option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Where you go</label>
                    <select className="form-control">
                      <option value="Nakhon Si Thammarat Airport">
                        Nakhon Si Thammarat Airport
                      </option>
                      <option value="CentralPlaza Nakhon Si Thammarat">
                        CentralPlaza Nakhon Si Thammarat
                      </option>
                      <option value="Nakhon Si Thammarat Bus Station">
                        Nakhon Si Thammarat Bus Station
                      </option>
                      <option
                        value="Hat Yai International Airport"
                      >
                        Hat Yai International Airport
                      </option>
                      <option
                        value="Surat Thani International Airport"
                      >
                        Surat Thani International Airport
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <label>Journey date</label>
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                      <DateTimePicker
                        inputVariant="outlined"
                        value={selectedDate}
                        onChange={handleDateChange}
                        format="dd/MM/yyyy HH:mm"
                        className="form-control"
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                  <div className="col-md-6">
                    <label>Return date</label>
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                      <DateTimePicker
                        inputVariant="outlined"
                        value={selectedDate}
                        onChange={handleDateChange}
                        format="dd/MM/yyyy HH:mm"
                        className="form-control"
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6 mr-auto">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5"
                      value="Rent Now"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-black mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Address:</span>
                    <span>
                      222 Thaiburi, Thasala, Nakhon Si Thammarat 80160
                    </span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Phone:</span>
                    <span>012-3456-789</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Email:</span>
                    <span>Specialcarrent@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </body> */}
    </div>
  );
}

export default Rent;

import React, { useState, Component, forwardRef } from "react";
import "./contact.css";
import "react-datepicker/dist/react-datepicker.css";
import  { Redirect } from 'react-router-dom'

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateMomentUtils from "@date-io/moment";

export class Rent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      First_name: "",
      Last_name: "",
      Phone_Number: "",
      Driver_License: "",
      Email_address: "",

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({

      [name]: value
    });
  }
  handleSubmit(event) {
    // alert(this.state.Brand)
    const { Brand, Modal, Price_day, Doors, Seats, Transmission, img } = this.state;
    <Redirect to='/pdf' />

  }




  render() {
    // const { selectedDate, handleDateChange } = useState(new Date());
    const carThis = this.props.location.state.cars;
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

            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="Book3ContentA-head-option">CAR INFORMATION</div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group row mt-4">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Brand"
                        value={carThis.Brand}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Model"
                        value={carThis.Modal}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price / Day"
                        value={carThis.Price_day}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Transmission"
                        value={carThis.Transmission}
                        readOnly
                      />
                    </div>
                  </div>




                  <div className="Book3ContentA-head-option">YOUR INFORMATION</div>

                  <div className="form-group row mt-4">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="First_name"
                        value={this.state.First_name}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        name="Last_name"
                        value={this.state.Last_name}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="Phone_Number"
                        value={this.state.Phone_Number}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Driver License"
                        name="Driver_License"
                        value={this.state.Driver_License}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                        name="Email_address"
                        value={this.state.Email_address}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>


                  <div className="form-group row">


                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mb-4 mb-lg-0">
                      <label>Journey date</label>
                      <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <DateTimePicker
                          inputVariant="outlined"
                          // value={selectedDate}
                          // onChange={handleDateChange}
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
                          // value={selectedDate}
                          // onChange={handleDateChange}
                          format="dd/MM/yyyy HH:mm"
                          className="form-control"
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mr-auto">
                      {/* <input
                        type="submit"
                        className="btn btn-block btn-primary text-white py-3 px-5"

                      /> */}
                      <button type="submit" className="ml-auto btn btn-primary">submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
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
}

export default Rent

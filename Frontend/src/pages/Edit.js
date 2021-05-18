
import "./contact.css";
import "react-datepicker/dist/react-datepicker.css";
import { FaPencilAlt } from "react-icons/fa";
import "./edit.css";
import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom"
export class Edit extends Component {



  constructor(props) {
    super(props)
    this.state = {
      car_id: this.props.location.state.cars._id,
      Brand: this.props.location.state.cars.Brand,
      Modal: this.props.location.state.cars.Modal,
      Price_day: this.props.location.state.cars.Price_day,
      Doors: this.props.location.state.cars.Doors,
      Seats: this.props.location.state.cars.Seats,
      Transmission: this.props.location.state.cars.Transmission,
      img: this.props.location.state.cars.img,
      redirect: null
    };
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
  // handleSubmit(event) {
  //   // alert(this.state.Brand)
  //   event.preventDefault();
  //   const { car_id, Brand, Modal, Price_day, Doors, Seats, Transmission, img } = this.state
  //   axios.get("http://localhost:8000/update/"+ car_id + '/' + Brand + '/' + Modal + '/' + Price_day + '/' + Doors + '/' + Seats + '/' + Transmission + '/' + img)
  //     .then(response => {
  //       console.log(response);
  //     },
  //       function (error) {
  //         console.log(error);
  //       })
  // }
  async handleSubmit(event) {
    // alert(this.state.Brand)

    event.preventDefault();
    let data = {
      car_id: this.state.car_id,
      Brand: this.state.Brand,
      Modal: this.state.Modal,
      Price_day: this.state.Price_day,
      Doors: this.state.Doors,
      Seats: this.state.Seats,
      Transmission: this.state.Transmission,
      img: this.state.img
    }
    console.log(data);
    await axios.post("http://127.0.0.1:8000/update", data)
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({ redirect: "/manage" });
  }


  render() {
    const carThis = this.props.location.state.cars

    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "/manage"

      }}
      />
    }


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
              <div className="col-md-8">
                <div className="Book3ContentA-head-option">
                  <FaPencilAlt />
                  Edit Car
                </div>
                <br></br>

                <form method="post" onSubmit={this.handleSubmit}>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-body">

                          <div class="form-group">
                            <input type="hidden" name="car_id" value={this.state._id} />
                            <label for="Brand">Brand</label>
                            <input type="text" class="form-control" name="Brand" value={this.state.Brand} onChange={this.handleInputChange} />
                          </div>
                          <div class="form-group">
                            <label for="Model">Model</label>
                            <input type="text" class="form-control" name="Modal" value={this.state.Modal} onChange={this.handleInputChange} />
                          </div>
                          <div class="form-group">
                            <label for="price">Price / Day</label>
                            <input type="number" class="form-control" name="Price_day" value={this.state.Price_day} onChange={this.handleInputChange} />
                          </div>
                          <div class="form-group">
                            <label for="price">Doors</label>
                            <input type="number" class="form-control" name="Doors" value={this.state.Doors} onChange={this.handleInputChange} />
                          </div>
                          <div class="form-group">
                            <label for="price">Seats</label>
                            <input type="number" class="form-control" name="Seats" value={this.state.Seats} onChange={this.handleInputChange}></input>
                          </div>
                          <div class="form-group">
                            <label for="price">Transmission</label>
                            <input type="text" class="form-control" name="Transmission" value={this.state.Transmission} onChange={this.handleInputChange} />
                          </div>
                          <div class="form-group">
                            <label for="price">Image Path</label>
                            <input type="test" class="form-control" name="img" value={this.state.img} onChange={this.handleInputChange} />
                          </div><br></br>
                          <a href="/manage" class="btn btn-secondary"><i class="fa fa-chevron-left" aria-hidden="true"></i>Back</a>
                          <button type="submit" class="btn btn-info"> <i class="fa fa-floppy-o" aria-hidden="true"></i> save</button>
                        </div>
                      </div>
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
                      <span>222 Thaiburi, Thasala, Nakhon Si Thammarat 80160</span>
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
      </div>
    );
  }
}

export default Edit;




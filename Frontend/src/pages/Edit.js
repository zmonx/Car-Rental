
import "./contact.css";
import "react-datepicker/dist/react-datepicker.css";
import { FaPencilAlt } from "react-icons/fa";
import "./edit.css";
import React, { Component } from 'react'
import axios from "axios";

export class Edit extends Component {


 
  constructor(props) {
    super(props)
    this.state = {
      car_id:"",
      Brand:"", 
      Modal:"", 
      Price_day:"", 
      Doors:"", 
      Seats:"", 
      Transmission:"", 
      img:""
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
  handleSubmit(event) {
    // alert(this.state.Brand)
    const {car_id,Brand, Modal, Price_day, Doors, Seats, Transmission, img }  = this.state
    axios.post("http://localhost:8000/update", {car_id, Brand, Modal, Price_day, Doors, Seats, Transmission, img })
      .then(response => {
        console.log(response);
      },
        function (error) {
          console.log(error);
        })
  }

  // submit = (e) =>{
  //   e.preventDefault()
  //   console.log(this.state)
  // }





  // handleSubmit(event) {
  //   // alert(this.state.Brand)
  //   const {car_id,Brand, Modal, Price_day, Doors, Seats, Transmission, img } = this.state;
  //   axios.post("http://localhost:8000/update", {car_id, Brand, Modal, Price_day, Doors, Seats, Transmission, img })
  //   .then(response => {
  //     console.log(response.data)
  //   }).catch((error) => {
  //     console.log(error)
  // });
  // }





  render() {
    const carThis = this.props.location.state.cars
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

                <form  onSubmit={this.submit}>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-body">
              
                            <div class="form-group">
                              <input type="hidden" name="product_id" value="" />
                              <label for="Brand">Brand</label>
                              <input type="text" class="form-control" name="Brand" value={this.props.location.state.cars.Brand} onChange={this.handleInputChange}/>
                            </div>
                            <div class="form-group">
                              <label for="Model">Model</label>
                              <input type="text" class="form-control" name="Modal" value={this.props.location.state.cars.Modal} onChange={this.handleInputChange}/>
                            </div>
                            <div class="form-group">
                              <label for="price">Price / Day</label>
                              <input type="number" class="form-control" name="Price_day" value={this.props.location.state.cars.Price_day} onChange={this.handleInputChange} />
                            </div>
                            <div class="form-group">
                              <label for="price">Doors</label>
                              <input type="number" class="form-control" name="Doors" value={this.props.location.state.cars.Doors} onChange={this.handleInputChange}/>
                            </div>
                            <div class="form-group">
                              <label for="price">Seats</label>
                              <input type="number" class="form-control" name="Seats" value={this.props.location.state.cars.Seats} onChange={this.handleInputChange}></input>
                            </div>
                            <div class="form-group">
                              <label for="price">Transmission</label>
                              <input type="text" class="form-control" name="Transmission" value={this.props.location.state.cars.Transmission} onChange={this.handleInputChange}/>
                            </div>
                            <div class="form-group">
                              <label for="price">Image Path</label>
                              <input type="test" class="form-control" name="img" value={this.props.location.state.cars.img} onChange={this.handleInputChange}/>
                            </div><br></br>
                            <a href="/manage" class="btn btn-secondary"><i class="fa fa-chevron-left" aria-hidden="true"></i>Back</a>
                            <button type="submit" class="btn btn-info"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
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




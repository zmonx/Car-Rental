import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../lotties/25300-plus-button';
import Modal from '@material-ui/core/Modal';



export default class Cars extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: "",
      Brand: "",
      Modal: "",
      Price_day: "",
      Doors: "",
      Seats: "",
      Transmission: "",
      img: "",
      id_del: "",

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
  handleSubmit() {
    // alert(this.state.Brand)
    const { Brand, Modal, Price_day, Doors, Seats, Transmission, img } = this.state
    axios.get("http://localhost:8000/insert/" + Brand + '/' + Modal + '/' + Price_day + '/' + Doors + '/' + Seats + '/' + Transmission + '/' + img)
      .then(response => {
        console.log(response);
      },
        function (error) {
          console.log(error);
        })
    // history.push("/manage") 
    window.location.href = "/manage";
  }

  del(id) {
    axios.get("http://localhost:8000/delete/" + id)
      .then(response => {
        console.log(response);
      },
        function (error) {
          console.log(error);
        })
  }


  componentDidMount() {
    axios.get("http://localhost:8000/car")
      .then(response => {
        console.log(response.data);
        this.setState({ cars: response.data });
      },
        function (error) {
          console.log(error);
        })
  }


  
  // componentDidUpdate() {
  //   this.setState({ cars: this.state.cars });
  // }




  showProducts() {
    return (
      this.state.cars &&
      this.state.cars.map(cars => (
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="item-1">
            <Link to={{
              pathname: '/detail',
              state: { cars_id: cars._id }
            }}>
              <img
                src={cars.img}
                alt="Image"
                className="img-fluid"
                style={{ width: "350px" }}
              />

            </Link>
            <div className="item-1-contents">
              <div className="text-center">
                <h3>
                  <Link to={{
                    pathname: '/detail',
                    state: { cars: cars }
                  }}>{cars.Brand} {cars.Modal}</Link>
                </h3>
                <div className="rating">
                  <span className="icon-star text-warning"></span>
                  <span className="icon-star text-warning"></span>
                  <span className="icon-star text-warning"></span>
                  <span className="icon-star text-warning"></span>
                  <span className="icon-star text-warning"></span>
                </div>
                <div className="rent-price">
                  <span>{cars.Price_day}/</span>day
                  </div>
              </div>
              <ul className="specs">
                <li>
                  <span>Doors</span>
                  <span className="spec">{cars.Doors}</span>
                </li>
                <li>
                  <span>Seats</span>
                  <span className="spec">{cars.Seats}</span>
                </li>
                <li>
                  <span>Transmission</span>
                  <span className="spec">{cars.Transmission}</span>
                </li>
                <li>
                  <span>Minium age</span>
                  <span className="spec">18 years</span>
                </li>
              </ul>
              <div className="d-flex action">
                <Link class="btn btn-primary" to={{ pathname: '/rent', state: { cars: cars } }}>Rent Now</Link>
              </div>
            </div>
          </div>
        </div>

      ))
    );
  }


  // test() {
  //   {
  //     this.state.cars.map((data) => {
  //       return (

  //       )
  //     })
  //   }

  // }


  render() {
    // let data = this.state.cars;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

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
          <div className="ftco-blocks-cover-1">
            <div
              className="ftco-cover-1 overlay innerpage"
              style={{ backgroundImage: "url(images/hero_2.jpg)" }}
            >
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h1>Our For Rent Cars</h1>
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
                {/* //////////////////////////// */}
                {/* //////////////////////////// */}
                {this.showProducts()}

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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo assumenda, dolorum necessitatibus eius earum voluptates
                  sed!
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
        </div>
        {/* </body> */}
      </div>
    );
  }
}

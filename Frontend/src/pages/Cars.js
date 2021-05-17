import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  handleSubmit(event) {
    // alert(this.state.Brand)
    const { Brand, Modal, Price_day, Doors, Seats, Transmission, img } = this.state
    axios.get("http://localhost:8000/insert/" + Brand + '/' + Modal + '/' + Price_day + '/' + Doors + '/' + Seats + '/' + Transmission + '/' + img)
      .then(response => {
        console.log(response);
      },
        function (error) {
          console.log(error);
        })
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
                <Link to="/contact" className="btn btn-primary">
                  Rent Now
                  </Link>
                <button className="btn btn-danger ml-1" value={cars._id} onClick={(e) => this.del(e.target.value)}>X</button>
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


    const body = (


      <div className="row align-items-center justify-content-center mt-5 p-3">
        <div className="col-6 feature-car-rent-box-1 ">
          <h3>Cars Insert</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="from-group">
              <label>
                Brand:
                <input name="Brand" type="text" value={this.state.Brand} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="from-group">
              <label>
                Modal:
              <input name="Modal" type="text" value={this.state.Modal} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="from-group">
              <label>
                Price_day:
              <input name="Price_day" type="number" value={this.state.Price_day} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="from-group">
              <label>
                Doors:
              <input name="Doors" type="number" value={this.state.Doors} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="from-group">
              <label>
                Seats:
              <input name="Seats" type="number" value={this.state.Seats} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className="from-group">
              <label>
                Transmission:
              <input name="Transmission" type="text" value={this.state.Transmission} onChange={this.handleInputChange} />
              </label></div>
            <div className="from-group">
              <label>
                img:
              <input name="img" type="text" value={this.state.img} onChange={this.handleInputChange} />
              </label>
            </div>
            <button type="submit" className="ml-auto btn btn-primary">submit</button>
          </form>
        </div>
      </div>

    );



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
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="item-1">
                    <div className="item-1-contents">
                      <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                        isStopped={false}
                        isPaused={false} />
                    </div>
                  </div>
                  <div>
                    <Modal
                      open={false}
                      onClose={true}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      {body}
                    </Modal>
                  </div>
                </div>
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

import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Detail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cars: ""

        }
    }

    render() {

        const carThis = this.props.location.state.cars;

        return (
            <div>
                {/* <p>xxxxxxxxxxxxxxxxxxxxxxx{carThis._id}</p> */}


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
                <div className="ftco-blocks-cover-1 ">
                    <div
                        className="ftco-cover-1 overlay innerpage "
                        style={{ backgroundImage: "url(images/hero_2.jpg" }}
                    >
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                {/* <h1 style={{color: "white"}} >CAR DETAILS</h1> */}
                                <div className="col-lg-6 text-center">
                                    <h1>CAR DETAILS</h1>
                                    <p>Look for a car, look for car rent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                {/* <div class="product-big-title-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="product-bit-title text-center">
                                <br></br><h2>CAR DETAILS</h2>  <br></br>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <br></br>
                <div className="container bootdey">
                    <div className="col-md-12">
                <h3 className="text-center"> INFORMATION</h3>
                <br></br>
                <hr></hr>

                        <section className="panel">
                            <div className="panel-body">
                                
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="pro-img-details"> <br></br>
                                            <img src={carThis.img} style={{ width: "200%" }} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <br></br>
                                        <h2 className="">
                                        </h2>
                                        <div className="product_meta">
                                            <h4>Brand : {carThis.Brand} </h4>
                                            <h4>Modal : {carThis.Modal}</h4>
                                            <h4>Price / Day  :{carThis.Price_day} ฿</h4>
                                            <h4>Doors : {carThis.Doors}</h4>
                                            <h4>Seats : {carThis.Seats}</h4>
                                            <h4>Transmission : {carThis.Transmission}</h4>
                                            <h4>Description : Lorem ipsum dolor sit amet, os risus, et blandit ligula pellentesque non.  </h4><br></br>

                                            <Link class="btn btn-primary" to={{ pathname: '/rent', state: { cars: carThis } }}>Rent Now</Link>
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
            </div>
        );
    }

}

export default Detail;
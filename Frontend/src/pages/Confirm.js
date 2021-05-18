import axios from 'axios';
import React, { Component } from 'react'

export default class Confirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: "",
        }
    }


    componentDidMount() {
        axios.get("http://localhost:8000/confirm")
            .then(response => {
                console.log(response.data);
                this.setState({ a: response.data });
            },
                function (error) {
                    console.log(error);
                })
    }

    delete(license) {
        console.log("DidMount");
        axios.get("http://localhost:8000/delrent/" + license)
            .then(response => {
                console.log(response.data);
                this.setState({ a: response.data });
            },
                function (error) {
                    console.log(error);
                });
        window.location.reload(false);
        console.log("test", license);
    }




    showProducts() {
        return (
            this.state.a &&
            this.state.a.map(info => (
                <div class="card topp" >
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img" src={info.img} alt="Suresh Dasari Card" />
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h5 class="card-title"><b>Brand :</b> {info.Brand} {info.Modal}    </h5>
                                <h5 class="card-text"><b>Name : </b>{info.FirstName} {info.LastName}. </h5 >
                                <h5 class="card-text"><b>Driver_License : </b>{info.Id_License} </h5 >
                                <h5 class="card-text"><b>Total Price : </b>{info.Total_price} ฿ </h5 >
                                <h5 class="card-text"><b>Date : </b>{info.Journey_date} <b> to </b> {info.Return_date}</h5>
                                {/* <button class="btn btn-primary ss">Done</button> */}
                            <button class="btn btn-danger ss" onClick={(e) => { if (window.confirm('Are you sure you got the car?')) this.delete(info.Id_License) }}> Done</button>

                            </div>
                        </div>
                    </div>
                </div>
            ))
        );
    }

    render() {
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
                            style={{ backgroundImage: "url(images/hero_2.jpg)" }}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <h1>Our For Rent Cars</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div classname="posc"></div>
                    <div class="container bcontent posc ">
                        <div className="Book3ContentA-head-option topp">CONFIRM INFORMATION</div>
                        {this.showProducts()}
                    </div>
                </div>
            </div >
        )
    }

}

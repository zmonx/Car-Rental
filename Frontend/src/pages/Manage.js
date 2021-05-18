import { Link } from "react-router-dom";
import axios from 'axios';
import React, { Component } from 'react'
import { FaAlignJustify, FaPencilAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Modal from '@material-ui/core/Modal';
export default class Manage extends Component {



    constructor(props) {
        super(props)
        this.state = {
            car: "",
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
    1
    async handleSubmit(event) {
        event.preventDefault();
        alert(this.state.Brand)
        const { Brand, Modal, Price_day, Doors, Seats, Transmission, img } = this.state
        await axios.get("http://localhost:8000/insert/" + Brand + '/' + Modal + '/' + Price_day + '/' + Doors + '/' + Seats + '/' + Transmission + '/' + img)
            .then(response => {
                console.log(response.msg);
            },
                function (error) {
                    console.log(error);
                })
        // history.push("/manage") 
        window.location.href = "/manage";
    }
    // setIsOpen() {
    //     this.setState({ setIsOpen: true })
    // }

    componentDidMount() {
        console.log("DidMount");
        axios.get("http://localhost:8000/car")
            .then(response => {
                // console.log(response.data);
                this.setState({ car: response.data });
            },
                function (error) {
                    console.log(error);
                })
    }


    delete(id) {
        console.log("DidMount");
        axios.get("http://localhost:8000/delete/" + id)
            .then(response => {
                console.log(response.data);
                this.setState({ car: response.data });
            },
                function (error) {
                    console.log(error);
                });
        window.location.reload(false);
        console.log("test", id);
    }


    showProducts() {
        return (
            this.state.car &&
            this.state.car.map((cars, index) => (
                <tbody id="myTable">
                    <tr>
                        <td>{index + 1}</td>
                        <td><b>{cars.Brand}</b></td>
                        <td><b>{cars.Modal}</b></td>
                        <td><b>{cars.Price_day}</b></td>
                        <td>
                            {/* <a href="" class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a> */}
                            {/* <Link class="btn btn-warning" to={{    pathname: "/cars",    state: cars._id   }}> Edit </Link> */}
                            <Link class="btn btn-warning" to={{ pathname: '/edit', state: { cars: cars } }}>Edit</Link>
                            {/* <button class="btn btn-danger" onClick={() => this.delete(cars._id)}> Delete</button> */}
                            <button class="btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete(cars._id) }}> Delete</button>
                        </td>
                    </tr>
                </tbody>

            ))
        );
    }


    render() {

        // const [lgShow, setLgShow] = useState(false);
        const body = (
            <div className="row align-items-center justify-content-center mt-5 p-3">
                <div className="col-6 feature-car-rent-box-1 ">
                    <div className="Book3ContentA-head-option mm ">
                        Cars Insert
                </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="from-group ml-auto">
                                    <label>
                                        Brand
                                    <input class="form-control ww" name="Brand" type="text" value={this.state.Brand} onChange={this.handleInputChange} />
                                    </label>
                                </div>
                                <div className="from-group">
                                    <label>
                                        Modal:
                                    <input class="form-control ww" name="Modal" type="text" value={this.state.Modal} onChange={this.handleInputChange} />
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="from-group">
                                    <label>
                                        Price:
                            <input class="form-control ww" name="Price_day" type="number" value={this.state.Price_day} onChange={this.handleInputChange} />
                                    </label>
                                </div>
                                <div className="from-group">
                                    <label>
                                        Doors:
                                        <input class="form-control ww" name="Doors" type="number" value={this.state.Doors} onChange={this.handleInputChange} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="from-group">
                                    <label>
                                        Seats:
                                <input class="form-control ww" name="Seats" type="number" value={this.state.Seats} onChange={this.handleInputChange} />
                                    </label>
                                </div>
                                <div className="from-group">
                                    <label>
                                        Transmission:
                                <input class="form-control ww" name="Transmission" type="text" value={this.state.Transmission} onChange={this.handleInputChange} />
                                    </label></div>
                            </div>
                            <div className="col-6">
                                <div className="from-group">
                                    <label>
                                        img:
                                        <input class="form-control ww" name="img" type="text" value={this.state.img} onChange={this.handleInputChange} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row c" >
                            <div className="col-md-12 q">
                                <button type="submit" className="ml-auto btn btn-primary">submit</button>
                                <button className="btn btn-danger" onClick={() => this.setState({ setIsOpen: false })}>close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );


        const { setIsOpen } = this.state
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
                        style={{ backgroundImage: "url(images/post_6.jpg" }}
                    >
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h1>Management System</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div
                    // className="ftco-cover-1 overlay innerpage"
                    style={{ backgroundImage: "url(images/wpp4.jpg" }}
                > */}
                <div className="container">
                    <br></br>  <br></br>  <br></br>
                    <div className="row">
                        <div className="col-md-10">
                            <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary btn-block" style={{ height: 55, margin: 2, padding: 5 }} onClick={() => { this.setState({ setIsOpen: true }) }}><FaPlus /> New Product</button>


                        </div>
                    </div>
                    <br></br>  <br></br>
                    <table className="table table-bordered table-striped .thead-dark text-center ">
                        <thead class="thead-light">
                            <Modal
                                open={setIsOpen}
                                onClose={false}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                            <tr>
                                <th>#</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Price/Day</th>
                                <th></th>
                            </tr>
                        </thead>
                        {this.showProducts()}
                    </table>
                </div>
                {/* </div> */}
                {/* <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br> */}
                {/* <div className="container site-section mb-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-7 text-center mb-5">
                        <hr></hr><br></br>
                            <h2>How it works</h2>
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
                </div> */}
            </div>
        )
    }
}

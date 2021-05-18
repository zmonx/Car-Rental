import { Link } from "react-router-dom";
import axios from 'axios';
import React, { Component } from 'react'
import { FaPencilAlt } from 'react-icons/fa';
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
                        <td>{cars.Brand}</td>
                        <td>{cars.Modal}</td>
                        <td>{cars.Price_day}</td>
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
                        style={{ backgroundImage: "url(images/img_9.jpg" }}
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

                <div
                    // className="ftco-cover-1 overlay innerpage"
                    style={{ backgroundImage: "url(images/wpp4.jpg" }}
                >
                    <div className="container">
                        <br></br>  <br></br>  <br></br>
                        <div className="row">
                            <div className="col-md-10">
                                <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary btn-block"  ><FaPlus /> New Product</button>
   

                            </div>
                        </div>
                        <br></br>  <br></br>
                        <table className="table table-bordered   text-center  table-hover table-light ">
                            <thead class="thead-light">
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
                </div>
                {/* <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br> */}
            </div>
        )
    }
}

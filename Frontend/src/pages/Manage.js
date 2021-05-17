import axios from 'axios';
import React, { Component } from 'react'

export default class Manage extends Component {






    state = {
        car: ""
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


    delete(id){
        console.log("DidMount");
        axios.get("http://localhost:8000/delete/"+id)
            .then(response => {
                console.log(response.data);
                this.setState({ car: response.data });
            },
                function (error) {
                    console.log(error);
                });
        window.location.reload(false);
        console.log("test",id);
    }


    showProducts() {
        return (
            this.state.car &&
            this.state.car.map((cars, index)=> (
                <tbody id="myTable">
                        <tr>
                            <td>{index+1}</td>
                            <td>{cars.Brand}</td>
                            <td>{cars.Modal}</td>
                            <td>{cars.Price_day}</td>
                            <td>
                                <a href="" class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                                {/* <button class="btn btn-danger" onClick={() => this.delete(cars._id)}> Delete</button> */}
                                <button class="btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete(cars._id) } }> Delete</button>

                            </td>
                        </tr>
                    </tbody>
              
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
                </div>
                <div className="ftco-blocks-cover-1">
                    <div
                        className="ftco-cover-1 overlay innerpage"
                        style={{ backgroundImage: "url(images/hero_2.jpg" }}
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
                <div class="container mt-3">
                    <br></br>  <br></br>  <br></br>
                    <div class="row">
                        <div class="col-md-10">
                            <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                        </div>
                        <div class="col-md-2">
                            <a href="/insert" class="btn btn-primary btn-block"><i class="fa fa-plus" aria-hidden="true"></i> New Product</a>
                        </div>
                    </div>
                    <br></br>  <br></br>
                    <table class="table table-bordered text-center">
                    <thead>
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
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
            </div>
        )
    }
}

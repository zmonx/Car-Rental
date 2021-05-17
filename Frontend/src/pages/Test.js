import React, { Component } from 'react'

export default class Test extends Component {
    render() {

        const carThis = this.props.location.state.cars;


        return (
            
            <div>
                {<p>xxxxxxxxxxxxxxxxxxxxxxx{carThis._id}</p>}
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
                <br></br><br></br>
                <div class="container mt-3">
                    <h2>Update Car Information</h2> <br></br>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    <form method="post" action="/update">
                                        <div class="form-group">
                                            <input type="hidden" name="product_id" value="" />

                                            <label for="Brand">Brand</label>
                                            <input type="text" class="form-control" name="Brand" value="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="Model">Model</label>
                                            <input type="text" class="form-control" name="Model"  />
                                        </div>
                                        <div class="form-group">
                                            <label for="price">Price / Day</label>
                                            <input type="number" class="form-control" name="price" value="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="price">Doors</label>
                                            <input type="number" class="form-control" name="Doors"  value="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="price">Seats</label>
                                            <input type="number" class="form-control"   name="Seats" ></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="price">Transmission</label>
                                            <input type="text" class="form-control" name="Transmission"  value="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="price">Image Path</label>
                                            <input type="test" class="form-control" name="img_path"  value="" />
                                        </div><br></br>
                                        <a href="/product" class="btn btn-secondary"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</a>
                                        <button type="submit" class="btn btn-info"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br>
            </div>
        )
    }
}

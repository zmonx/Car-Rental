import React, { Component } from 'react';

class Login extends Component {
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
                                {/* <div className="col-lg-6 text-center">
                                    <h1>Contact Us</h1>
                                    <p>Look for a car, look for car rent.</p>
                                </div> */}
                                <div className="card col-lg-6">
                                <div className="col-lg-8 mx-auto">
                                <form>
                                    <br></br>   
                                    <h3 className="text-center">Sign In</h3>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" />
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                    <p className="forgot-password text-right">
                                        Forgot <a href="#">password?</a>
                                    </p>
                                </form>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

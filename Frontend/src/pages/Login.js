import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            redirect: false
        }
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
        const { username, password } = this.state
        if (username == 'admin' && password == "admin") {
            this.setState({ redirect: true })


        }
        else {
            alert("login or pass incorret")
        }


    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/manage"

            }}
            />
        }
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
                            <br></br><br></br><br></br><br></br><br></br><br></br>
                            <div className="row align-items-center justify-content-center">
                                {/* <div className="col-lg-6 text-center">
                                    <h1>Contact Us</h1>
                                    <p>Look for a car, look for car rent.</p>
                                </div> */}
                                <br></br>
                                <div className="card col-lg-6">
                                    <div className="col-lg-8 mx-auto">
                                        <form onSubmit={this.handleSubmit}>
                                            <br></br>
                                            <h3 className="text-center">Sign In</h3>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="text" className="form-control" placeholder="Enter email" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleInputChange} />
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
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

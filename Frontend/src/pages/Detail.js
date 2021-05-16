import React, { Component } from 'react';

class Detail extends Component {

    render() {

        // const carThis = this.props.location.state.cars


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
                <div className="ftco-blocks-cover-1">
                    <div
                        className="ftco-cover-1 overlay innerpage"
                        style={{ backgroundImage: "url(images/hero_2.jpg" }}
                    >
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br>
                <div class="product-big-title-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="product-bit-title text-center">
                                    <h2>PRODUCTS</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div class="container bootdey">
                    <div class="col-md-12">
                        <section class="panel">
                            <div class="panel-body">
                                <div class="col-md-6">
                                    <div class="pro-img-details"> <br></br>
                                        <img src="<%- img_path%>" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <br></br>
                                    <h2 class="">
                                    </h2>
                                    <div class="product_meta">
                                        <span class="posted_in"> <strong class="">Categories : </strong>   </span>
                                        <span class="tagged_as"><strong class="">Tags : </strong> <a rel="tag" href="#">APPLE</a>, <a rel="tag" href="#">UNISEX</a>.</span>
                                    </div>
                                    <div class="m-bot15"> <strong class="">Price : </strong>   <span class="pro-price"> ฿  </span></div>
                                    <br></br>
                                    <div class="quantity quantitys">
                                        <input type="number" size="4" class="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }

}

export default Detail;
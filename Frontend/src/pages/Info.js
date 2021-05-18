import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Info extends Component {
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


                    {/* <div className="col-md-8">
                        <div className="row">
                            <div className="card"> 
                            <div className="card-title"> 
                                <h3>Rental Information</h3>
                            </div>

                            </div>
                        </div>
                    </div> */}
                    {/* <div class="col-8 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="newFont">สร้างตัวชี้วัด</h3><br></br>
                                <hr></hr> <br></br>
                                <form class="forms-sample" action="" method="post">

                                    <div class="row form-group">
                                        <div class="form-group col-md-7">
                                            <label class="newFont">หัวข้อ</label>
                                            <input type="text" name="indicator_list" id="indicator_list" class="form-control" placeholder="หัวข้อตัวขี้วัด" required />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label class="newFont">หน่วยนับ</label>

                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="newFont">เป้าหมาย</label>
                                            <input type="text" class="form-control" placeholder="จำนวน/หน่วยนับ" value="" required />
                                        </div>
                                        <div class="form-group col-md-9"></div>
                                        <div class="form-group col-md-3">
                                            <div class="button-position">
                                                <button class="btn btn-gradient-primary mr-2 newFont">เพิ่มตัวชี้วัด</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}

            <div class="flex items-center justify-center min-h-screen">
                    <div class="max-w-md md:max-w-2xl px-2">
                        <div class="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                            <div class="bg-cover bg-bottom h-56 md:h-auto md:w-56" >
                            </div>
                            <div>
                                <div class="p-4 md:p-5">
                                    <p class="font-bold text-xl md:text-2xl">Amsterdam Walking Tour</p>
                                    <p class="text-gray-700 md:text-lg">Explore popular tourist destinations as well as hidden local favourites.</p>
                                </div>
                                <div class="p-4 md:p-5 bg-gray-100">
                                    <div class="sm:flex sm:justify-between sm:items-center">
                                        <div>
                                            <div class="text-lg text-gray-700"><span class="text-gray-900 font-bold">17</span> per person*</div>
                                            <div class="flex items-center">
                                                <div class="flex inline-flex -mx-px">
                                                
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">Book now</button>
                                    </div>
                                    <div class="mt-3 text-gray-600 text-sm md:text-base"> date.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                </div>
            </div >
        )
    }
}

export default Info

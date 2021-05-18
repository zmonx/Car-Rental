import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Info extends Component {


    constructor(props) {
        super(props)
        this.state = {
          info: "",
    
        }}    



    componentDidMount() {
        axios.get("http://localhost:8000/rent")
          .then(response => {
            console.log(response.data);
            this.setState({ info: response.data });
          },
            function (error) {
              console.log(error);
            })
      }

      showProducts() {
        return (
          this.state.info &&
          this.state.info.map(info => (
            <div class="card topp" >
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img" src={info.img} alt="Suresh Dasari Card"/>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title"><b>Brand :</b> {info.Brand} {info.Modal}    </h5>
                        <h5  class="card-text"><b>Name : </b>{info.FirstName} {info.LastName}. </h5 >
                        <h5  class="card-text"><b>Driver_License : </b>{info.Id_License} </h5 >
                        <h5  class="card-text"><b>Total Price : </b>{info.Total_price} ฿ </h5 >
                        {/* <h5  class="card-text"><b>Driver_License : </b>{info.Id_License} </h5 > */}
                        <h5  class="card-text"><b>Date : </b>{info.Journey_date} <b> to </b> {info.Return_date}</h5>

                        <button  class="btn btn-primary ss">Confirm</button>
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

<div classname="posc"></div>

<div class="container bcontent posc ">
  
        <div className="Book3ContentA-head-option topp">RENT INFORMATION</div>
        {/* <hr /><br/> */}
        {/* <div class="card topp" >
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img" src="https://cdn2.rcstatic.com/images/car_images/web/toyota/c-hr_lrg.jpg" alt="Suresh Dasari Card"/>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title">Suresh Dasari</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <a href="#" class="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card topp" >
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img class="card-img" src="https://cdn2.rcstatic.com/images/car_images/web/toyota/c-hr_lrg.jpg" alt="Suresh Dasari Card"/>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title">Suresh Dasari</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <a href="#" class="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div> */}
      {this.showProducts()}

    </div>



                </div>
                
            </div >
        )
    }
}

export default Info

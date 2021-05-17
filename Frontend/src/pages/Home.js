import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <body
          data-spy="scroll"
          data-target=".site-navbar-target"
          data-offset="300"
        > */}
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

        <div
          className="site-section section-3"
          style={{ backgroundImage: "url(images/img_3.jpg" }}
        // style="background-image: url('images/hero_2.jpg');"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h1 class="display-3 text-white font-weight-light text-uppercase" >welcome</h1>
                <h3 className="text-white font-weight-bold text-capitalize"><mark>Car Hire in Thailand</mark></h3>
              </div>
            </div>

            
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/gg2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                        <Link to="/cars">
                          พร้อมลุยไปกับคุณทุกที่
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/post_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                        <Link to="/cars">
                        สะดวกสบาย อุ่นใจทุกครั้งที่ได้ขับ
                        </Link>
                      </h2>
                      
                      
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div class="post-entry-1 h-100">
                    <Link to="/single">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-entry-1-contents">
                      <h2>
                        <Link to="/cars">
                          สวยหรู ทันสมัย
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          

            <div className="container site-section mb-5">
              <div className="row justify-content-center text-center">
                <div className="col-7 text-center mb-5">
                  <h2 className=" text-white">สิ่งที่คุณจะได้จากเรา</h2>
                  <p className=" text-white">
                    เราคือทุกจุดหมายเรื่องรถของคุณ หากคุณต้องการเช่ารถยนต์ไม่ว่าจะเพื่อหารถใช้งานระหว่างที่เข้าศูนย์หรือใช้งานภายในบริษัท การใช้รถเพื่อทำธุระสำคัญและโอกาสอื่นๆ คุณสามารถใช้บริการเช่ารถยนต์กับ CarRent ได้อย่างง่ายดายซึ่งเรามีรถเช่าไว้รองรับมากกว่า 80 คันในทุกประเภทรถยนต์บริการรับส่งรถครอบคลุมภายในประเทศ พร้อมอุปกรณ์ติดรถยนต์ เพื่อทำให้ทุกการเดินทางของคุณสะดวกสบายยิ่งขึ้นกว่าและดีที่สุด
                </p>
                </div>
              </div>
              <div className="how-it-works d-flex">
                <div className="step">
                  <span className="number">
                    <span>01</span>
                  </span>
                  <span className="caption text-white">ตัวเลือกมากมาย</span>
                </div>
                <div className="step">
                  <span className="number">
                    <span>02</span>
                  </span>
                  <span className="caption text-white">สะดวกสบาย</span>
                </div>
                <div className="step">
                  <span className="number">
                    <span>03</span>
                  </span>
                  <span className="caption text-white">ไม่ต้องจ่ายแพงก็ขับได้</span>
                </div>
                <div className="step">
                  <span className="number">
                    <span>04</span>
                  </span>
                  <span className="caption text-white">ติดต่อง่ายไม่ผิดหวัง</span>
                </div>
                <div className="step">
                  <span className="number">
                    <span>05</span>
                  </span>
                  <span className="caption text-white">รับประกันราคาถูก</span>
                </div>
              </div>
            </div>
          </div>



        </div>
            </div>
    );
  }
}

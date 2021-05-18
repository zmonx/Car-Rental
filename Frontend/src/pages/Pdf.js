import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
export default class Pdf extends Component {

    printReceipt() {
        window.print();
    }

    render() {
        const carThis = this.props.location.state.cars;
        const styles = StyleSheet.create({
            page: {
                backgroundColor: 'white'
            },
            section: {


            },
            header: {
                fontSize: 40,
                textAlign: 'center',
                justifyContent: "center",
                color: 'black',
                alignContent: 'center'

            },
            image: {
                marginVertical: 15,
                marginHorizontal: 100,
                width: 400,
                height: 400
            },
        });

        const MyDocument = () => (
            <Document>
                <Page size="A4" >

                    <View style={styles.header}>
                        {/* <Text><h1 style={styles.header}> RECEIPT</h1></Text> */}
                    </View>

                    <Image
                        style={styles.image}
                        source={{ uri: carThis.img }}
                    />

                    <Text><h4 className="RECEIPT1"><b>CAR INFORMATION</b></h4></Text>
                    <hr></hr>
                    <div className="row RECEIPT2">
                        <div className="col-md-6">
                            <div className="from-group ml-auto">
                                <Text><h4>Brand : {carThis.Brand} </h4> </Text>
                            </div>
                            <div className="from-group">
                                <Text><h4>Price/Day : {carThis.Price_day} ฿ </h4> </Text>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group ml-auto">
                                <Text><h4>Model : {carThis.Modal} </h4> </Text>
                            </div>
                            <div className="from-group">
                                <Text><h4>Transmission : {carThis.Transmission} </h4> </Text>
                            </div>
                        </div>
                    </div>
                    <Text><hr></hr><h4 className="RECEIPT1"><b>YOUR INFORMATION</b></h4></Text>
                    <hr></hr>
                    <div className="row RECEIPT2">
                        <div className="col-md-6">
                            <div className="from-group ml-auto">
                                <Text><h4>First name :  {sessionStorage.getItem("First_name")}</h4> </Text>
                            </div>
                            <div className="from-group">
                                <Text><h4>Phone :  {sessionStorage.getItem("Phone_Number")} </h4> </Text>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group ml-auto">
                                <Text><h4>Last name : {sessionStorage.getItem("Last_name")} </h4> </Text>
                            </div>
                            <div className="from-group">
                                <Text><h4>Driver License : {sessionStorage.getItem("Driver_License")}</h4> </Text>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="from-group ml-auto">
                                <Text><h4>E-mail :  {sessionStorage.getItem("Email_address")}</h4> </Text>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group ml-auto">
                                <Text><h4>Journey date : {sessionStorage.getItem("Start")}</h4> </Text>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="from-group ml-auto">
                                <Text><h4>Return date :  {sessionStorage.getItem("End")}</h4> </Text>
                            </div>

                        </div>
                        <div className="col-md-6 mt-5">
                            <button className="btn btn-info" onClick={this.printReceipt}>Print</button>
                        </div>
                    </div>
                </Page>
            </Document >
        );

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
                    <div className="site-section bg-light" id="contact-section">
                        <div className="container">
                            <div className="row justify-content-center text-center"></div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="Book3ContentA-head-option pos">RECEIPT</div>
                                    <div className="pos" style={styles.page}>
                                        <MyDocument />

                                    </div>
                                </div>
                                <div className="col-lg-4 ml-auto">
                                    <div className="bg-white p-3 p-md-5">
                                        <h3 className="text-black mb-4">Contact Info</h3>
                                        <ul className="list-unstyled footer-link">
                                            <li className="d-block mb-3">
                                                <span className="d-block text-black">Address:</span>
                                                <span>222 Thaiburi, Thasala, Nakhon Si Thammarat 80160</span>
                                            </li>
                                            <li className="d-block mb-3">
                                                <span className="d-block text-black">Phone:</span>
                                                <span>012-3456-789</span>
                                            </li>
                                            <li className="d-block mb-3">
                                                <span className="d-block text-black">Email:</span>
                                                <span>Specialcarrent@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}


import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
export default class Pdf extends Component {

    render() {
        const carThis = this.props.location.state.cars;
        const styles = StyleSheet.create({
            page: {
                backgroundColor: 'tomato'
            },
            section: {


            },
            header: {
                fontSize: 40,
                textAlign: 'center',
                justifyContent: "center",
                color: 'white',
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
                        <Text><h1 style={styles.header}>CREATE BY SWE & COE CAR RENTAL SYSTEM</h1></Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={{ uri: carThis.img }}
                    />
                    <Text><h4>CAR INFORMATION</h4></Text>
                    <Text>{carThis.Brand}</Text>
                    <Text><h4>YOUR INFORMATION</h4></Text>
                </Page>
            </Document>
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

                    <div className="container">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8 " style={styles.page}>
                                <MyDocument />

                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


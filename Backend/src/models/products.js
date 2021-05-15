const mongodb = require('mongodb');
const getDb = require('../../util/database').getDb;

class Products {

    constructor(Brand,Modal,Price_day,Doors,Seats,Transmission,id) {
        this.Brand = Brand,
        this.Modal = Modal,
        this.Price_day =Price_day,
        this.Doors = Doors,
        this.Seats = Seats,
        this.Transmission = Transmission,
        this._id =id
    }

    static fetchCarByID(prodId) {
        const db = getDb();
        return db
            .collection('Car')
            .find({ _id: new mongodb.ObjectId(prodId) })
            .toArray()
            .then(products => {
                console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetCarAll() {
        const db = getDb();
        return db
            .collection('Car')
            .find()
            .toArray()
            .then(products => {
                // console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Products;

 // static findById(prodId) {
    //     const db = getDb();
    //     return db
    //         .collection('products')
    //         .find({ _id: new mongodb.ObjectId(prodId) })
    //         .next()
    //         .then(product => {
    //             console.log(product);
    //             return product;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    // static fetchAll() {
    //     const db = getDb();
    //     return db
    //         .collection('products')
    //         .find()
    //         .toArray()
    //         .then(products => {
    //             console.log(products);
    //             return products;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    // static findById(prodId) {
    //     const db = getDb();
    //     return db
    //         .collection('products')
    //         .find({ _id: new mongodb.ObjectId(prodId) })
    //         .next()
    //         .then(product => {
    //             console.log(product);
    //             return product;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

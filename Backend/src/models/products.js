const mongodb = require('mongodb');
const getDb = require('../../util/database').getDb;

class Products {
    constructor(product_name, price, id) {
        this.product_name = product_name;
        this.price = price;
        this._id = id; 
        // this.name 
    }
    static fetchAllByID(prodId) {
        const db = getDb();
        return db
            .collection('products')
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

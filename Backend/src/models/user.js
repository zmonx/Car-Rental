const mongodb = require('mongodb');
const getDb = require('../../util/database').getDb;

class User {

    constructor(username, password, Name, Tel, Address, id) {
        this.username = username,
            this.password = password,
            this.Name = Name,
            this.Tel = Tel,
            this.Address = Address,
            this._id = id
    }

    // static fetchCarByID(prodId) {
    //     const db = getDb();
    //     return db
    //         .collection('Car')
    //         .find({ _id: new mongodb.ObjectId(prodId) })
    //         .toArray()
    //         .then(products => {
    //             console.log(products);
    //             return products;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    static fetchUser() {
        const db = getDb();
        return db
            .collection('User')
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

   
    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            // Update the product
            dbOp = db
                .collection('Car')
                .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
        } else {
            // Insert product
            dbOp = db.collection('Car').insertOne(this);
        }
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
    
}

module.exports = User;


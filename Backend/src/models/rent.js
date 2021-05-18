const mongodb = require('mongodb');
const getDb = require('../../util/database').getDb;

class Rent {

    constructor(FirstName,LastName,Email,Id_License,Tel,Journey_date,Return_date,Status,Brand,Modal,img,Total_price,id) {
        this.FirstName = FirstName,
        this.LastName = LastName,
        this.Email = Email,
        this.Id_License = Id_License,
        this.Tel = Tel,
        this.Journey_date = Journey_date,
        this.Return_date = Return_date,
        this.Status = Status,
        this.Brand = Brand,
        this.Modal = Modal,
        this.img = img,
        this.Total_price = Total_price,
        this._id = id
    }

    static fetchRent() {
        const db = getDb();
        return db
            .collection('Rent')
            .find({Status:"0"})
            .toArray()
            .then(products => {
                // console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static deleteById(license) {
        const db = getDb();
        return db
            .collection("Rent")
            .deleteOne({Id_License: license })
            .then((result) => {
                console.log("Deleted");
            })
            .catch((err) => {
                console.log(err);
            });
    }


    static Confirm() {
        const db = getDb();
        return db
            .collection('Rent')
            .find({Status:"1"})
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
                .collection('Rent')
                .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
        } else {
            // Insert product
            dbOp = db.collection('Rent').insertOne(this);
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

module.exports = Rent;


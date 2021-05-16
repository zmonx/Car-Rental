// const { validationResult } = require('express-validator')
const mongodb = require('mongodb');
// const Product = require('../models/products');
const Product = require('.././src/models/products');
const Rent = require('.././src/models/rent');


const ObjectId = mongodb.ObjectId;


exports.getById = (req, res) => {
    const { product_id } = req.params;
    Product.fetchCarByID(product_id)
        .then(products => {
            res.json({ 'Car': products })
        });
}

exports.getCarAll = (req, res) => {
    Product.fetCarAll()
        .then(products => {
            res.json(products)
        });
}


exports.postAddProduct = (req, res, next) => {

    const { Brand, Modal, Price_day, Doors, Seats, Transmission, img } = req.params;
    console.log("🚀 ~ file: products.js ~ line 30 ~ Brand", Brand)

    const product = new Product(Brand, Modal, Price_day, Doors, Seats, Transmission, img);
    product
        .save()
        .then(result => {
            console.log('Created Product');
            res.json({ "msg": Brand });
        })
        .catch(err => {
            console.log(err);
        });

};

exports.getDeleteProduct = (req, res, next) => {
    const { car_id } = req.params;
    console.log(car_id);
    Product.deleteById(car_id)
      .then(() => {
        console.log("Delete Product");
      })
      .catch((err) => console.log(err));
  };












// exports.getSearchProduct = (req, res, next) => {
//     Product.fetchAll()
//         .then(products => {
//             res.render('products/search', {
//                 pageTitle: 'Search Product',
//                 prods: products,
//             });
//         })
//         .catch(err => { 
//             console.log(err);
//         });
// }
// exports.test = (req, res) => {
//     res.json('what it is ?sadasdasdas');
// }
// exports.getAllCate3 = (req, res) => {
//     Product.fetchAllByCate3()
//         .then(products => {
//             res.json({'products':products})
// });
// }
// exports.getDeleteProduct = (req, res, next) => {
//     const { product_id } = req.params;
//     console.log(product_id);
//     Product.deleteById(product_id)
//         .then(() => {
//             console.log('Delete Product');
//             res.redirect('/products');
//         })
//         .catch(err => console.log(err));
// };
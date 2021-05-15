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
        res.json({'Car':products})
    });
}

exports.getCarAll = (req, res) => {
    Product.fetCarAll()
        .then(products => {
            res.json(products)
});
}


exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    const {Id_car,FirstName,LastName,Email,Id_License,Tel,Journey_date,Return_date,Total_price,Description,Status} = req.body;
    const rent = new Rent(Id_car,FirstName,LastName,Email,Id_License,Tel,Journey_date,Return_date,Total_price,Description,Status);
        rent
        .save()
        .then(result => {
            console.log('Created Product');
        })
        .catch(err => {
            console.log(err);
        });

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
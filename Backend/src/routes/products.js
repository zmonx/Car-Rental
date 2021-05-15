const express = require('express');
// const { check } = require('express-validator')
const router = express.Router();
var cors = require('cors')
var app = express()
const productsController = require('../../controllers/products');


// router.get('/details/:product_id',productsController.getByname);
router.get('/car', productsController.getCarAll);


app.use(cors())

app.get('/test', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
   

exports.routes = router;


// /admin/add-product => GET
// router.get('/search', productsController.getSearchProduct);

// router.post('/insert', [
//     check('product_name').trim().not().isEmpty().withMessage("product name is required"),
//     check('price').isFloat({ gt: 0 }).withMessage("greater than zero")
// ], productsController.postAddProduct);

// router.post('/update', [
//     check('product_id').not().isEmpty().withMessage("empty"),
//     check('product_name').trim().isLength({ min: 1 }).withMessage("product name is required"),
//     check('price').isFloat({ gt: 0 }).withMessage("greater than zero")
// ], productsController.postUpdateProduct);

// router.get('/delete/:product_id', productsController.getDeleteProduct);

// router.get('/update/:product_id', productsController.getUpdateProduct);

// router.get('/test', productsController.test);
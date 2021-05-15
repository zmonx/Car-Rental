const express = require('express');
// const { check } = require('express-validator')
const router = express.Router();
var cors = require('cors')
var app = express()
const productsController = require('../../controllers/products');

app.use(cors())

router.get('/details/:product_id',productsController.getById);
router.get('/car', productsController.getCarAll);


router.post('/insert', productsController.postAddProduct);



   

exports.routes = router;


// /admin/add-product => GET
// router.get('/search', productsController.getSearchProduct);

// router.post('/update', [
//     check('product_id').not().isEmpty().withMessage("empty"),
//     check('product_name').trim().isLength({ min: 1 }).withMessage("product name is required"),
//     check('price').isFloat({ gt: 0 }).withMessage("greater than zero")
// ], productsController.postUpdateProduct);

// router.get('/delete/:product_id', productsController.getDeleteProduct);

// router.get('/update/:product_id', productsController.getUpdateProduct);

// router.get('/test', productsController.test);
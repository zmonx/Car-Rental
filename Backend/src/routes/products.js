const express = require('express');

// const { check } = require('express-validator')
const router = express.Router();

const productsController = require('../../controllers/products');


// router.get('/details/:product_id',productsController.getByname);
router.get('/car', productsController.getCarAll);




router.get ('/testq',(req , res) => {
    res.json("dsf sdfgysdgfhdsgfhdsgfhsdghfgdsyufgdhh fhudfgsdhjbhuiy");
});


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
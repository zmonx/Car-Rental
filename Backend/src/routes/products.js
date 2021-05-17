const express = require('express');
// const { check } = require('express-validator')
const router = express.Router();
var cors = require('cors')
var app = express()
const productsController = require('../../controllers/products');

app.use(cors())

router.get('/details/:product_id', productsController.getById);
router.get('/car', productsController.getCarAll);


router.get('/insert/:Brand/:Modal/:Price_day/:Doors/:Seats/:Transmission/:img', productsController.postAddProduct);

router.get("/delete/:car_id", productsController.getDeleteProduct);

router.post('/update', productsController.postUpdateProduct);


exports.routes = router;


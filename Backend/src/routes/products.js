const express = require('express');
// const { check } = require('express-validator')
const router = express.Router();
var cors = require('cors')
var app = express()
const productsController = require('../../controllers/products');

app.use(cors())

router.get('/details/:product_id', productsController.getById);
router.get('/car', productsController.getCarAll);
router.get('/user', productsController.getUser);

router.get('/rent', productsController.getRent);

router.get('/insert/:Brand/:Modal/:Price_day/:Doors/:Seats/:Transmission/:img', productsController.postAddProduct);

router.post('/insert/rent/', productsController.postAddRent);




router.get("/delete/:car_id", productsController.getDeleteProduct);
router.get("/delrent/:license", productsController.getDeleteRent);


// router.get('/update/:car_id/:Brand/:Modal/:Price_day/:Doors/:Seats/:Transmission/:img', productsController.postUpdateProduct);
router.post('/update', productsController.postUpdateProduct);
router.post('/status', productsController.postUpdateStatus);

router.get('/confirm', productsController.getConfirm);


exports.routes = router;


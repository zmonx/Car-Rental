const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const app = express();


var cors = require('cors')

app.use(cors())
const productData = require('./src/routes/products');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", productData.routes);



mongoConnect(() => {
    app.listen(8000);
});
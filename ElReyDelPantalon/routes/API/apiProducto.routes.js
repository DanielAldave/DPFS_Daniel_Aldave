const express = require("express");
const { products, detail, lastProduct, categories } = require("../../controllers/API/products.apiControllers");

const router = express.Router();


// Endpoint de productos
router.get("/", products);

// Endpoint del detalle del producto
router.get("/detail/:id", detail);

// Endpoint del ultimo producto
router.get('/last-product', lastProduct);

router.get('/categories', categories)

module.exports = router;
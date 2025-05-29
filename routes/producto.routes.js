const express = require('express')
const {getProduct, create} = require('../controllers/products.controllers.js')
const router = express.Router()

const upload = require("../middlewares/multer.js");
const guestAuth = require("../middlewares/guestAuth.js");
const { createCheck, editProductCheck } = require("../middlewares/validator.js");




// vista para nuevo producto
router.get('/nuevoProducto/:id',getProduct);

//guestAuth
//vista de fromulario de producto
router.get('/create', create);

router.post('/postCreate', createCheck, create);

module.exports = router;



const express = require('express');
const { getProduct, create, uploadProduct, edit, updateProduct, product, destroy } = require('../controllers/products.controllers.js');
const router = express.Router();

const upload = require("../middlewares/multer.js");
const guestAuth = require("../middlewares/guestAuth.js");
const { createCheck, editProductCheck } = require("../middlewares/validator.js");

// vista para nuevo producto
router.get('/nuevoProducto/:id', getProduct);

// guestAuth
// vista de formulario de producto
router.get('/create', create);
// este es el formulario para crear un producto
router.post('/create', upload.uploadProd.single("imagen"), createCheck, uploadProduct);

router.get('/detail/:id', product);

// ruta para editar producto
router.get('/editar/:id', edit);

// ruta para actualizar producto
router.put('/editar/:id', upload.uploadProd.single("imagen"), editProductCheck, updateProduct);

//proceso de borrar
router.delete('/delete/:id', destroy);

module.exports = router;

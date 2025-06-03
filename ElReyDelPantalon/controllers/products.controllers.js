const fs = require('fs');
//const path = require('path');
const db = require('../database/models');
const { uploadProd } = require('../middlewares/multer');
const { validationResult } = require('express-validator');


module.exports = {
    getProduct: async (req, res,) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            res.render('producto.ejs', { product });

        } catch (error) {
            console.log(error);

        }
    },
    create: async (req, res) => {
        try {
            const categories = await db.Category.findAll();
            res.render('nuevoProducto.ejs', {
                categories,
                old: {},
                errors: {}
            });
        } catch (error) {
            console.log(error);
        }
    },
    uploadProduct: async (req, res) => {
        try {
            const categories = await db.Category.findAll();
            const resultValidator = validationResult(req);
            if (resultValidator.isEmpty()) {
                let newProduct = {
                    name: req.body.name,
                    description: req.body.description,
                    price: parseInt(req.body.price, 10),
                    category_id: req.body.category,
                    image: req.file?.filename || "img_default.jpg"
                };
                await db.Product.create(newProduct);
                res.redirect("/");
            } else {
                return res.render('nuevoProducto.ejs', {
                    errors: resultValidator.mapped(),
                    old: req.body,
                    categories
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el producto');
        }
    },
    edit: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            const categories = await db.Category.findAll();
            res.render('editarProducto.ejs', { 
                product, 
                categories, 
                errors: {}, 
                old: product 
            });
        } catch (error) {
            console.log(error);
            res.status(500).send('Error al cargar el formulario de edición');
        }
    },

    updateProduct: async (req, res) => {
        try {
            const resultValidator = validationResult(req);
            const categories = await db.Category.findAll();
            if (resultValidator.isEmpty()) {
                await db.Product.update({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category_id: req.body.category,
                    talle: req.body.talle,
                    image: req.file?.filename || req.body.oldImage // Usa la imagen anterior si no se sube una nueva
                }, {
                    where: { id: req.params.id }
                });
                res.redirect('/'); // O a la vista de detalle
            } else {
                const product = await db.Product.findByPk(req.params.id);
                res.render('editarProducto.ejs', {
                    product,
                    categories,
                    errors: resultValidator.mapped(),
                    old: req.body
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al editar el producto');
        }
    },


// Eliminar un producto
    destroy: async (req, res) => { // metodo para eliminar el producto
        //OPCIONAL
        //let modelToDelete = await db.Product.findByPk(req.params.id);
        //if (modelToDelete.image != "img_default.png") {
        //    const path = require('path');
        //    fs.unlinkSync(path.join(__dirname, '../public/img/products/', modelToDelete.image));
        //}
        try {
            const modelDelete = await db.Product.destroy({
                where: {
                    id: req.params.id
                }
            });
            console.log('modelo borrado', modelDelete);
            // redireccionar
            res.redirect('/');
        } catch (error) {
            console.log(error);

        }},
    // Vista del producto
    product: async(req, res) => { // vista del producto
        try {
            const modelFound = await db.Product.findByPk(req.params.id);

            res.render('detail', { modelFound });
        } catch (error) {
            console.log(error);
        }
    }

    
    }
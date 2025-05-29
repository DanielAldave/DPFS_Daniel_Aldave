const fs = require('fs');
//const path = require('path');
const db = require('../database/models');
const { uploadProd } = require('../middlewares/multer');
//const { validationResult } = require('express-validator');


module.exports = {
    getProduct:async (req, res,) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            res.render('producto.ejs', {product});
            
        } catch (error) {
            console.log(error);
            
        }
    },
    create: async (req, res) => {
        try {
            const categories = await db.Category.findAll();
            res.render('nuevoProducto.ejs', {categories});
        } catch (error) {
            console.log(error);
        }
    },
    uploadProduct: async (req, res) => {
        try {
            const categories = await db.Category.findAll();
            const resultValidator = validationResult(req);
            // Validar que todos los campos requeridos estén presentes
            if(resultValidator.isEmpty()){
                let newProduct = {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category_id: req.body.category,
                    image: req.file?.filename || "imagen default.png"
                };
                await db.Product.create(newProduct);

                res.redirect("/");

            } else{
                return res.render('producto/create',{
                    errors: resultValidator.mapped(), 
                    old: req.body, categories, files
                });
            }

            // Crear el producto en la base de datos
            await db.Product.create({
                name,
                price,
                description,
                categoryId,
                image
            });

            res.redirect('/'); // Redirigir a la página principal o donde desees
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el producto');
        }
    }
}
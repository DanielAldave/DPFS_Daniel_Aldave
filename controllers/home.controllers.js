
const db = require('../database/models');

module.exports = {
    home:async (req, res,) => {
        try {
            const products = await db.Product.findAll(
                {include:["category",]}
            );
            res.render('home', { products });
            
        } catch (error) {
            console.log(error);
            
        }
    },
}
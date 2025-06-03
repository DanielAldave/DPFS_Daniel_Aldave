const express = require('express')
const homeController = require('../controllers/home.controllers.js');
const router = express.Router();

// vista del home
router.get('/', homeController.home);



module.exports = router;

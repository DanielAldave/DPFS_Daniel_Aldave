const express = require('express')
const {gethome} = require('../controllers/home.controllers.js')
const router = express.Router()

// vista del home

router.get('/', gethome)

